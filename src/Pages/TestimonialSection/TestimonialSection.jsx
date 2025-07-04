import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    image:
      "https://img.freepik.com/free-photo/smiling-businesswoman-posing-with-arms-crossed-office_23-2148217998.jpg",
    name: "Eva Jane",
    title: "Founder of Eva Jane Beauty",
    quote:
      "As an entrepreneur who is deeply involved in the Beauty industry, I have been very devoted to creating my original products. B2B.Wholesale.com has been my trusted partner in this process.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/handsome-businessman-standing-modern-office_329181-2092.jpg",
    name: "John Smith",
    title: "CEO of TechWorld",
    quote:
      "B2B.Wholesale.com has made it easy for us to source globally and expand our business with reliable suppliers and seamless service.",
  },
  {
    image:
      "https://img.freepik.com/free-photo/cheerful-business-woman-standing-office-holding-laptop_1262-20870.jpg",
    name: "Sara Lee",
    title: "Founder of SaraStyle",
    quote:
      "A trusted platform for small business owners like me. Their tools and supplier network helped me scale quickly.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <motion.div
      className="bg-[#f9f4f2] py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {/* Animated Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[#4e2600] mb-4">
          Get tailored discounts, services, and tools for your business stage.
        </h2>
        <p className="text-gray-600">
          Grow with curated benefits offered by the free B2B.Wholesale.com Membership.
        </p>
        <a
          href="#"
          className="text-sm font-medium text-black underline inline-block mt-3"
        >
          Learn more
        </a>
      </motion.div>

      {/* Testimonial Slider */}
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="p-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-lg">
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#222]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1 text-gray-800 text-lg font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  “{item.quote}”
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;
