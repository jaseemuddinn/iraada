import Footer from "../components/footer/Footer"
import Card from "../components/homeComponents/card/Card"
import Hero from "../components/homeComponents/hero/Hero"
import Story from "../components/homeComponents/story/Story"
import Vision from "../components/homeComponents/vision/Vision"
import Whoweare from "../components/homeComponents/whoweare/Whoweare"
import Navbar from "../components/navbar/Navbar"


function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Story />
            <Vision />
            <Whoweare />
            <Card />
            <Footer />
        </div>
    )
}

export default Home