import { Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Feature from "../components/Feature/Feature";
import Events from "../components/EventsSection/Events";
import Cards from "../components/Cards/Cards"
import ServiceSection from "../components/ServiceSection/ServiceSection";



export default function Layout(){
  return (
    <>
    <div className="h-24">
    <Header/>
    </div>
     
      <Outlet />
      <Feature/>
      <ServiceSection/>
      <Events/>
      <Cards/>
      <Footer/>
    </>
  );
}


