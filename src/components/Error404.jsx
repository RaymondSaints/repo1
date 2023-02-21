import React from "react";
import error from "./images/404.jpg";


const Error404 =()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                 <h1>Error 404! la pagina requerida no existe</h1>
                 <img src={error} alt="" />
                 <h1>Esto puede ser debido a que la pagina aun esta en proceso, le agradecemos su Paciencia</h1>
                </div>
            </div>
        </div>
    )
}

export default Error404;