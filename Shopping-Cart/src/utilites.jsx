import { Link } from "react-router-dom";

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
        total += cart[i].price;
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


export function addItemToCart(product, cartValue, quantity, setCartValue) {
    let doesExist = false;
    let index = 0;
    for(let i = 0; i < cartValue.length; i++) {
        console.log("product", product.id);
        console.log("cart", cartValue[i].id);
        if(cartValue[i].id == product.id) {
            console.log("hello");
            doesExist = true;
            index = i;
            break;
        }
    }
    console.log(doesExist);
    if(doesExist) {
        setCartValue((prev) => {
            let newValue = [...prev];
            newValue[index].quantity += parseInt(quantity.current.value);
            return newValue;
        })
    }
    else {
        setCartValue((prev) => {
            return [...prev, {
                id: product.id,
                quantity: parseInt(quantity.current.value),
                price: Math.ceil(product.price * quantity.current.value),
            }]
        })
        return;
    }
}