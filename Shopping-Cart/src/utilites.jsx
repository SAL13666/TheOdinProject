import { Link } from "react-router-dom";

export function getPath(params) {
    let path = [<Link to={"/"} key={0}>Home</Link>] 
    Object.keys(params).forEach(function(key, index) {
        path.push(<Link to={`/Shop/${params[key]}`} key={index + 1}> / {params[key]}</Link>)
    });
    return path;
}