import * as React from 'react'
import "../../styles/base.css"
import image from "../../images/me4.png"

const HomePage = () => {
  return (
      <main className="h-5/6">
        <div className="flex justify-center items-center h-full">
          <div className="basis-1/3 h-2/6 ml-40">
            <h1 className="text-[#F3B54A]"> Ian Gomez </h1>
            <h3 className="text-[#6E7889]"> MLE; DS; SWE </h3>
            <p className="text-[#393B45]">
              Focusing on learning Machine Learning Theory,
              and trying to do research in Machine Learning.
            </p>
          </div>
          <div className="basis-1/2 flex justify-end items-center">
            <img className="mr-40 bg-bone" src={image} alt="Picture of me"/>
          </div>
        </div>
      </main>
  );

}

export default HomePage
