import * as React from "react";
import Navbar from "../components/navbar/Navbar";
import Card from '../components/card/card';
import projectInfo from '../info/projects.json'

const Projects = () => {
  return (
    <div className="h-screen">
      <Navbar/>
      <div className="flex flex-wrap justify-center">
        <div className="basis-1/2">
          <h2 className="my-3 border-b-2 border-[#584848]">Selected Projects</h2>
        {projectInfo.map((info) => <Card details={info}/>)}
        </div>
      </div>
    </div>
  )
}

export default Projects
