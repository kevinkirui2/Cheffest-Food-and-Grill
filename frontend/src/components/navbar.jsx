import './navbar.css'
import logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
const Navbar = () =>{


        const [contentVisible, setContentVisible] = useState(true);
    
        const toggleContent = () => {
            setContentVisible(!contentVisible);
        };
    return(
        <div>
            <div className='nav-small'> 
                <FontAwesomeIcon onClick={toggleContent} style={{fontSize: "37px"}} icon={faBars} />
                
                {contentVisible && (
                <div className="content2">
                     <AnimatePresence>
          <motion.div
            key={"sidebar"}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="image"
          >
              <li>HOME</li><br></br><br></br>
                        <li>MENU</li><br></br><br></br>
                        <li>BLOG</li><br></br><br></br>
                        <li>CONTACT US</li>
          
          </motion.div>
        </AnimatePresence>
                    
                      
                        
                    
                </div>
                 )}
            </div>
           
            
          
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
;
export default Navbar;