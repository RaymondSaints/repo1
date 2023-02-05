import React from "react";
import Lacteos from './images/lacteos.jpg'
import frutaverdura from './images/frutas y verduras.jpg'
import envasados from './images/envasados.jpg'
import Carousel from 'react-bootstrap/Carousel';


const Carrusel=()=>{
    return(
        <div className="m-5">
        <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{"height":"730px"}}
            src={Lacteos}
            alt="lacteos"
          />
          <Carousel.Caption>
            <h3>Productos lacteos</h3>
            <p>De la mejor calidad y aprovados.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={frutaverdura}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Frutas y verduras</h3>
            <p>Frescas y recien traidas de los campos y cultivos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-responsive"
            style={{"height":"730px"}}//(Modificar los tamaños responsive para mas tarde)
            src={envasados}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Envasados</h3>
            <p>
              Todo tipo de productos, envasados y enlatados.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}


export default Carrusel;