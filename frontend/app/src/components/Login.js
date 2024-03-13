import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; // Importando o Navigate e useNavigate
import Form from './Form';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Obtendo a função navigate

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email, password);

        try {
            const response = await axios.post('http://localhost:3003/login',
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            console.log(response.data);
            setUser(response.data);

        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor');
            } else if (error.response.status === 401) {
                setError('Usuário ou senha inválidos');
            }
        }
    };

    // Remova a função handleLogout se não for utilizada
    /* const handleLogout = async (e) => {
        e.preventDefault();
        setUser(null);
        setError('');
    }; */

    if (user) {
        return <Navigate to="/form" />; // Redirecionando para a rota /form se o usuário estiver logado
    }

    return (
        <div className="login-form-wrap">
            <div>
                <h2>Login</h2>
                <form className='login-form'>
                    <input type="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit"
                        className='btn-login'
                        onClick={(e) => handleLogin(e)}>Login</button> <br /> <br />
                    <a href="/forgot-password">Esqueceu sua senha?</a> </form>
                <p>{error}</p>
            </div>
        </div>
    );
}

export default Login;
