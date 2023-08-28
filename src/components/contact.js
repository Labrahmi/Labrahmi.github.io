/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   contact.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/20 18:41:48 by macbook           #+#    #+#             */
/*   Updated: 2023/08/26 23:16:52 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="flex flex-col items-center pt-16 laptop:pt-24 desktop:pt-32">
      {/* /? */}
      <div className="w-full flex flex-col items-center flex-center">
        <div className="">
          <h1 className="font-bold text-2xl tablet:text-3xl"><span className="px-3">🌎</span> Let's connect!</h1>
          <div className="flex py-2"></div>
          <hr className=""></hr>
        </div>
        <div className="flex py-2"></div>
        {/* <div className=""> */}
        <div className="flex py-2"></div>
        <div className="flex justify-center">
          {/* <div className="py-4 flex flex-col items-center w-[18rem] font-bold"> */}
            {/* <div className="flex justify-center text-sm tablet:text-base"> */}
              <div className="px-4 flex flex-col items-start">
                <div>
                  <EmailIcon />
                  <span className="tablet:p-4 p-2"></span>
                  <a
                    target="_blank"
                    className="underline"
                    href="mailto:yousseflabrahmi8@gmail.com"
                  >
                    yousseflabrahmi8@gmail.com
                  </a>
                </div>
                <div className="flex py-2"></div>
                <div>
                  <GitHubIcon />
                  <span className="tablet:p-4 p-2"></span>
                  <a
                    target="_blank"
                    className="underline"
                    href="https://github.com/labrahmi/"
                  >
                    Labrahmi
                  </a>
                </div>

                <div className="flex py-2"></div>
                <div>
                  <LinkedInIcon />
                  <span className="tablet:p-4 p-2"></span>
                  <a
                    target="_blank"
                    className="underline"
                    href="https://www.linkedin.com/in/labrahmiy/"
                  >
                    labrahmiy
                  </a>
                </div>

                <div className="flex py-2"></div>
                <div>
                  <LocalPhoneIcon />
                  <span className="tablet:p-4 p-2"></span>
                  <a
                    target="_blank"
                    className="underline"
                    href="http://wa.me/212632105483"
                  >
                    2126 32 10 54 83
                  </a>
                </div>
              </div>
            {/* </div> */}
            {/* yes */}
          {/* </div> */}
        </div>
        {/* </div> */}
      </div>
      {/*  */}
    </div>
  );
}

export default Contact;
