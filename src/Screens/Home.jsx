import React from "react"
import {Link} from "react-router-dom"
import ProductCard from "../Components/ProductCard";
function Home(){
    return <div className="home">
        <h1>Home</h1>
        <div>
            <ProductCard title="Product 1"/>
            <ProductCard title="Product 2"/>
            <ProductCard title="Product 3"/>
            <ProductCard title="Product 4"/>
            <ProductCard title="Product 5"/>
            <ProductCard title="Product 6"/>
        </div>
        <Link to="/about">About</Link>
    </div>
}

export default Home;