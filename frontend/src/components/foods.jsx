
import './foods.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Foods = () => {

    return(
        <div className='wallpaper'> 
            <div style={{textAlign: "center"}} className="text">
                <h1 className='text-4xl'><b>What We Offer</b></h1           >
            </div>
            <br></br>
            {/* <marquee scrollamout="40"> */}

                <motion.div className="flex"
    
                  initial={{opacity: 0, scale: 0.3}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 2.6, ease: "easeOut"}}
                
                
                
                >
                    <div  className="breakfast-section">
                        <img width={270} src={require('../images/break.png')} alt="" />
                        <div className="main-text">
                            <h2 className='text-2xl'><b>BREAKFAST</b></h2>
                        </div>
                        <div  className="text1">
                            <p>Variety of breakfast options, including continental, American, and buffet-style breakfasts, featuring fresh pastries, eggs, fruits, cereals, and beverages to start your day perfectly,</p>
                        </div>
                        <br />
                        <div className="view">
                        <button ><b><Link to="/menu">Menu</Link></b></button>
                        </div>
                    </div>
                    

                    <div  className="lunch-section">
                        <img width={270} src={require('../images/lun.png')} alt="" />
                        <div className="main-text">
                        <h2 className='text-2xl'><b>LUNCH</b></h2>
                        </div>
                        <div  className="text1">
                           <p>Diverse lunch menu, including international cuisines, local dishes, salads, sandwiches, and hearty mains, all prepared with fresh ingredients to suit your taste and dietary preferences.</p> 
                        </div>
                        <br />
                        <div className="view">
                        <button><b>Menu</b></button>
                        </div>
                    </div>
                   



                   



                    <div className="dinner-section">
                        <div className="text-cente">
                         <img width={220} src={require('../images/dinne.png')} alt="" />
                        </div>
                        <div className="main-text">
                        <h2 className='text-2xl'><b>DINNER</b></h2>
                        </div>
                        <div className="text1">
                            <p>Exquisite dinner selection, featuring gourmet dishes, seasonal specials, and international cuisines. Enjoy everything from grilled meats to vegetarian options, complemented by fine wines and delightful desserts.</p>
                        </div>
                        <br />
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