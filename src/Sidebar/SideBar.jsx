import Categories from "./Categories/Categories";
import "./sidebar.css"
import Price from './Price/Price';
import Colors from './Colors/Colors';

const SideBar = () => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Categories/>
                <Price/>
                <Colors/>
            </section>
        </>
    );
};

export default SideBar;