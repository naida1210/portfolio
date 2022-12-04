import React from "react";
import pic from "./images/mainImg.svg";
import simple from "./images/simplePlanner.png";

import fitness from "./images/fitness.png";

import { SiMysql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import loopstudios from "./images/loopstudios.png";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";


const Hero = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        
      } else {
        reveals[i].classList.remove("active")
       
      }
    }


    
  }




  window.addEventListener("scroll", reveal);
  return (
    <div className="herowrapper">
      <h1>{"< "}Frontend Developer {"/> "}</h1>
      <p> Web development and coding are my passion </p>
      <img className="heroImg" src={pic} alt="girl in hijab" />
      <p>Scroll Down &#8595;</p>

      <section>
        <div class="container reveal">
          <h2>
            
            My name is <span>Naida&nbsp;Islam!</span>{" "}
          </h2>
          <p class="container reveal about">
            Self-taught, dedicated and highly motivated Front-end Developer with
            1 year of software development experience,who has worked extensively
            on the front-end aspect of web applications using
            React,Node,JavaScript, MySQL
          </p>
        </div>
        <ul className="stack hero reveal sideways">
          <li >
            <SiMysql />{" "}
          </li>
          <li >
            <SiReact />
          </li>
          <li>
            <FaNodeJs />
          </li>
          <li>
            <TbBrandCss3 />{" "}
          </li>
          <li>
            <TbBrandHtml5 />
          </li>
          <li>
            <TbBrandJavascript />
          </li>
        </ul>
      </section>

      <section>
        <div class="container reveal">
          <h2 class="reveal">My Projects</h2>
          <div id="projects" class="text-container">
            <div class="text-box  ">
              <h3>Planner CRUD Application</h3>
              <img src={simple} alt="projectpic" width={300} height={300} />
              <button>
                <a href="https://amazing-frangollo-9d837c.netlify.app">
                  Visit Website
                </a>
              </button>

              <ul className="stack">
                <li>
                  <SiMysql />{" "}
                </li>
                <li>
                  <SiReact />
                </li>
                <li>
                  <FaNodeJs />
                </li>
              </ul>
            </div>
            <div class="text-box">
              <h3>Fitness Trainer&nbsp;Website</h3>
              <img src={fitness} alt="projectpic" width={300} height={300} />
              <button>
                <a href="https://www.daniel-islam.com/">Visit Website</a>
              </button>

              <ul className="stack">
                <li>
                  <TbBrandCss3 />{" "}
                </li>
                <li>
                  <TbBrandHtml5 />
                </li>
                <li>
                  <TbBrandJavascript />
                </li>
              </ul>
            </div>
            <div class="text-box">
              <h3>Agency Landing Page</h3>
              <img
                src={loopstudios}
                alt="projectpic"
                width={300}
                height={300}
              />
              <button>
                <a href="https://amazing-frangollo-9d837c.netlify.app">
                  Visit Website
                </a>
              </button>

              <ul className="stack">
                <li>
                  <TbBrandCss3 />{" "}
                </li>
                <li>
                  <TbBrandHtml5 />
                </li>
                <li>
                  <TbBrandJavascript />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Hero;
