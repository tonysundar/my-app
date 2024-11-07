import React,{useState,useEffect} from "react";

function Showing(){

    const[product,setProduct] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProduct(json))
    })

    return(
        <div>
            <h1>this is about useEffect...</h1>
            {
                product.map(item=><div key={item.id}>
                    <h3>title : {item.title}</h3>
                    <h3>Rating : {item.rating.rate}</h3>
                    <img src={item.image} width={250} height={250}/>
                </div>)
            }
        </div>
    )
}

export default Showing;