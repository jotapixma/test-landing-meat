import React, { useEffect, useState } from 'react';
import Hero from '../Hero/Hero.jsx';
import Product from '../Product/Product.jsx';
import SideBar from '../SideBar/SideBar.jsx';
import FormContact from '../FormContact/FormContact.jsx';
import './Home.scss'

const Home = () => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState (null);


    async function fetchProducts() {
        const apiUrl = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles'
        
        const res = await fetch(apiUrl)
        res
            .json()
            .then(response =>{
                
                setProducts(response)
            })
            .catch(err => setError(err));
    }

    useEffect( () => {

        fetchProducts();
    },[]);
        
    
    return(

        <div className="home-container">

            <Hero/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <SideBar/>
                    </div>
                    <div className="col-12 col-md-9">
                        <h1 className="super-title">Nuestros artículos</h1>
                        <ul className="row">
                            {products.map(product => (
                                <li className="col-6 col-md-4" key={product.id}>
                                    <Product product={product}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <FormContact/>
            
        </div>
      
    )

}

export default Home;