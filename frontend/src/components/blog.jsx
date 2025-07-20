import Navbar from "./navbar"
import './blog.css'
import Footer from "./footer";
import logo from './images/pluckers.jpg';
import wozza from './images/photo.jpg';
import dex from './images/shot.jpg';

const blog = () =>{
    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Our Blog</title>
            </head>
            <body className="bg-gray-100">
                
                    <Navbar />
                
                
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Our Blog</h1>
    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img width={400} src={logo} className="card-image w-full h-48 object-cover" alt="Blog Image" />
                            <div className="p-6">
                                <h2 className="card-title text-2xl font-semibold mb-3">How Tea Pluckers have become a Great Importance For Cheffset</h2>
                                <p className="card-description text-gray-600 text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        </div>
    
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img width={400} src={wozza} className="card-image w-full h-48 object-cover" alt="Blog Image" />
                            <div className="p-6">
                                <h2 className="card-title text-2xl font-semibold mb-3">The Photographer who became an important part of Cheffset</h2>
                                <p className="card-description text-gray-600 text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        </div>
    
                        <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                            <img width={400} src={dex} className="card-image w-full h-48 object-cover" alt="Blog Image" />
                            <div className="p-6">
                                <h2 className="card-title text-2xl font-semibold mb-3">Our Manager's Idea On the Cheffset Startup</h2>
                                <p className="card-description text-gray-600 text-base leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                            </div>
                        </div>
                    </div>
                </div>
    
                <Footer />
            </body>
        </div>
    );
    
}
export default blog