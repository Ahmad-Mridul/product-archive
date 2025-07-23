import React from "react";
import "./recommended.css";
import Button from '../Components/Button';
const Recommended = ({handleClick}) => {
    return (
        <>
            <div className="">
                <h2 className="recommended-flex">Recommended</h2>
                <div className="recommended-flex">
                    <Button onClickHandler={handleClick} title="All Products"/>
                    <Button onClickHandler={handleClick} title="Nike" value="Nike"/>
                    <Button onClickHandler={handleClick} title="Adidas" value="Adidas"/>
                    <Button onClickHandler={handleClick} title="Puma" value="Puma"/>
                    <Button onClickHandler={handleClick} title="Vans" value="Vans"/>
                </div>
            </div>
        </>
    );
};

export default Recommended;
