// Dynamic Menu from JSON file (React.js) nested sub menus
// https://www.youtube.com/watch?v=YHGFagBJKGY

// Curso de Framer Motion desde cero - 🍃 Animaciones para tu proyecto con React
// https://www.youtube.com/watch?v=4HnLIAX0EoM
// https://www.npmjs.com/package/framer-motion
// npm install framer-motion

import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";

// z/un6YK5#atA
// 192.168.31.172
export const Navegacion = (props) => {
    const { navLinksData } = props;
    const [ showSubMenu , setShowSubMenu] = useState([]); 

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      };

    const subMenuOnMouseEnterHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
          console.log("running");
          let arr = [...prev];
          arr[subMenuId] = true;
          return arr;
        });
      };

      const subMenuOnMouseLeaveHandler = (subMenuId) => {
        setShowSubMenu((prev) => {
          console.log("running");
          let arr = [...prev];
          arr[subMenuId] = false;
          return arr;
        });
      };


      return (
        <nav>
          <ul className='main-nav'>
            {navLinksData.map((el, i) => {
              if (!el.división) {
                return (
                  <li key={el.id}>
                    <a href='#' className='header-nav-link'>
                      <span>{el.nombre}</span>
                    </a>
                  </li>
                );
              }
    
              return (
                <li
                  onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)}
                  onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}
                  key={el.id}
                  className='header-nav-options options-hover'
                >
                  <div className='header-nav-div'>
                    <span>{el.nombre}</span>
                  </div>
                  <motion.ul
                    variants={variants}
                    animate={showSubMenu[el.id] ? "open" : "closed"}
                    className='header-nav-ul'
                  >
                    {showSubMenu[el.id] &&
                      el.división.map((ele) => {
                        if (!ele.división) {
                          return (
                            <li key={ele.id} className='sub-menu-li'>
                              <a
                                href='#'
                                className='sub-menu-link'
                                style={{ textDecoration: "none" }}
                              >
                                <span>{ele.nombre}</span>
                              </a>
                            </li>
                          );
                        }
    
                        return (
                          <li
                            onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
                            onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
                            key={ele.id}
                            className='sub-menu-options sub-menu-hover'
                          >
                            <div className='sub-menu-div'>
                              <span>{ele.nombre}</span>
                              <span className='arrow'>{"-->"}</span>
                            </div>
                            <motion.ul
                              variants={variants}
                              animate={showSubMenu[ele.id] ? "open" : "closed"}
                              className='sub-menu-ul'
                            >
                              {showSubMenu[ele.id] &&
                                ele.división.map((elem) => {
                                  return (
                                    <li key={elem.id} className='grand-child-link'>
                                      <a href='#'>
                                        <span>{elem.nombre}</span>
                                      </a>
                                    </li>
                                  );
                                })}
                            </motion.ul>
                          </li>
                        );
                      })}
                  </motion.ul>
                </li>
              );
            })}
          </ul>
        </nav>
      );
}
