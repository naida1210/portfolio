import React from 'react'
import random from "./images/randonadvice.png";
import card from "./images/cardDetails.png";
import sunnyside from "./images/sunnyside.png";
import { TbApi } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
const Projects = () => {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
    
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
    
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
    
      window.addEventListener("scroll", reveal);
  return (
    <div className="herowrapper">



<section class="bottom">
        <div class="container reveal">
          <div class="text-container">
            <div class="text-box ">
              <h3>Random Advice App</h3>
              <img src={random} alt="projectpic" width={300} height={300} />
              <button>
                <a href="https://heroic-mochi-440144.netlify.app">
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
                <li>
                  <TbApi />
                </li>
              </ul>
            </div>
            <div class="text-box">
              <h3>Interactive&nbsp;Card Details Page</h3>
              <img src={card} alt="projectpic" width={300} height={300} />
              <button>
                <a href="https://interactivedetailscard.netlify.app/">
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
            <div class="text-box">
              <h3>Agency Landing Page</h3>
              <img src={sunnyside} alt="projectpic" width={300} height={300} />
              <button>
                <a href="https://voluble-shortbread-2598f0.netlify.app/">
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
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects