import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-footer-blue text-white">
      <div className="container mx-auto px-8 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl mb-4">Important Links</h3>
            <ul className="list-none">
              <li><a href="https://www.divegentechnologies.com/about-1-1" className="hover:underline">About Us</a></li>
              <li><a href="https://www.divegentechnologies.com/" className="hover:underline">Contact Us</a></li>
              <li><a href="https://www.divegentechnologies.com/blog" className="hover:underline">Blog</a></li>
              
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl mb-4">Services</h3>
            <ul className="list-none">
            <li><a href="" className="hover:underline">MVP Development</a></li>
              <li><a href="#" className="hover:underline">Software Development</a></li>
              <li><a href="#" className="hover:underline">Mobile App Development</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl mb-4">Office Address</h3>
            <address>
            Sahakarnagar No.1, Pune 411009, Maharashtra, India
            </address>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl mb-4">Contact</h3>
            <p>info@divegentechnologies.com</p>
            <div className="flex mt-4">
            <a href="https://x.com/Prathamesh0043" className="text-blue-500 hover:text-blue-700 mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/company/divegen-technologies/" className="text-blue-700 hover:text-blue-900 mx-2">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/divegen_technologies/" className="text-pink-500 hover:text-pink-700 mx-2">
              <FaInstagram size={24} />
            </a>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="text-center">
          <p>© 2021 Divegen Technologies Private Limited. All Rights Reserved. Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
