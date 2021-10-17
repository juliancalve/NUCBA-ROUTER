// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { instance } from '../../axios/axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token) {
            history.push('/products');
        }
    }, []);

    const history = useHistory();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onLogin = async () => {
        try{
            const response = await instance.post('/auth/login', { email, password });

            console.log(response);
            if(response.status === 200){
                setError(false);
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                history.push('/products');
            } else {
                setError(true);
            }
            
        } catch( error ) {
            alert(error);
        }
        // si me quiero loguear y esta todo ok, ejecuto el history.pushJ
    }

    const onRegister = () => {
         history.push('/register');
    }

    return (
        <div>
            <h1>Che soy el Login</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto'}}>
                <input type='text' value={email} onChange={handleChangeEmail}/>
                <input type='password' value={password} onChange={handleChangePassword}/>
                {error && <p style={{color: 'red'}}>Email o Contraseña invalidos</p>}
                <button type='button' onClick={onLogin}>Login</button>
                <small style={{color: 'blue', cursor: 'pointer'}} onClick={onRegister}>Registrate</small>
                {/* <Link to='/login'>Login</Link> */}
            </form>
        </div>
    )
}

export default Login;
