import React from 'react';

function LandingPage() {
  return (
    <div>
      {/* Header Section */}
      <header className="flex justify-between items-center py-6 bg-cyan-100 px-8">
        <div className="text-3xl font-bold text-black">
          YourCompany
        </div>
        <nav>
          <ul className="flex space-x-8 text-black text-lg">
            <li className="hover:text-cyan-700 transition duration-300">Home</li>
            <li className="hover:text-cyan-700 transition duration-300">About</li>
            <li className="hover:text-cyan-700 transition duration-300">Services</li>
            <li className="hover:text-cyan-700 transition duration-300">Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-cyan-100 to-white text-center">
        <h1 className="text-5xl font-extrabold text-black mb-4">
          Welcome to YourCompany
        </h1>
        <p className="text-xl text-black mb-8">
          Building Solutions for a Brighter Tomorrow
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition duration-300 animate-pulse">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cyan-100">
        <div className="text-center text-3xl font-bold mb-10 text-black">Our Services</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-black">Web Development</h2>
            <p className="text-black">We create stunning websites using modern technologies.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-black">Mobile Solutions</h2>
            <p className="text-black">Cutting-edge mobile apps for your business needs.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-black">Cloud Integration</h2>
            <p className="text-black">Transform your infrastructure with our cloud services.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-cyan-100">
        <div className="text-center text-3xl font-bold mb-10">What Our Clients Say</div>
        <div className="flex overflow-x-auto space-x-8 snap-x snap-mandatory px-8">
          <div className="min-w-full snap-center p-6 shadow-lg rounded-lg bg-white text-black">
            <p>"YourCompany transformed our online presence. We couldn't be happier!"</p>
            <h3 className="mt-4 font-semibold">- Client Name</h3>
          </div>
          <div className="min-w-full snap-center p-6 shadow-lg rounded-lg bg-white text-black">
            <p>"The mobile app they built exceeded our expectations!"</p>
            <h3 className="mt-4 font-semibold">- Another Client</h3>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-8 text-white text-center">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-cyan-700 transition duration-300">Facebook</a>
            <a href="#" className="hover:text-cyan-700 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-cyan-700 transition duration-300">LinkedIn</a>
          </div>
        </div>
        <p>&copy; 2024 YourCompany. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
