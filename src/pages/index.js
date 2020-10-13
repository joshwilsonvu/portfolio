import React, { useEffect } from "react";
import { Head, Hero, About, Projects, Contact, Divider } from "../components";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../style/index.js";

export default function Home() {
  useEffect(() => {
    console.log(
      `%cLooking for an Easter egg? https://bit.ly/3nyi8Ru`,
      `display: inline-block; border: 2px solid green; border-radius: 4px; padding: 4px;`
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
