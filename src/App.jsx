import { FaStar, FaUserGraduate, FaChalkboardTeacher, FaLightbulb } from "react-icons/fa";
import NavBar from "./NavBar/NavBar";
import Card from "./Card/Card";
import CarouselControls from "./Carousel/CarsouelControls";
import CourseTab from "./CourseTab";
import AISlider from "./CourseSlider/AISlider";
import PythonSlider from "./CourseSlider/PythonSlider";
import Footer from "./Footer/Footer";
import SaleBar from "./SaleBar/SaleBar";
import { useState } from "react";


function App() {
  

  const tabTitles = [
        "Artificial Intelligence (AI)",
        "Python",
        "Microsoft Excel",
        "AI Agents & Agentic AI",
        "Digital Marketing",
        "Amazon AWS"
    ];
    const [active , setActive] = useState(0);


    return(
        <>
            <SaleBar/>
            <NavBar/>
            <div className="body-container">
                <div className="image-container">
                    <img    src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/5ab81bd5-af55-4235-9f1e-07cdc7ce0b93.jpg" 
                            alt="" 
                            width="1340" 
                            height="400" 
                            loading="eager"
                            className=""/>    

                    <div className="overlay">
                        <h1 className="bold-text">Learn more, spend less — Black Friday Sale from E£279.99</h1>
                        <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
                    </div>

                </div>
                <div className="learn-container">
                    <div className="learn-text">
                        <h1>Learn essential career and life skills</h1>
                        <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
                    </div>
                    <Card   image="https://cms-images.udemycdn.com/96883mtakkm8/9Gj6y7OdRKhBmHkgJ9lWV/4589dcd6feb8009798924f70f515b731/generative-ai.png"
                            count="1.7M+"
                            title="Generative AI" 
                            />
                    <Card   image="https://cms-images.udemycdn.com/96883mtakkm8/5Pyb4XbnD2CBt6TgiSBB8v/26f6893300dadc86519907b854b430de/certifications.png"
                            count="14M+"
                            title="IT Certfications"/>
                    <Card   image="https://cms-images.udemycdn.com/96883mtakkm8/6QeCzvTvnqKN6tI18U0Wmg/cebc19b24d374ec1cab549a9c7a93020/data-science.png"
                            count="8.1M+"
                            title="Data Science"/>
                    <CarouselControls/> 
                </div>

                <div className="career-container">
                    <div className="career-text">
                        <h1>Reimagine your career in the AI era</h1>
                        <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
                        <div className="icons">
                            <div className="item">
                                <div className="icon" style={{ background: "#e5d8ff" }}>
                                    <FaStar />
                                    </div>
                                    <p><strong>Learn</strong> AI and more</p>
                                </div>

                            <div className="item">
                                <div className="icon" style={{ background: "#d6f5e1" }}>
                                    <FaUserGraduate />
                                    </div>
                                    <p><strong>Prep</strong> for a certification</p>
                                </div>

                            <div className="item">
                                <div className="icon" style={{ background: "#ffeecb" }}>
                                    <FaChalkboardTeacher />
                                </div>
                                    <p><strong>Practice</strong> with AI coaching</p>
                            </div>

                            <div className="item">
                                    <div className="icon" style={{ background: "#d9efff" }}>
                                        <FaLightbulb />
                                    </div>
                                    <p><strong>Advance</strong> your career</p>
                            </div>
                        </div>
                        <button className="btn-career">Learn More</button>
                        <p>Starting at E£204.00/month</p>
                    </div>
                    <img src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp" alt="" />
                </div>

                <div className="skill-text">
                    <h1>Skills to transform your career and life</h1>
                    <p>From critical skills to technical topics, Udemy supports your professional development.</p>
                </div>
                

                <div className="courses-tabs">
                    {tabTitles.map((title, index) => (
                        <CourseTab
                        key={index}
                        title={title}
                        isActive={active === index}
                        onShow={() => setActive(index)}
                        />
                    ))}

                </div>

                <div className="courses-container">
                    {active === 0 && (
                        <AISlider/>
                        
                    )}
                    {active === 1 && (
                        <PythonSlider/>
                    )}
                    {active === 2 && (
                        <AISlider/>
                    )}
                    {active === 3 && (
                        <PythonSlider/>
                    )}
                    {active === 4 && (
                        <AISlider/>
                    )}
                    {active === 5 && (
                        <PythonSlider/>
                    )}
                </div>

                <a className="show-all-btn" >
                    Show All {tabTitles[active]} Courses
                    <span className="arrow">→</span>
                </a>


            </div>
            <Footer/>
            
        </>
    );
}

export default App
