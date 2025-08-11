import React from "react";
import AllCategories from "../../Pages/AllCategories/AllCategories";
import Country from "../../Pages/Country/Country";
import EmpowerSection from "../../Pages/EmpowerSection/EmpowerSection";
import TestimonialSection from "../../Pages/TestimonialSection/TestimonialSection";
import FeaturedProducts from "../../Pages/Shared/FeaturedProducts/FeaturedProducts";
import SalesPromotion from "../../Pages/Shared/Sales Promotion/SalesPromotion";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <AllCategories></AllCategories>
      </div>
      <div className="container mx-auto">
        <FeaturedProducts></FeaturedProducts>
      </div>
      <div className="container mx-auto">
        <SalesPromotion></SalesPromotion>
      </div>
      <div className="container mx-auto">
        <EmpowerSection></EmpowerSection>
      </div>
      <div className="container mx-auto mt-20">
        <TestimonialSection></TestimonialSection>
      </div>

      <div className="container mx-auto">
        <Country></Country>
      </div>
    </div>
  );
};

export default Home;
