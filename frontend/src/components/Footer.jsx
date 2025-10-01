import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-800 text-white pt-8 pb-4">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">MoviePedia</h3>
                    <p className="text-gray-300">Your ultimate source for movie information.</p>
                </div>
                
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">Links</h3>
                    <ul>
                        <li className="mb-1"><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                        
                    </ul>
                </div>
                
                <div className="mb-4">
                    <h3 className="text-xl font-bold mb-2">Connect</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
                <p>&copy; {currentYear} MoviePedia. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
