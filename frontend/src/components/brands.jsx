const Brands = () => {
    return(
        <div>
            <br></br><br></br><br></br>
            <div style={{textAlign: "center", backgroundColor: '#D3D3D3', padding: "1px"  }} className="brands">
                <h1>OUR PARTNERS</h1>
                <marquee scrollamount="14" direction="left">
                <img width={150} src={require('../images/taidi.png')}></img>
                <img style={{paddingLeft: "200px"}} src={require('../images/sunshine-hotel.png')}></img>
                <img style={{paddingLeft: "200px"}} src={require('../images/ktda.png')}></img>
                </marquee>
                <br></br><br></br><br></br><br></br>
            </div>
            
        </div>
    )
}
export default Brands;