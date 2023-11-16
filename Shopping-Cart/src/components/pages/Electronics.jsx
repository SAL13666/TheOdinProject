import { useContext } from "react";
import ItemCard from "../ItemCard";
import { ProductsContext } from "../../App";

function Electronics() {
    const allProducts = useContext(ProductsContext)
    return (
        <>
            {allProducts.map((product) => {
                return product.category == "electronics" ? <ItemCard product={product} key={product.key}/>: null;
            }) }
        </>
    );
}

export default Electronics;