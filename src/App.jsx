/* eslint-disable no-unused-vars */
import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import SideBar from "./Sidebar/SideBar";
import products from "./Data/data";
import Card from "./Components/Card";
function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState("");

    // ic radio filter
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    // ic buttons filter
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };
    // ic input filter

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    // ic filtered products according to title query
    const filteredItems = products.filter((product) =>
        product.title.toLowerCase().indexOf(query.toLowerCase() !== -1)
    );

    // ic query function
    const filteredData = (products, selected, query) => {
        let filteredProducts = products;

        // ic input query
        if (query) {
            filteredProducts = filteredItems;
        }

        // ic selected query
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ title, category, company, color, newPrice }) =>
                    title === selected ||
                    category === selected ||
                    company === selected ||
                    color === selected ||
                    newPrice === selected
            );
        }
        return filteredProducts.map(({img,title,star,reviews,prevPrice},idx)=>(
            <Card
            key={idx}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            />
        ))
    };
    const result = filteredData(products,selectedCategory,query);
    return (
        <>
            <SideBar 
            handleChange={handleChange}
            
            />
            <Nav />
            <Recommended />
            <Products />
        </>
    );
}

export default App;
