import Categories from "./Categories/Categories";
import "./sidebar.css"
import Price from './Price/Price';
import Colors from './Colors/Colors';

const SideBar = ({handleChange}) => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Categories handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>
            </section>
        </>
    );
};

export default SideBar;