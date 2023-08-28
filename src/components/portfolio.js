/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   portfolio.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/20 18:23:14 by macbook           #+#    #+#             */
/*   Updated: 2023/08/26 23:16:46 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { Rating } from "@mui/material";
import { useState } from "react";
import TextRating from "./rating";
import LabTabs from "./labtab";

function Portfolio() {
  const [data, setdata] = useState([
    { name: "Javascript", value: 3 },
    { name: "C++", value: 3 },
    { name: "C", value: 4 },
  ]);
  function switchfun(e) {
    let ele = e.target;
    if (ele.classList.contains("text-slate-700")) {
      let skills = document.getElementsByClassName("skills");
      for (let index = 0; index < skills.length; index++) {
        if (skills[index].classList.contains("text-white")) {
          skills[index].classList.replace("text-white", "text-slate-700");
          skills[index].classList.remove("bg-slate-600");
        }
      }
      ele.classList.replace("text-slate-700", "text-white");
      ele.classList.add("bg-slate-600");
      switch (ele.id) {
        case "skill-0":
          setdata([
            { name: "Javascript", value: 3 },
            { name: "C++", value: 3 },
            { name: "C", value: 4 },
          ]);
          break;
        case "skill-1":
          setdata([
            { name: "Tailwindcss", value: 5 },
            { name: "ReactJs", value: 3 },
            { name: "Mui", value: 3 },
          ]);
          break;
        case "skill-2":
          setdata([
            { name: "Laravel", value: 4 },
            { name: "MySql", value: 3 },
            { name: "ExpressJs", value: 3 },
            { name: "Mongodb", value: 4 },
          ]);
          break;
        case "skill-3":
          setdata([
            { name: "Git/Github", value: 5 },
            { name: "Figma", value: 3 },
            { name: "Ps/Ai", value: 4 },
          ]);
          break;
      }
    }
  }
  return (
    <div className="flex flex-col items-center pt-16 laptop:pt-24 desktop:pt-32">
      {/* /? */}
      <div className="w-full flex flex-col items-center flex-center">
        <div className="">
          <h1 className="font-bold text-2xl tablet:text-3xl"><span className="px-3">🛠</span> Tech Stack</h1>
          <div className="flex py-2"></div>
          <hr className=""></hr>
        </div>
        <div className="flex py-2"></div>
        <div className="">
          <div className="flex justify-center py-2 font-bold text-sm tablet:text-base">
            <div
              onClick={(e) => switchfun(e)}
              id="skill-0"
              className="skills transition-all duration-200 select-none tablet:mr-2 mr-1.5 px-1.5 tablet:px-3 py-2 text-white bg-slate-600 rounded-full  cursor-pointer"
            >
              Languages
            </div>
            <div
              onClick={(e) => switchfun(e)}
              id="skill-1"
              className="skills transition-all duration-200 select-none tablet:mx-2 mx-1.5 px-1.5 tablet:px-3 py-2 text-slate-700 rounded-full  cursor-pointer"
            >
              Frontend
            </div>
            <div
              onClick={(e) => switchfun(e)}
              id="skill-2"
              className="skills transition-all duration-200 select-none tablet:mx-2 mx-1.5 px-1.5 tablet:px-3 py-2 text-slate-700 rounded-full  cursor-pointer"
            >
              Backend
            </div>
            <div
              onClick={(e) => switchfun(e)}
              id="skill-3"
              className="skills transition-all duration-200 select-none tablet:ml-2 ml-1.5 px-1.5 tablet:px-3 py-2 text-slate-700 rounded-full  cursor-pointer"
            >
              Tools
            </div>
          </div>
          <div className="flex py-2"></div>
          <div className="flex justify-center">
            <div className="py-4 flex flex-col items-center w-[18rem] font-bold">
              {data.map((element, index) => (
                <div className="flex w-full justify-between" key={index}>
                  <div className="text-slate-600">{element.name}</div>
                  <TextRating id="hakimeyy" value={element.value} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Portfolio;
