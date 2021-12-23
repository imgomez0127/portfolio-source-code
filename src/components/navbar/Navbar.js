import * as React from 'react'
import "../../styles/base.css"
import logo from "../../images/relu_function.svg"
const Navbar = () => {
  let links = [
    ["Home", "/"],
    ["About Me", "/about-me"],
    ["Projects", "/projects"],
    ["Resume", "https://github.com/imgomez0127/resume-pdf/blob/main/resume.pdf"],
    ["Github", "https://github.com/imgomez0127"]
  ]
  return (
    <nav div className="flex justify-between sticky top-0 bg-[#F8F0E3]">
      <div className="basis-1/6 flex justify-center my-1">
        <a className="ml-52" href="/">
          <img src={logo} className="h-20 w-20 border border-[#584848]" alt="Logo"/>
          <span className="text-[#393B45]">ReLU</span>
        </a>
      </div>
      <div className="basis-1/3 flex justify-around mr-52">
        {links.map(([name, link]) =>
          <a href={link} className="self-center hover:underline decoration-[#F3B54A] text-[#393B45]" key={name}>
            <div>{name}</div>
          </a>)
        }
      </div>
    </nav>
  );

}

export default Navbar
