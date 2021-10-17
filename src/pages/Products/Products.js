import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { instance } from '../../axios/axios';

const Products = () => {

    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            history.push('/login');
        } else {
            onGetProducts();
        }
    }, []);

    const onLogout = () => {
        localStorage.clear();
        history.push('/login');
        // localStorage.removeItem('token');
    }

    const onGetProducts = async () => {
        try {

            const response = await instance.get('/products?limit=2&offset=6');
            console.log(response.data);
        } catch( error ){
            alert(error);
        }
    }

    return (
        <div>
            <button onClick={onLogout}>Logout</button>
            <h1>Soy Products!!!!</h1>
        </div>
    )
}

export default Products;
