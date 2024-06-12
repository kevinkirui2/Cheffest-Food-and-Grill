import './navbar.css'
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <div>
          
            <nav>
            <div style={{textAlign: "left"}}>
                <img src={logo} width={160}></img>
            </div>
                <ul>
                    <li><Link style={{textDecoration: "none", color:"orangered"}} to="/">HOME</Link></li>
                    <li><Link style={{textDecoration: "none", color:"orangered"}} to="/menu">MENU</Link></li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>

                </ul>
                
                <div className="cart">
                <button><Link style={{textDecoration: "none", color:"white"}} to="/cart"> CART </Link></button>
                </div>
              
            </nav>
        </div>
    )
}
export default Navbar;