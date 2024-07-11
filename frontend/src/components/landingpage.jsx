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
        <div className="text">
          <h1>
            Are You <span style={{ color: "red" }}> Hungry!</span>
          </h1>
          <p>
            Visit <span style={{ color: "orange" }}>CHEFFEST</span> Restaturant
            In Kericho
          </p>
          <button
            style={{
              backgroundColor: "brown",
              color: "white",
              borderRadius: "3px",
            }}
          >
            View Location
          </button>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
