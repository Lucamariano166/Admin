import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dataNascimento: ''
  });
  const [showAlert, setShowAlert] = useState(false); // Estado para controlar a exibição do alerta

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3003/addUser', formData); // Corrigido
      setShowAlert(true); // Exibir o alerta de sucesso
      // Limpar o formulário após a submissão
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        dataNascimento: ''
      });
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
      setShowAlert(false); // Esconder o alerta de sucesso, se estiver sendo exibido
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Nome:</Label>
      <Input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <Label>E-mail:</Label>
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Label>Telefone:</Label>
      <Input
        type="tel"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        required
      />

      <Label>Data de Nascimento:</Label>
      <Input
        type="date"
        name="dataNascimento"
        value={formData.dataNascimento}
        onChange={handleChange}
        required
      />

      <Button type="submit">Adicionar Usuário</Button>

      {/* Exibir o alerta de sucesso se showAlert for true */}
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Usuário adicionado com sucesso!
        </Alert>
      )}
    </FormContainer>
  );
};

export default Form;
