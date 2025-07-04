import React from "react";
import AllCategories from "../../Pages/AllCategories/AllCategories";
import Country from "../../Pages/Country/Country";
import EmpowerSection from "../../Pages/EmpowerSection/EmpowerSection";
import TestimonialSection from "../../Pages/TestimonialSection/TestimonialSection";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <AllCategories></AllCategories>
      </div>
      <div className="container mx-auto">
        <TestimonialSection></TestimonialSection>
      </div>
      <div className="container mx-auto">
        <EmpowerSection></EmpowerSection>
      </div>
      <div className="container mx-auto">
        <Country></Country>
      </div>
    </div>
  );
};

export default Home;
