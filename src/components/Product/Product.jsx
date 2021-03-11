import React from 'react';
import './Product.scss'


const Product = (props) => {

    const { product } = props

    return(
       <article className="card-product">
          <div className="card-img" style={{ backgroundImage: `url(${product.image})` }}></div>
          <div className="card-body">
            <h6 className="card-title">{product.title}</h6>
            <p className="card-description">{product.content}</p>
            <a href="#" className="see-more">Ver más</a>
          </div>
         
       </article>
      
    )

}

export default Product;