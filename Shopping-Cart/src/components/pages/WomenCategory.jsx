import { useContext } from "react";
import ItemCard from "../ItemCard";
import { ProductsContext } from "../../App";

function WomenCategory() {
    const allProducts = useContext(ProductsContext)
    return (
        <>
            {allProducts.map((product) => {
                return product.category == "women's clothing" ? <ItemCard product={product} key={product.id}/>: null;
            }) }
        </>
    );
}

export default WomenCategory;