import React, { useState } from 'react'

import {
    FaFacebookF,
    FaYoutube,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";

import { FiMenu } from "react-icons/fi";


function Header() {

    const [menuBurger, setMenuBurger] = useState(false)    

  return (
    <div className="fixed z-20 bg-[#102337] h-[80px] lg:h-[110px] border border-[#102337] border-b-[#00D8EC] border-4 w-full flex justify-between items-center transition ease-in-out duration-1000">
        {/* Logo */}
        <div className="cursor-pointer">
            <img className="pl-[60px] lg:pl-[110px] h-[40px] lg:h-[60px]" src="https://dtlaca8pgqtx.cloudfront.net/logo.png" alt="" />
        </div>
        {/* Liens */}
        <div className="hidden lg:flex md:justify-center lg:items-center lg:cursor-pointer">
            <div className="border border-y-[#102337] border-x-[#808080] px-[50px] py-[8px] hover:border-b-[#00D8EC] text-white hover:text-[#00D8EC]">
                <span className=" text-[12px] font-bold">NEWS</span>
            </div>
            <div className="border border-y-[#102337] border-x-[#808080] px-[50px] py-[8px] hover:border-b-[#00D8EC] text-white hover:text-[#00D8EC]">
                <span className=" text-[12px] font-bold">TEAMS</span>
            </div>
            <div className="border border-y-[#102337] border-x-[#808080] px-[50px] py-[8px] hover:border-b-[#00D8EC] text-white hover:text-[#00D8EC]">
                <span className="text-[12px] font-bold">STORE</span>
            </div>
            <div className="border border-y-[#102337] border-x-[#808080] px-[50px] py-[8px] hover:border-b-[#00D8EC] text-white hover:text-[#00D8EC]">
                <span className=" text-[12px] font-bold">SPONSORS</span>
            </div>
            <div className="border border-y-[#102337] border-x-[#808080] px-[50px] py-[8px] hover:border-b-[#00D8EC] text-white hover:text-[#00D8EC]">
                <span className=" text-[12px] font-bold">ABOUT</span>
            </div>
        </div>
        {/* Réseaux Sociaux */}
        <div className="hidden lg:flex lg:justify-center lg:items-center lg:pr-[40px] lg:space-x-5 lg:cursor-pointer">
            <FaTwitter color="#00D8EC" fontSize={18} />
            <FaYoutube color="#00D8EC" fontSize={20} />
            <FaInstagram color="#00D8EC" fontSize={18} />
            <FaFacebookF color="#00D8EC" fontSize={19} />
        </div>
        <div className="mr-5 py-1 px-3 border border-gray-700 rounded-lg cursor-pointer lg:hidden" onClick={() => setMenuBurger(!menuBurger)}>
            {/* MENU BURGER BUTTON */}
            <FiMenu className="lg:hidden" color="#00D8EC" fontSize={35}/>
        </div>

        <div className={menuBurger ? "MenuOuvert" : "MenuFermé"}>
            <ul className="text-white text-2xl text-center font-semibold">
                <li className="border border-[#102337] border-x-[#808080] hover:border-b-[#00D8EC] hover:text-[#00D8EC] cursor-pointer mx-4 py-[12px]">NEWS</li>
                <li className="border border-[#102337] border-x-[#808080] hover:border-b-[#00D8EC] hover:text-[#00D8EC] cursor-pointer mx-4 py-[12px]">TEAMS</li>
                <li className="border border-[#102337] border-x-[#808080] hover:border-b-[#00D8EC] hover:text-[#00D8EC] cursor-pointer mx-4 py-[12px]">STORE</li>
                <li className="border border-[#102337] border-x-[#808080] hover:border-b-[#00D8EC] hover:text-[#00D8EC] cursor-pointer mx-4 py-[12px]">SPONSORS</li>
                <li className="border border-[#102337] border-x-[#808080] hover:border-b-[#00D8EC] hover:text-[#00D8EC] cursor-pointer mx-4 py-[12px]">ABOUT</li>
            </ul>
            <div className="flex justify-center items-center space-x-5 pt-4 cursor-pointer">
                <FaTwitter color="#00D8EC" fontSize={30} />
                <FaYoutube color="#00D8EC" fontSize={30} />
                <FaInstagram color="#00D8EC" fontSize={30} />
                <FaFacebookF color="#00D8EC" fontSize={30} />
            </div>
        </div>

        <style>
            {`
                .MenuFermé {
                    display: none;
                }
                .MenuOuvert {
                    position: absolute;
                    left: auto;
                    top: 100px;
                    left: -5px;
                    height: 360px;
                    width: 101%;
                    background: #102337;
                    border: 4px #102337 solid;
                    border-bottom-color: #00D8EC;
                    z-index: 5;
                }
                @media (min-width: 1024px) {
                    .MenuOuvert {
                        display: none;
                    }
                }
            `}
        </style>

    </div>
  )
}

export default Header