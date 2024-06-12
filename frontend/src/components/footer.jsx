import './footer.css'



const  Footer = () => {
    return(
        
        <div style={{backgroundColor: 'black', color: 'white'}}>
          
            <br></br>
            <div className="small" style={{display: "block", gap: "300px", padding: "30px"}}>
                <div className="img">
                    <img width={200} src={require('../images/footer.png')}></img>
                </div>
                <div  className="working-hours">
                    <h2><i>Working Hours</i></h2>
                    <p><span>Mon-Fri </span>7:00am - 12am</p>
                    <p><span>Sat </span>7:00am - 12am</p>
                    <p><span>Sun </span>10:00am - 4pm</p>
                    
                </div>
                <div className="contacts">
                    <h2>Contacts</h2>
                    <p>0743928989</p>
                    <p>cheffest@gmail.com</p>


                </div>
                <br></br>
            </div>
           
            <div style={{textAlign: "center"}} className="in">
            <img width={200} src={require('../images/kk.jpg')}></img>
     </div>
        </div>
        
    )

}
export default Footer;