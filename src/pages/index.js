import * as React from "react";
import HomePage from "../components/homepage/homepage";
import Navbar from "../components/navbar/Navbar";
const IndexPage = () => {
  return (
    <div className="h-screen">
      <Navbar/>
      <HomePage/>
    </div>
  )
}

export default IndexPage
