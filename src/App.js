/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/19 23:26:09 by macbook           #+#    #+#             */
/*   Updated: 2023/08/26 23:09:20 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen justify-between">
        <div className="">
          <Navbar />
          <div className="">
            {/*  */}
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/skills" element={<Portfolio />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route
                exact
                path="*"
                element={<Home />}
              />
            </Routes>
            {/*  */}
          </div>
        </div>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
