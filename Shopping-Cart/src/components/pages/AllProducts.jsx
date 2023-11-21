import { useContext} from "react";
import { ProductsContext } from "../../App";
import ItemCard from "../ItemCard";

function AllProducts() {
    const allProducts = useContext(ProductsContext)
    return (
        <>
            {allProducts.map((product) => {
                return <ItemCard product={product} key={product.id}/>
            }) }
        </>
    );
}

export default AllProducts;