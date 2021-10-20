// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from 'axios';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [error, setError] = useState(false);
    
    const history = useHistory();

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleChangeAge = (e) => {
        setAge(e.target.value)
    }

    const onRegister = async () => {
        try{
            const response = await axios.post('https://back-sandbox.herokuapp.com/api/auth/register',
            { 
                email,
                password,
                name,
                lastName,
                age,
                img: ''
            });

            console.log(response);
            if(response.status === 201){
                setError(false);
                alert('Te registraste exitosamente!');
                history.push('/login');
            } else {
                setError(true);
            }
            
        } catch( error ) {
            alert(error);
        }
        // si me quiero loguear y esta todo ok, ejecuto el history.pushJ
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token) {
            history.push('/products');
        }
    }, []);

    const onBack = () => {
        history.goBack();
    }

    return (
        <div>
            <strong style={{cursor: 'pointer'}} onClick={onBack}>{'<-'}Volver</strong>
            <h1>Registrate</h1>
            <form style={{display: 'flex', flexDirection: 'column', width: '50%', margin: 'auto'}}>
                <input type='text' placeholder='Name' value={name} onChange={handleChangeName}/>
                <input type='text' placeholder='LastName' value={lastName} onChange={handleChangeLastName}/>
                <input type='number' placeholder='Age' value={age} onChange={handleChangeAge}/>
                <input type='email' placeholder='Email' value={email} onChange={handleChangeEmail}/>
                <input type='password' placeholder='Password' value={password} onChange={handleChangePassword}/>
        <input type='date'/>
                {error && <p style={{color: 'red'}}>Alguno de tus campos es malaso!</p>}
                <button type='button' onClick={onRegister}>Register</button>
            </form>
        </div>
    )
}

export default Register;
