/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   navbar.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/19 23:26:06 by macbook           #+#    #+#             */
/*   Updated: 2023/08/19 20:57:39 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from 'react'
import TerminalIcon from '@mui/icons-material/Terminal';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import english_image from "../assets/english-img.png"
import french_image from "../assets/french-img.png"

class Navbar extends React.Component {
    render() {
        return (
            <div className="select-none px-8">
                <nav className="py-5 text-slate-900 flex justify-between items-center">
                    {/* <a href='./' className="text-xl font-semibold"><TerminalIcon fontSize='large'/></a> */}
                    {/* <div className="flex justify-between items-center p-2 drop-shadow-xl">
                        <img className="cursor-pointer transition-all hover:brightness-[1.2] w-6 h-6 mx-1 rounded-full" src={english_image}></img>
                        <img className="cursor-pointer transition-all hover:brightness-[1.2] w-6 h-6 mx-1 rounded-full" src={french_image}></img>
                        <div className="cursor-pointer transition-all hover:brightness-[1.2] w-6 h-6 mx-1 scale-125 flex"><DarkModeIcon className="" fontSize='medium'/></div>
                    </div> */}
                </nav>
            </div>
        );
    }
};

export default Navbar