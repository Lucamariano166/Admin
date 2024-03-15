import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Grid = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3003/getUsers');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Nome:</strong> {user.nome}<br />
            <strong>Email:</strong> {user.email}<br />
            <strong>Telefone:</strong> {user.fone}<br />
            <strong>Data de Nascimento:</strong> {user.data_nascimento}<br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Grid;
