const Hero = () => {
    return (
      <section className="text-center py-20 bg-gray-50 select-none">
        <h1 className="text-4xl font-bold text-gray-900 animate-bounce">Ephesians<span className="text-blue-600"> 4:11-15</span></h1>
        <h2 className="text-3xl font-bold text-blue-600 my-5 animate-bounce">Vision</h2>
        <p className="text-gray-600 mt-6  animate-bounce ">Perfecting of the saints, for the work of the ministry</p>
        <div className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 ">Ministries</button>
          <button className="bg-gray-200 text-gray-900 py-2 px-4 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300">Testimonies</button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  