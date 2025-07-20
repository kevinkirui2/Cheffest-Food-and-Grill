import Navbar from "./navbar"
import './contact.css'
import Footer from "./footer";
import { motion } from 'framer-motion';
const contact = () => {

    return (
        <div>
            <div className="nnav">
                <Navbar />
            </div>
            
            <div className="whole bg-purple-900 min-h-screen flex flex-col items-center justify-center py-16">
                <div className="container mx-auto px-4">
                    <div className="divide grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="contact text-white">
                            <h1 className="text-5xl font-bold mb-6">CONTACT US</h1>
                            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptatum distinctio praesentium delectus earum repellendus sunt molestias.</p>
                        </div>
    
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.6, ease: "easeIn" }}
                        >
                            <div className="form bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
                                <h3 className="text-3xl font-semibold mb-8 text-gray-800">We'd Love To Hear From You!<br />Let's Get In Touch</h3>
                                <form>
                                    <div className="name grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="fname">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
                                            <input type="text" id="first-name" placeholder="First Name" className="input-field" />
                                        </div>
                                        <div className="lname">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
                                            <input type="text" id="last-name" placeholder="Last Name" className="input-field" />
                                        </div>
                                    </div>
    
                                    <div className="credentials grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                        <div className="email">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" id="email" placeholder="Email" className="input-field" />
                                        </div>
                                        <div className="phone">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                            <input type="text" id="phone" placeholder="Phone Number" className="input-field" />
                                        </div>
                                    </div>
    
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea id="message" placeholder="Your Message" rows="5" className="input-field w-full"></textarea>
                                    </div>
    
                                    <button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">Send</button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    
}
export default contact