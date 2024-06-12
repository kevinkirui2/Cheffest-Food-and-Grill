import Navbar from "../navbar"

const Cart = (item) => {
    return(
        <div>
        <Navbar/>
        <p>{item.name}</p>
        </div>
    )
}
export default Cart