import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            <Link to="/"><h2>Pictures</h2></Link>
            <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link> 
        </header>
    )
}

export default Header