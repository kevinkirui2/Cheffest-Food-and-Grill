import Navbar from "../navbar";
import "./lunch.css"; // Importing CSS for external styling
import logo2 from './images/footer.png';
import Footer from "../footer";  
import Cart from "./cart";
const breakfast = [
    {
        name: "Samosa",
        imageUrl: require('./images/samosa.jpg'),
        price: 80,
        description: "A root vegetable, usually orange in color, that is crunchy and sweet."
    },
    {
      name: "Coffee",
      imageUrl: require('./images/coffee.jpg'),
      price: 100,
      description: "A root vegetable, usually orange in color, that is crunchy and sweet."
  },
  {
    name: "Pancake",
    imageUrl: require('./images/pancake.jpg'),
    price: 100,
    description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},
{
  name: "Waffles",
  imageUrl: require('./images/waffle.jpg'),
  price: 100,
  description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},
{
  name: "Fried Egg",
  imageUrl: require('./images/egg.jpg'),
  price: 100,
  description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},
{
  name: "Bacon",
  imageUrl: require('./images/bacon.jpg'),
  price: 200,
  description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},
{
  name: "Orange Juice",
  imageUrl: require('./images/orange.jpg'),
  price: 100,
  description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},
{
  name: "Tea",
  imageUrl: require('./images/tea.jpg'),
  price: 100,
  description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},
{
  name: "Omleetee",
  imageUrl: require('./images/omellete.jpg'),
  price: 100,
  description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},

];

const dinner = [
    {
        imageUrl: require('./images/fries.jpg'),
        name: "Fries",
        price: 600
    },
    {
        imageUrl: require('./images/chapati.jpg'),
        name: "Chapati",
        price: 200
    },
    {
        imageUrl: require("./images/pizza.jpg"),
        name: "PIZZA",
        price: 500,
        description: "A leafy green flowering plant, rich in iron and vitamins."
    },
    {
      imageUrl: require("./images/rice.jpg"),
      name: "Rice/Beef Stew",
      price: 800,
      description: "A leafy green flowering plant, rich in iron and vitamins."
  },
  {
    imageUrl: require("./images/pilau.jpg"),
    name: "Pilau",
    price: 500,
    description: "A leafy green flowering plant, rich in iron and vitamins."
}, {
  imageUrl: require("./images/fish.jpg"),
  name: "Fish Mullet",
  price: 1000,
  description: "A leafy green flowering plant, rich in iron and vitamins."
},
{
  imageUrl: require("./images/burger.jpg"),
  name: "Chicken Burger",
  price: 1200,
  description: "A leafy green flowering plant, rich in iron and vitamins."
},
{
  imageUrl: require("./images/wings.jpg"),
  name: "Chicken Wings",
  price: 700,
  description: "A leafy green flowering plant, rich in iron and vitamins."
},
{
  name: "Ugali",
  imageUrl: require('./images/ugali.jpg'),
  price: 90,
  description: "A root vegetable, usually orange in color, that is crunchy and sweet."
},
];

const Lunch = () => {

  const addCart =(food)=>{
    <Cart item={food} ></Cart>

  }
    return (
        <div>
            <Navbar />


            <div>
                <header style={{ textAlign: "center" }}>
                  <div className="text2">
                    <h1>MENU</h1>
                    <h5>Home -> Menu</h5>
                    </div>
                </header>

                


            </div>









           
       
            <div className="dinner-container">
              <div className="section1">
                <img width={200} src={require('./images/vege.png')}></img>
                <h1 style={{paddingLeft: "50px"}}><span style={{color: "green"}}> LUNCH/DINNER</span><br></br> <span style={{color: "red"}}>MENU</span></h1>
                <img width={250} src={require('./images/burger1.png')}></img>
              </div>
                {dinner.map((item, index) => (
                    <div className="dinner-item" key={index}>
                      
                        <img width={230} src={item.imageUrl} alt={item.name} />
                        <h2>{item.name}</h2>
                        <h4>{item.price}/=</h4>
                     
                        <button>ADD TO CART</button>
                       
                    </div>
                ))}
            </div>
            <br></br>
                <hr></hr>
                <br></br>
                {/* breakfast section */}

            <div className="dinner-container">
              <div style={{backgroundColor: "red"}} className="section1">
                <img width={200} src={require('./images/vege.png')}></img>
                <h1 style={{paddingLeft: "50px"}}><span style={{color: "white"}}>BREAKFAST</span><br></br> <span style={{color: "red"}}>MENU</span></h1>
                <img width={250} src={require('./images/break.png')}></img>
              </div>
                {breakfast.map((item, index) => (
                    <div className="dinner-item" key={index}>
                      
                        <img width={230} src={item.imageUrl} alt={item.name} />
                        <h2>{item.name}</h2>
                        <h4>{item.price}/=</h4>
                     
                        <button onClick={() => addCart(item)}>ADD TO CART</button>
                       
                    </div>
                ))}
            </div>
                <br></br><br></br>
              <Footer/>

        </div>
        
    );
};

export default Lunch;
