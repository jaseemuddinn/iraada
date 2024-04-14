import storyBg from '../../../assets/storyBg.png'
import videoIcon from '../../../assets/videoIcon.png'
import Heading from '../heading/Heading'
function Story() {
    return (
        <div className='md:h-lvh mb-5' >
            <Heading initial={"What's Our"} name={"Story"} />
            <div className='md:flex md:mt-20 mt-5'>
                <p className='md:px-24 px-7'>
                    The idea for the inception of the Youth Action and Leadership Forum for Environment can be attributed to Achintya, a passionate young advocate for environmental concerns.
                    <br />
                    <br />
                    The journey began with attending an international conference on
                    "Emissions monitoring", driven by genuine curiosity and a desire for knowledge. Engaging with a diverse group of individuals, Achintya actively participated in the two-day training workshop, forging valuable connections and expanding his network in the process.
                    <br />
                    <br />
                    Subsequently, Achintya expanded his involvement by participating in multiple conferences addressing critical issues such as climate change, clean energy transition and circular economy, among others. These engagements allowed him to amass knowledge, engage with various stakeholders, and gain hands-on learning experiences. Throughout this transformative process, he consistently observed a common yet distinctive insight— the paramount importance of youth involvement.
                    <br />
                    <br />
                    Realising the significant disparity between the discussions and statements made in these forums and the actual implementation of effective measures on the ground, the idea of this youth driven Youth Action and Leadership Forum for Environment was born which underscored the urgent need for dedicated platforms that would facilitate serious youth-led deliberations, foster meaningful discussions, and provide forums for impactful dialogue within the environmental domain.
                    <br />
                    <br />
                    <button className='bg-[#39e75f] px-4 py-3 rounded-lg font-medium'>
                        Learn more
                    </button>
                </p>

                <div className='md:flex justify-center items-center pr-24 hidden'>
                    <img className='w-[2000px] object-contain' src={storyBg} alt="image" />
                    <img className='h-[50px] absolute cursor-pointer' src={videoIcon} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Story