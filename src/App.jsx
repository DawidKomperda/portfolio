import React from "react";
import styles from "./style";
import { About, Contact, Footer, Projects, Skills, Navbar } from "./components/index.js";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
      Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
              item.onmouseover = () => {
                document.getElementById("menu-background-animation").className = 'menu-background-position-' + index;
              }
            })
    }, [])


  return (
    <div className='bg-primary w-full overflow-hidden text-white'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className={""} id="menu-background-animation">
            <Navbar />
            <div className={`menu-background-pattern`}></div>
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Skills />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
};

export default App