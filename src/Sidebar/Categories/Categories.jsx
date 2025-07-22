import React from "react";
import "./category.css";
import Input from "../../Components/Input";
const Categories = ({ handleChange }) => {
    return (
        <div>
            <h2 className="sidebar-title">Categories</h2>
            <div className="">
                <label  className="sidebar-label-container">
                    <input
                        type="radio"
                        onChange={handleChange}
                        value=""
                        name="test"
                    />
                    <span className="checkmark"></span>All
                </label>
                <Input
                    handleChange={handleChange}
                    value="sneakers"
                    title="Sneakers"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="flats"
                    title="Flats"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="sandles"
                    title="Sandles"
                    name="test"
                />
                <Input
                    handleChange={handleChange}
                    value="heels"
                    title="Heels"
                    name="test"
                />
            </div>
        </div>
    );
};

export default Categories;
