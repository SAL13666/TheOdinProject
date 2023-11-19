import { useContext } from "react";
import ItemCard from "../ItemCard";
import { ProductsContext } from "../../App";

function MenCategory() {
    const allProducts = useContext(ProductsContext)
    return (
        <>
            {allProducts.map((product) => {
                return product.category == "men's clothing" ? <ItemCard product={product} key={product.key}/>: null;
            }) }
        </>
    );
}

export default MenCategory;