import NavBarElement from "./navBar";
import TitleElement from "./title";

const NavContainerElement = () => {
    return (
        <div className="nav-container">
            <TitleElement text={""} />
            <NavBarElement />
        </div>
    );

};
export default NavContainerElement;

