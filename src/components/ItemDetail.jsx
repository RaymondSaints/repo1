import React from "react";



const ItemDetail =({item})=>{
return(
    <div className="container">
        <div className="row my-5">
            <div className="col">
                <div className="row">
                    <div className="col text-end">
                    <img src={item.thumbnail} alt={item.title} width={400}/>
                    </div>
                </div>  
            </div>
            <div className="col card">
                <h1>{item.title}</h1>
                <h3>${item.price}</h3>
            </div>
        </div>

    </div>
)
}


export default ItemDetail;