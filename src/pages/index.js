import React, { useEffect } from "react";
import { Head, Hero, About, Projects, Contact, Divider } from "../components";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.js";

export default function Home() {
  useEffect(() => {
    console.log(
      `%cCurious, aren't you? Here's your surprise: https://bit.ly/3nyi8Ru`,
      `display: inline-block; border: 2px solid red; border-radius: 4px; padding: 4px;`
    );
  }, []);
  return (
    <>
      <Head />
      <Hero />
      <About />
      <Divider />
      <Projects />
      <Divider invert />
      <Contact />
    </>
  );
}
