import { AiFillStar } from "react-icons/ai";
import "./products.css";
import { BsFillBagHeartFill } from "react-icons/bs";
import Card from "../Components/Card";

const Products = ({result}) => {
    return (
        <>
            <section className="card-container">
                {result}
            </section>
            
        </>
    );
};

export default Products;
