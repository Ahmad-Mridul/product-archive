import React from "react";

const Button = ({onClickHandler, title, value}) => {
    return <button className="btns" onClick={onClickHandler} value={value}>{title}</button>;
};

export default Button;
