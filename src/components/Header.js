import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <div id="header">
            <div>
                Logo
            </div>
            <div className="items">
                <NavBar/>
                <SearchBar/>
            </div>
        </div>
    );
}

export default Header;