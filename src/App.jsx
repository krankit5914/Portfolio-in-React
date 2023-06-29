import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Nav from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";

const App=()=>{
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Project/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App;