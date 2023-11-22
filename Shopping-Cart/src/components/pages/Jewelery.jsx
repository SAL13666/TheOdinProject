import { useContext } from "react";
import ItemCard from "../ItemCard";
import { ProductsContext } from "../../App";

function Jewelery() {
    const allProducts = useContext(ProductsContext)
    return (
        <>
            {allProducts.map((product) => {
                return product.category == "jewelery" ? <ItemCard product={product} key={product.id}/>: null;
            }) }
        </>
    );
}

export default Jewelery;