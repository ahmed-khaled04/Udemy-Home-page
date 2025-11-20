import { useRef } from "react";
import Course from "../Course/Course";
import "./Slider.css"

function PythonSlider(){
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };
  return (
    <div className="slider-wrapper">
      <button className="slide-btn left" onClick={scrollLeft}>
        ❮
      </button>

      <div className="scroll-mask">

        <div className="course-scroll" ref={sliderRef}>
            <Course 
                    image="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"
                    title="100 Days of Code™: The Complete Python Pro Bootcamp"
                    instructor="Dr. Angela Yu"
                    badgeText="Bestseller"
                    badgeColor="#2d8659"
                    rating="4.7"
                    ratingCount="400,364"
                    price="519.99"
                    oldPrice="689.99"/>
            <Course 
                    image="https://img-c.udemycdn.com/course/240x135/6791359_66d8_2.jpg"
                    title="Intro to AI Agents and Agentic AI"
                    instructor="365 Careers"
                    badgeText="Bestseller"
                    badgeColor="#2d8659"
                    rating="4.4"
                    ratingCount="1,727 ratings"
                    price="£309.99"
                    oldPrice="£349.99"
                    />
            <Course 
                    image="https://img-c.udemycdn.com/course/240x135/1990136_15e0_10.jpg"
                    title="Artificial Intelligence for Business + ChatGPT Prize [2025]"
                    instructor="Hadelin de Ponteves, Kirill Eremenko"
                    badgeText="Premium"
                    badgeColor="#6d28d9"
                    rating="4.4"
                    ratingCount="4,856 ratings"
                    price="£579.99"
                    oldPrice="£719.99"
                    />
            
            <Course 
                    image="https://img-c.udemycdn.com/course/240x135/6342521_3968_2.jpg"
                    title="AI Engineer Explorer Certificate Course"
                    instructor="School of AI"
                    badgeText="Premium"
                    badgeColor="#6d28d9"
                    rating="4.5"
                    ratingCount="187 ratings"
                    price="£309.99"
                    oldPrice="£349.99"
                    />
            <Course 
                    image="https://img-c.udemycdn.com/course/240x135/6342521_3968_2.jpg"
                    title="AI Engineer Explorer Certificate Course"
                    instructor="School of AI"
                    badgeText="Premium"
                    badgeColor="#6d28d9"
                    rating="4.5"
                    ratingCount="187 ratings"
                    price="£309.99"
                    oldPrice="£349.99"
                    />
            
        </div>
      </div>

      <button className="slide-btn right" onClick={scrollRight}>
        ❯
      </button>
      

    </div>
  );
};

export default PythonSlider;
