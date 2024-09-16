import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import Hero from "../Hero/Hero"
import Testimonial from "../Testimonial/Testimonial";
import CardList from "../CarList/CarList";
import Footer from "../Footer/Footer"
const Home = ({ theme }) => {
  return (
    <div>
      <Hero theme={theme} />
      <About />
      <Services />
      <CardList />
      <Testimonial />
      {/* <AppStoreBanner /> Uncomment if needed */}
      <Footer />
    </div>
  );
};

export default Home;
