import Footer from "../componant/footer";
import Navbar from "../componant/navbar";
import About from "../componant/About";
import Contact from "../componant/Contact";
import Homedes from "../componant/HomeDes";
import Project from "../componant/Project";
import Skills from "../componant/skills";

function Home() {
    return (
        <>
            <Navbar />
            <Homedes />
            <hr />
            <About />
            <hr />
            <Project />
            <hr />
            <Skills />
            <hr />
            <Contact />
            <hr />
            <Footer />
        </>
    );
}

export default Home;
