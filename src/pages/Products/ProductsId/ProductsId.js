import { useLocation, useParams } from "react-router";

const ProductsId = () => {

    const { id } = useParams();
    // console.log(params);
    const query = useLocation()
    console.log(query.search);

    const total = query.search.split('&');
    console.log(total[0].replace('?', ''));

    // console.log(window.location.search);

    // useEffect(() => {
    //     fetch(`google.com/persons/${id}`)
    // }, [])

    return (
        <div>
            <p>Soy el product ID <strong>{id}</strong></p>
        </div>
    )
}

export default ProductsId;
