import React from 'react'

function HomePage() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          My Logo
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-blue-200 text-center">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-blue-200">About</a>
          </li>
          <li>
            <a href="/services" className="text-white hover:text-blue-200">Services</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-blue-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default HomePage