/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   footer.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/20 01:45:11 by macbook           #+#    #+#             */
/*   Updated: 2023/08/19 21:00:03 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from 'react'
import {Link, NavLink} from 'react-router-dom'

class Footer extends React.Component {
    render() {
        window.addEventListener("load", () => {
            let links = document.getElementsByClassName("links");
            switch (window.location.pathname) {
                case "/": links[0].classList.add("font-bold");
                    break;
                case "/skills": links[1].classList.add("font-bold");
                    break;
                case "/contact": links[2].classList.add("font-bold");
                    break;
            }
            for (let index = 0; index < links.length; index++) {
                links[index].addEventListener("click", () => {
                    links[0].classList.remove("font-bold");
                    links[1].classList.remove("font-bold");
                    links[2].classList.remove("font-bold");
                    links[index].classList.add("font-bold");
                });
            }
        });
        return(
            <div className="p-4 pt-16 pb-8 flex">
                <Link to={"./"} className="links mx-3 hover:underline">
                    {/* <a href='./'>Home</a> */}
                    {/* <Link to={"./"}>Home</Link> */}
                    Home
                </Link>
                <Link to={"./skills"} className="links mx-3 hover:underline">
                    {/* <a href='./portfolio'>Portfolio</a> */}
                    {/* <Link to={"./portfolio"}>Portfolio</Link> */}
                    Skills
                </Link>
                <Link to={"./contact"} className="links mx-3 hover:underline">
                    {/* <a href='./contact'>Contact</a> */}
                    {/* <Link to={"./contact"}>Contact</Link> */}
                    Contact
                </Link>
            </div>
        );
    }
};

export default Footer