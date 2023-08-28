/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   home.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ylabrahm <ylabrahm@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/20 01:49:12 by macbook           #+#    #+#             */
/*   Updated: 2023/08/28 18:04:32 by ylabrahm         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import image from "../assets/image.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Screeen from "../assets/screen.png"
import bus from "../assets/bus.png"
import chatai from "../assets/chatai.png"
import so_long from "../assets/so_long.png"
import kwiri from "../assets/kwiri.png"
import todo from "../assets/todo.png"

function Home() {
  function loadDiv() {
    let HomeDiv = document.getElementById("HomeDiv");
    HomeDiv.classList.remove("opacity-0");
    HomeDiv.classList.replace("pt-32", "pt-16");
    HomeDiv.classList.replace("laptop:pt-48", "laptop:pt-40");
    HomeDiv.classList.replace("desktop:pt-64", "desktop:pt-52");
  }
  return (
    <div onLoad={loadDiv} id="HomeDiv" className="pt-32 opacity-0 laptop:pt-48 desktop:pt-64 px-8 flex flex-col items-center transition-all duration-500">
      <div className="laptop:w-[40rem] tablet:w-[30rem] flex flex-col justify-center items-center text-center">
        <div className="flex"></div>
        <h1 className="font-black tablet:text-3xl desktop:text-4xl text-2xl py-2">
          <Typewriter
            options={{
              strings: [
                "Hello world",
                "This is me Youssef",
                "LEET, _>./",
                "Full Stack Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-lg font-medium">
          I am a{" "}
          <a
            href="https://1337.ma/"
            target={"_blank"}
            className="font-black hover:underline"
          >
            1337 Med
          </a>{" "}
          Student (42 Network), freelancer,{" "}
          <span className="font-black">full stack</span> web developer with +2
          years of experience, design & electronics enthusiast. Always curious
          to learn more about this field.
        </p>
      </div>
      <div className="flex py-8"></div>
      <div className="flex justify-center py-1 animate-bounce">
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
      <div
        className="transition-all duration-1000 laptop:w-[60rem] desktop:w-[70rem]"
        id="featured_p"
      >
        <h1 className="text-xl font-bold py-2">Featured Projects</h1>
        <hr className="py-2" />
        <div className="py-2">
          <div className="grid tablet:grid-cols-2 tablet:grid-rows-2 laptop:grid-rows-1 laptop:grid-cols-3 grid-rows-3 grid-cols-1 gap-6">
            {/* - */}
            <div className="transition-all bg-white bg-opacity-50 rounded-lg border overflow-hidden hover:brightness-[.95]">
              <img
                className="transition-all duration-500 border-b desktop:h-40 h-64 max-w-none w-full object-cover"
                src={
                  kwiri
                }
              ></img>
              <div className="p-4 flex flex-col justify-between min-h-[16rem]">
                <div className="">
                  <h1 className="font-bold text-xl">⌥ Kwiri</h1>
                  <p className="font-light text-sm">
                    is web-based UI, made with HTML, Tailwindcss, offering a
                    driving services solution called Kwiri, which is a famous
                    word in moroccan sahara, means Taxi.
                  </p>
                  <div className="py-1 font-light">
                    <span className="pr-2 font-normal">Technologies:</span>
                    <span className="">Tailwindcss, HTML, Javascript.</span>
                  </div>
                  <div className="flex py-1"></div>
                </div>
                <div className="flex justify-between  text-base">
                  <a
                    href="https://github.com/Labrahmi/kwiri"
                    className="transition-all w-fit flex rounded-md border-[1.3px] border-slate-300 bg-slate-200 justify-center p-2 hover:brightness-95"
                  >
                    <GitHubIcon />
                  </a>
                  <div className="flex px-2"></div>
                  <a
                    target={"_blank"}
                    href="./kwiri/"
                    className="transition-all w-full flex rounded-md border-[1.3px] text-slate-600 border-slate-500 hover:bg-slate-500 hover:text-white justify-center p-2 "
                  >
                    Preview demo
                  </a>
                </div>
              </div>
            </div>
            {/* - */}
            <div className="transition-all bg-white bg-opacity-50 rounded-lg border overflow-hidden hover:brightness-[.95]">
              <img
                className="transition-all duration-500 border-b desktop:h-40 h-64 max-w-none w-full object-cover"
                src={
                  so_long
                }
              ></img>
              <div className="p-4 flex flex-col justify-between min-h-[16rem]">
                <div className="">
                  <h1 className="font-bold text-xl">⌥ So long</h1>
                  <p className="font-light text-sm">
                    This project entails developing a game using the mlx library, where players collect items in a specific map layout. The game incorporates custom animations.
                  </p>
                  <div className="py-1 font-light">
                    <span className="pr-2 font-normal">Technologies:</span>
                    <span>
                      C programming, MLX
                    </span>
                  </div>
                  <div className="flex py-1"></div>
                </div>
                <div className="flex justify-between text-base">
                  <a
                    href="https://github.com/Labrahmi/so_long"
                    className="transition-all w-fit flex rounded-md border-[1.3px] border-slate-300 bg-slate-200 justify-center p-2 hover:brightness-95"
                  >
                    <GitHubIcon />
                  </a>
                  <div className="flex px-2"></div>
                  <a
                    target={"_self"}
                    href="#"
                    className="cursor-not-allowed transition-all w-full flex rounded-md border-[1.3px] text-slate-600 border-slate-500 justify-center p-2 "
                  >
                    Preview demo
                  </a>
                </div>
              </div>
            </div>
            {/* - */}
            <div className="transition-all bg-white bg-opacity-50 rounded-lg border overflow-hidden hover:brightness-[.95]">
              <img
                className="transition-all duration-500 border-b desktop:h-40 h-64 max-w-none w-full object-cover"
                src={
                  todo
                }
              ></img>
              <div className="p-4 flex flex-col justify-between min-h-[16rem]">
                <div className="">
                  <h1 className="font-bold text-xl">⌥ Todo List</h1>
                  <p className="font-light text-sm">
                    a simple app built using React.js that allows users to
                    manage their tasks. a responsive and easy-to-use interface
                    that lets users add, mark, and remove tasks.
                  </p>
                  <div className="py-1 font-light">
                    <span className="pr-2 font-normal">Technologies:</span>
                    <span>ReactJs, Tailwindcss.</span>
                  </div>
                  <div className="flex py-1"></div>
                </div>
                <div className="flex justify-between  text-base">
                  <a
                    href="https://labrahmi.github.io/todo-list/"
                    className="transition-all w-fit flex rounded-md border-[1.3px] border-slate-300 bg-slate-200 justify-center p-2 hover:brightness-95"
                  >
                    <GitHubIcon />
                  </a>
                  <div className="flex px-2"></div>
                  <a
                    href="./todo-list"
                    className="transition-all w-full flex rounded-md border-[1.3px] text-slate-600 border-slate-500 hover:bg-slate-500 hover:text-white justify-center p-2 "
                  >
                    Preview demo
                  </a>
                </div>
              </div>
            </div>
            {/* - */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
