import './brands.css'

const Brands = () => {
    return(
        <div>
            <br></br><br></br><br></br>
            <div style={{textAlign: "center", backgroundColor: '#ECFFDC', padding: "1px"  }} className="brands">
                <br></br>
                <h1 className='text-3xl'><b>OUR PARTNERS</b></h1>
                <marquee scrollamount="14" style={{padding: "50px"}}  direction="left">
                    <div className="flex">
                            <div className="">
                            <img width={150} src={require('../images/taidi.png')}></img>
                            </div>
                            <div>
                            <img width={280} style={{paddingTop: "60px"}} src={require('../images/sunshine-hotel.png')}></img>
                            </div>
                            <div>
                            <img width={250}  src={require('../images/ktda.png')}></img>
                            </div>
                </div>
                </marquee>

                <br></br><br></br><br></br><br></br>
            </div>
            
        </div>
    )
}
export default Brands;