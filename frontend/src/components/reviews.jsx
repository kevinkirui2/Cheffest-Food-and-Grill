import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
    const responsive = {
        
        superLargeDesktop: {
      
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 5000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        
        <div>
          
            <br></br><br></br><br></br>
           <div style={{}} className="main">
            <div style={{display: "flex", justifyContent: "center"}} className="sec">
                <img width={100} src={require("../images/quote.png")}></img>
            </div>
            <div style={{display: "flex", justifyContent: "center"}} className="happy">
                <h2 className="text-3xl"><b>HAPPY CUSTOMERS</b></h2>
            </div>
            <br></br>

            <Carousel responsive={responsive}>
                <div className="num1">
                    <div style={{display: "flex", justifyContent: "center"}} className="name">
                        <p><i>Kevin Kirui</i></p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}} className="content">
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto repellendus rerum sequi quo nemo molestias ratione voluptates id cum, nobis nesciunt nisi aperiam veniam, laborum reprehenderit excepturi! Illo, perspiciatis?</i></p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}} className="star">
                        ⭐⭐⭐⭐
                    </div>

                </div>
                



                <div className="num2">
                    <div style={{display: "flex", justifyContent: "center"}} className="name">
                        <p><i>Brian Korir</i></p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}} className="content">
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto repellendus rerum sequi quo nemo molestias ratione voluptates id cum, nobis nesciunt nisi aperiam veniam, laborum reprehenderit excepturi! Illo, perspiciatis?</i></p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}} className="star">
                        ⭐⭐⭐⭐
                    </div>

                </div>

                 <div className="num3">
                    <div style={{display: "flex", justifyContent: "center"}} className="name">
                        <p><i>Evans Kirui</i></p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}} className="content">
                        <p><i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum iusto repellendus rerum sequi quo nemo molestias ratione voluptates id cum, nobis nesciunt nisi aperiam veniam, laborum reprehenderit excepturi! Illo, perspiciatis?</i></p>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}} className="star">
                        ⭐⭐⭐⭐
                    </div>

                </div>
            </Carousel>
           </div>
           <br></br><br></br><br></br>
        </div>
    )
}
export default Reviews
