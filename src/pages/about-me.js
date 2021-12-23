import * as React from "react";
import Navbar from "../components/navbar/Navbar";

const AboutMePage = () => {
  return (
    <div className="h-screen">
      <Navbar/>
      <main className="h-5/6">
        <div className="flex justify-center h-full flex-wrap basis-1/2">
          <div className="basis-1/2 h-max">
            <div className="border-b-2 border-[#584848]">
              <h1 className="text-[#393B45]">Who I Am</h1>
            </div>
            <div className="mt-3">
              <p>
                Hey! My name is Ian. I'm currently working at Google as a Software Engineer.
                I'm trying to learn more about the theory that underlies Machine Learning, and
                hope to do research one day (hopefully I can start internally at Google).
              </p>

              <p className="mt-5">I've recently been reading Machine Learning textbooks and reading research papers.
                Recently, I've been reading "Understanding Machine Learning From Theory to Algorithms," by Shai Ben-David and Shai Shalev-Shwartz.
                I also recently read some chapters from "Deep Learning," by Ian Goodfellow, Yoshua Bengio, and Aaron Courville. </p>

              <p className="mt-5">
                Besides that I also enjoy doing a few side projects to try out different learning algorithms and technologies.
                I also like implementing different learning algorithms that I learned in school. I personally think that the best way to learn is to apply things and self-teach.
                Applying things is a way for me to better understand things
              </p>
            </div>
            <div className="mt-3">
              <h3>Education</h3>
              <div className="mb-2">
                <p>M.S. Machine Learning </p>
                <ul> <li>Stevens Institute of Technology | Dec 2021 | GPA: 4.0/4.0</li></ul>
              </div>
              <p>B.S. Computer Science</p>
              <ul> <li>Stevens Institute of Technology | May 2021 | GPA: 3.93/4.0</li></ul>
            </div>
            <div className="mt-3">
              <h3>Interests</h3>
              <p>In terms of technical subjects I'm super interested in most fields of Machine Learning. Some examples of my interest areas are:</p>
              <ul className="tech">
                <li>NLP</li>
                <li>Computer Vision</li>
                <li>Reinforcement Learning</li>
                <li>Deep Learning</li>
                <li>Statistical Machine Learning</li>
                <li>Online Learning Algorithms</li>
                <li>Knowledge Distillation</li>
              </ul>
              <p className="mt-3">Overall I am pretty basic. Some random info about me is:</p>
              <ul className="fun">
                <li>I love coding personal projects</li>
                <li>I'm a boba fanatic</li>
                <li>I love listening to EDM, K-pop, and K-rnb</li>
                <li>I'm a huge Itzy stan</li>
                <li>I love food</li>
              </ul>
            </div>
            <div className='mt-3 mb-10'>
              <h3>Work Experience</h3>
              <ul className="tech">
                <li> Incoming SWE @ Google</li>
                <li> SWE Intern @ Google: Working on ML and Data Science related work</li>
                <li> Full-Stack Developer Intern @ IBM: Mostly working on DevOps </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AboutMePage
