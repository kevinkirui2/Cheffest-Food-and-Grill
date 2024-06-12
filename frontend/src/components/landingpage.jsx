import './landing.css'
import { motion, AnimatePresence } from 'framer-motion'
const LandingPage = () => {

    return(
        <div>
            <div className='division'>
                <div className="text">
                    <h1>Are You <span style={{color: "red"}}> Hungry!</span></h1>
                    <p>Visit <span style={{color: "orange"}}>CHEFFEST</span> Restaturant In Kericho</p>
                    <button style={{backgroundColor: "brown", color: "white", borderRadius: "3px"}}>View Location</button>
                </div>
                <AnimatePresence>
                <motion.div 
                key={"picture"}
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.5, ease: "easeIn"}}
                
                
                className="image">
                    
                    <img width={520} src={require('../images/jj.jpg')}></img>
                </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
export default LandingPage