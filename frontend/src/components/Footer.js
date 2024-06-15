import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=' border-t-2 border-custom-blue bg-custom-blue'>
      <div className='container mx-auto p-4 flex flex-col items-center'>
        <div className="flex justify-center mb-4">
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
        <p className='text-center font-bold text-white' title="Youtube Channel">Divegen</p>
      </div>
    </footer>
  )
}

export default Footer
