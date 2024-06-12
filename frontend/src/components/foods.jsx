
import './foods.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Foods = () => {

    return(
        <div> 
            <div style={{textAlign: "center"}} className="text">
                <h1>What We Offer</h1           >
            </div>
            {/* <marquee scrollamout="40"> */}

                <motion.div className="flex"
    
                  initial={{opacity: 0, scale: 0.3}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 2.6, ease: "easeOut"}}
                
                
                
                >
                    <div  className="breakfast-section">
                        <img width={270} src={require('../images/break.png')} alt="" />
                        <div className="main-text">
                            <h2>BREAKFAST</h2>
                        </div>
                        <div  className="text1">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio cum nemo fuga saepe,</p>
                        </div>
                        <div className="view">
                        <button ><b><Link to="/menu">Menu</Link></b></button>
                        </div>
                    </div>
                    <br></br>

                    <div  className="lunch-section">
                        <img width={270} src={require('../images/lun.png')} alt="" />
                        <div className="main-text">
                            <h2>LUNCH</h2>
                        </div>
                        <div  className="text1">
                           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p> 
                        </div>
                        <div className="view">
                        <button><b>Menu</b></button>
                        </div>
                    </div>
                    <br></br>



                   



                    <div className="dinner-section">
                        <img width={220} src={require('../images/dinne.png')} alt="" />
                        <div className="main-text">
                            <h2>DINNER</h2>
                        </div>
                        <div className="text1">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="view">
                        <button><b>Menu</b></button>
                        </div>
                    </div>

            </motion.div>
                    
            
            {/* </marquee> */}
        </div>
    )
}
export default Foods;