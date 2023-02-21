import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer=({greeting})=>{
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + (categoryId ? categoryId : "Vehiculos") + "&limit=24")
        .then((respuesta)=> respuesta.json())
        .then((data)=>{
            setItems(data.results);
        })
    }, [categoryId]);


    return(
        <>
        <div className="alert alert-warning" role="alert">
            <p>{greeting}</p>
        </div>
        <div className="container">
            <div className="row">
                <ItemList items={items} />
            </div>

        </div>
        </>
    )
}








export default ItemListContainer;