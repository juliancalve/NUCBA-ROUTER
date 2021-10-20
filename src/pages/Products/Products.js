import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { instance } from '../../axios/axios';

const Products = () => {

    const history = useHistory();

    const [products, setProducts] = useState([]);

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
            setProducts(response.data.data.data);
        } catch( error ){
            alert(error);
        }
    }

    return (
        <div>
            <button onClick={onLogout}>Logout</button>
            <h1>Somos Products!!!!</h1>
            {products.map( p => {
                return <h6>{p.name}</h6>
            })}
        </div>
    )
}

export default Products;
