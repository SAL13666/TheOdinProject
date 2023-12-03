import { Link } from "react-router-dom";
import ItemCard from "./components/ItemCard";

export function getPath(params) {
    let path = [<Link to={"/"} key={0}>Home</Link>] 
    Object.keys(params).forEach(function(key, index) {
        path.push(<Link to={`/Shop/${params[key]}`} key={index + 1}> / {params[key]}</Link>)
    });
    return path;
}

export function getTotal(cart) {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total += Math.ceil(cart[i].price * cart[i].quantity);
    }
    return total;
}

export function getQuantity(cart) {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total += Number.parseInt(cart[i].quantity);
    }
    return total;
}


export function addItemToCart(product, cartValue, quantity , setCartValue) {
    let doesExist = false;
    let index = 0;
    for(let i = 0; i < cartValue.length; i++) {
        if(cartValue[i].id == product.id) {
            doesExist = true;
            index = i;
            break;
        }
    }
    if(doesExist) {
        setCartValue((prev) => {
            let newValue = [...prev];
            newValue[index].quantity += parseInt(quantity);
            return newValue;
        })
    }
    else {
        setCartValue((prev) => {
            return [...prev, {
                id: product.id,
                quantity: parseInt(quantity),
                price: product.price,
            }]
        })
        return;
    }
}

export function deleteItemFromCart(id, cart ,setCart) {
    cart.map(item => {
        if(item.id == id) {
            const newCart = cart.filter(newitem => newitem.id !== id);
            setCart(newCart);
        }
    })
}

export function getCategorizedItems(allProducts, catagory) {
    let counter = 0;
    return allProducts.map((product) => {
        if(counter >= 3) {
            return;
        }
        if(product.category == catagory)
        {
            counter++;
            return <ItemCard product={product} key={product.id}/>;
        }
    })
}