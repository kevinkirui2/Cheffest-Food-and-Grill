import "./landing.css";
import { motion, AnimatePresence } from "framer-motion";
const LandingPage = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-Tc5j/xLu4ZnbQ+6U3aw4W/TDBro5aCOI/JoW8hr5p3gO1LglW/5ZL1DzWzRJH3VrQ3kPsYH0ifFfTxMl4AsEgA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <div className="division">
        <AnimatePresence>
          <motion.div
            key={"picture"}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="image"
          >
            <img width={520} src={require("../images/jj.jpg")}></img>
          </motion.div>
        </AnimatePresence>
        <motion.div
            key={"picture"}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="image"
          >
        <div className="text">
          <h1 className="text-5xl">
           <b  id="wozza" >Are You <span id="wozza" style={{ color: "red" }}> Hungry!</span></b> 
          </h1>
          
          <p id="sub-heading" class="text-xl mt-3">
            Visit <span id="sub-heading" style={{ color: "orange" }}>CHEFFEST</span> Restaturant
            In Kericho
          </p>
          <br></br>
          <button
          id="sub-heading"
            style={{
              width: "300px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "3px",
            }}
          >
            View Location
          </button>
        </div>

        </motion.div>
      </div>
    </div>
  );
};
export default LandingPage;
