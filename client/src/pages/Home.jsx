import About from "../components/about/About"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"
import Story from "../components/story/Story"
import Vision from "../components/vision/Vision"

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Story />
            <Vision />
            <About />
        </div>
    )
}

export default Home