import * as React from "react";
import githubImage from "../../images/GitHub-Mark/PNG/GitHub-Mark-64px.png"

const Card = ({details}) => {
  let {title, description, link} = details;
  return(
    <div className="border rounded-lg bg-[#FAF9F6] mb-5 shadow-md">
      <h3 className="border-b mx-3 my-3 py-3">{title}</h3>
      <p className="p-5 border-b mx-3">{description}</p>
      {
        (link) ?
        <div className='flex justify-center m-2'>
          <a href={link}><img className="hover:drop-shadow-xl"src={githubImage} alt="Github Link"/></a>
        </div>:
        <div className='m-12'></div>
      }
    </div>
  )
}

export default Card
