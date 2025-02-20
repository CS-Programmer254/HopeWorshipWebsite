
export default function About() {
  return (
    <div className="bg-gray-white flex flex-col row-span-full h-72">
     <div className=" flex flex-col text-blue-600 font-sans font-bold text-2xl mx-auto">
      About Us
      <hr className="bg-gray-500 w-12 font-sans font-extrabold h-1"/>
     </div>
     <div className="row about-body flex flex-row w-full justify-between h-56">
      <div className="about-hero-left ml-12  bg-blue-600 w-1 rounded-lg"></div>
      <div className="about-main-hero row flex flex-row w-auto space-x-6">
        <div className="about-content">About</div>
        <div className="about-content">
          <li>We are located</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          </div>
        </div>
      <div className="about-hero-right mr-12 bg-blue-500 w-1  rounded-lg"></div>

     </div>
    </div>
  );
}

