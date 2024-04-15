import React from 'react'
import TeamCard from '../components/teamComponents/teamCard/TeamCard'
import achintya from '../assets/team/Achintya.jpeg'
import akshay from '../assets/team/Akshay.jpeg'
import anjali from '../assets/team/anjali.jpeg'
import ayushkr from '../assets/team/ayushkrgupta.jpeg'
import chirag from '../assets/team/chirag.jpeg'
import Divyanshu from '../assets/team/divyanshu.jpeg'
import Diya from '../assets/team/diya.jpeg'
import komal from '../assets/team/komaldeep.jpeg'
import krishna from '../assets/team/krishna.jpeg'
import parinita from '../assets/team/parinati.jpeg'
import Rahul from '../assets/team/rahul.jpeg'
import Rajeev from '../assets/team/rajeev.jpeg'
import Samriddhi from '../assets/team/samriddhi.jpeg'
import Sana from '../assets/team/sana.jpeg'
import Shambhavi from '../assets/team/shambhavi.jpeg'
import vanshika from '../assets/team/vanshikagoswami.jpeg'
import vanshikanagar from '../assets/team/VanshikaNagar.jpeg'
import yashasvi from '../assets/team/yashasvi.jpeg'
import suyash from '../assets/team/suyash.jpeg'
import nizam from '../assets/team/Nazim.jpeg'
import kangleikhonbi from '../assets/team/kangleikhonbi.jpeg'
import adhar from "../assets/team/adhar.jpeg"
import ananya from "../assets/team/ananya.jpeg"
import anushka from "../assets/team/anushka.jpeg"
import astha from "../assets/team/astha.jpeg"
import ayushverma from "../assets/team/ayushverma.jpeg"
import doliya from "../assets/team/doliya.jpeg"
import gurnoor from "../assets/team/gurnoor.jpeg"
import isha from "../assets/team/isha.jpeg"
import khusboo from "../assets/team/khusboo.jpeg"
import kmal from "../assets/team/kmal.jpeg"
import masoom from "../assets/team/masoom.jpeg"
import prashant from "../assets/team/prashant.jpeg"
import priyanshi from "../assets/team/priyanshi.jpeg"
import samiksha from "../assets/team/samiksha.jpeg"
import suhas from "../assets/team/suhas.jpeg"
import vishal from "../assets/team/vishal.jpeg"
import vishwapriya from "../assets/team/vishwapriya.jpeg"
import aditya from "../assets/team/aditya.jpeg"
import Navbar from '../components/navbar/Navbar'
import TeamHome from '../components/teamComponents/teamHome/TeamHome'
import Footer from '../components/footer/Footer'

function Team() {
    return (
        <div>
            <div className='md:flex justify-center items-center'>
                <Navbar />
            </div>
            <TeamHome />
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 mt-10">
                <h2 className="text-2xl font-bold font-Montserrat md:text-6xl md:leading-tight ">Our Team</h2>
                <p className="mt-1 text-gray-600 ">Green Warrior</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mb-10'>
                <TeamCard name={"Achintya Ghosal "} position={"Research Team"} description={"Achintya, a Mathematics major at Hansraj College, University of Delhi, specializes in sustainability research, focusing on climate mitigation strategies like carbon footprint reduction. He's an active climate activist, mentoring projects, representing youth at national forums, and collaborating with environmental organizations and think tanks. Alongside his academic pursuits, he's a top-tier competitive swimmer, holding a National Gold medal in Butterfly and Sprint Freestyle events, with a decade-long streak in national competitions."} imgSrc={achintya} />
                <TeamCard name={"Akshay Dahiya"} position={"PR & Communications Team"} description={"Akshay Kumar, a 1st year History Honours student at Hansraj College, University of Delhi, is highly energetic and passionate about societal work and quizzes. His interests span history, archeology, and sports, with active engagement in shot put and public speaking in both Hindi and English. Aware of environmental issues, he's committed to contributing his resourcefulness towards ameliorating the situation."} imgSrc={akshay} />
                <TeamCard name={"Anjali Verma "} position={"PR & Communications Team"} description={"My name is Anjali kumari and  I am from Siwan , Bihar and currently pursuing B Com (hons.) from hansraj College . My hobbies are Crafting , listening music.  I am happy to be a part of this society and looking forward to serve and experience new things. Thankyou for this wonderful opportunity."} imgSrc={anjali} />
                <TeamCard name={" Ayush kumar Gupta"} position={"Event Management Team"} description={"Hola folks, Ayush this side Presently persuing my graduation from Dyal singh college Being a person I always wanted to explore and learn the things which can personally develop me as a good human being, having a background of event management I always wanted the things to be perfect, actually I want all the things to be perfect, so I'm just trying to make myself perfect"} imgSrc={ayushkr} />
                <TeamCard name={"Chirag B P"} position={"Technical Team"} description={"Cheeky, Cheerful and a pinch of Charisma. Pursuing undergrad, but a tech and eSports enthusiast by heart. The optimistic fellow who brings mellow to the team 😄"} imgSrc={chirag} />
                <TeamCard name={"Divyanshu Bhatt"} position={"Editorial Team"} description={"Divyanshu Bhatt is the Joint Secretary of the Department of Zoology, where he actively contributes to the department's events and initiatives. Currently pursuing BSc Hons Zoology at Hansraj College, University of Delhi, , he is an aspiring nature enthusiast and a member of both the Environmental Society and the English Debating Society. Furthermore, he serves as the Editorial Director of Srishti Chetna, showcasing his passion for writing and editorial work. In his free time, he enjoys reading, writing, and public speaking, refining his skills and exploring new opportunities."} imgSrc={Divyanshu} />
                <TeamCard name={"Diya Bhatt "} position={"PR & Communications Team"} description={"Diya Bhatt is a multi-talented student pursuing a Bachelor of Science in Zoology while also studying Indian classical vocals and Kathak dance at the Master's and graduation levels respectively. She's proficient in guitar and has a passion for music. Besides her academic endeavors, Diya loves traveling, reading, and making new friends. Her eco-conscious mindset, fueled by her love for animals, reflects her dedication to environmental causes. With her diverse skills and positive outlook, Diya is poised to make a significant impact."} imgSrc={Diya} />
                <TeamCard name={" Komaldeep Kaur"} position={"Technical Team"} description={"Komaldeep Kaur, a final year student at Sri Guru Gobind Singh College of Commerce, University of Delhi, is passionate about sustainability. She serves as the General Secretary of the Environment Club and interns at Project India 360 as a Project Management Intern. Komaldeep has completed courses in ESG and Sustainable Finance, demonstrating her commitment to environmental and social causes. Her involvement spans internships, coursework, extracurriculars, and volunteerism, all aimed at making a positive impact on society and the environment."} imgSrc={komal} />
                <TeamCard name={"Krishna Singh"} position={"Event Management Team"} description={"Hello Everyone, I am Krishna Singh, a first-year student from Ramjas College pursuing B.Sc. Statistics (Hons.). Also, During the first year of my college, I Successfully Volunteered in two events which were VIMARSH'22 and EDUCARNIVAL'22."} imgSrc={krishna} />
                <TeamCard name={" Parinati Jain"} position={"Technical Team"} description={"Parinati is a B.Com(prog.) student pursuing Undergrad at Hansraj College, University of Delhi, taking great interest in English, Economics and Cost Accounting. She is an Environment Enthusiast and is a member of different Environmental Societies of her college where she is Actively involved in organizing Events and Drives. Her interests lies in Content Writing and Graphic Designing. Her expertise spreads across wide variety of applications such as Adobe Photoshop, Canva and Snapseed. "} imgSrc={parinita} />
                <TeamCard name={"Rahul"} position={"Technical Team"} description={"Hello, I'm Rahul, a second year student of Economics and History. I'm a enthusiast of street photography and love to surf net in my free time. With time, skills have evolved and from being audience at one point of time to managing audience today, I've shifted my place from the seat to the stage. Now, I look forward of becoming a part of what I could say a wonder that would mark the establishment of real Diamond jubilee of my college Hansraj. "} imgSrc={Rahul} />
                <TeamCard name={"Rajeev "} position={"PR & Communications Team"} description={"Bachelor's student in BCom (Hons) at Satyawati College, University of Delhi. Passionate about environmental conservation and currently serving as the Treasurer of Prakriti - The Environment Society of Satyawati College. Committed to creating a sustainable future."} imgSrc={Rajeev} />
                <TeamCard name={"Samriddhi Chaturvedi"} position={"Design Team"} description={"I'm Samriddhi Chaturvedi, a sophomore at Miranda House, University of Delhi, studying Life Sciences. I'm passionate about sustainability and climate change and am actively involved in spreading awareness through MH Vatavaran, our college's environment society.Additionally, I'm part of BIOMARKED, a health and fitness-based community, where we focus on educating people about maintaining a balance between diet and lifestyle to prevent lifestyle-related disorders. I'm eager to learn and always seeking new opportunities for growth."} imgSrc={Samriddhi} />
                <TeamCard name={"Sana Khan"} position={"PR & Communications Team"} description={"Hey, I'm Sana Khan. I'm a life sciences student in my second year of UG studies at Miranda House. I enjoy exploring new places and feel good near nature. I do love reading a lot and it's my new found hobbie. I love mystery books and thriller is my favorite genera. In addition, I'm very interested in programming. In my spare time, I also engage in activities like volunteer work and creative design."} imgSrc={Sana} />
                <TeamCard name="Shambhavi Krishna" position={"PR & Communications Team"} description={"Shambhavi, a Life Sciences student at Miranda House, advocates for environmental conservation, believing in shared responsibility for the planet. Actively involved in raising awareness through national conferences and activities, she inspires others towards positive environmental action."} imgSrc={Shambhavi} />
                <TeamCard name={"Vanshika Goswami"} position={"PR & Communications Team"} description={"Vanshika Goswami is a 2nd-year student from BSc. Zoology Hons., Hansraj College.She is a driven and enthusiastic individual who is passionate about making a positive impact in the world. She is a highly motivated individual who is always looking for ways to challenge herself and grow both personally and professionally. She enjoys spending time immersed in nature, capturing its beauty on canvas, baking delicious treats, and strumming her guitar. Vanshika is a team player and believes in communication being the pillar of strength for efficient teamwork."} imgSrc={vanshika} />
                <TeamCard name={"Vanshika Nagar"} position={"Event Management Team"} description={"Hola! I am Vanshika Nagar, a student of Hansraj College. I am a Delhiite, but love being in the cool breezy mountain air. I enjoy dancing and am a Bollywood buff. I strive for excellence and aspire to be the change!"} imgSrc={vanshikanagar} />
                <TeamCard name={"Yashasvi Agarwal"} position={"Event Management Team"} description={"Bonjour, I am Yashasvi, I am a third year student at University of Delhi. I believe I'm a rainbow girl who is a jack of all trades. Saying Yes  to each new adventure is my Superpower. I am on a mission to experience every possible thing on this Green planet earth. I am a people's person, who can have a whole F.R.I.E.N.D.S Conversation in her mind."} imgSrc={yashasvi} />
                <TeamCard name={"Suyash Pandey"} position={"Design Team"} description={"I'm Suyash Pandey, a Mathematics student at the University of Delhi, originally from Lucknow, Uttar Pradesh. Engaging in extracurriculars, I joined the Nature and Environmental Society and now contribute to the Environmental Summit's design team. Excited to raise awareness for environmental causes through digital design."} imgSrc={suyash} />
                <TeamCard name={"Nazim Hosain"} position={"Research Team"} description={"Nazim is an environment enthusiast and is pursuing BSc (Hons) in Chemistry from Hansraj College, University of Delhi. Nazim is also a green researcher working on ways to achieve green growth.He is also an NSS volunteer working for social cause and a Women and Child Rights Activist. He also took part in various field surveys like Surveys conducted under Unnat Bharat Abhiyan, etc."} imgSrc={nizam} />
                <TeamCard name={" Kangleikhonbi Maibam"} position={"Event Management Team"} description={"I'm Kangleikhonbi Maibam, a B.Sc (Hons.) Physics student at Miranda House, Delhi University, deeply passionate about environmental issues. Joining the Environmental Summit aligns with my lifelong dream of combating environmental pollution. Alongside academics, I'm actively engaged in singing, sports, and currently serve as the Vice-President of the North-East Society at Miranda House. With enthusiasm and leadership qualities, I'm determined to drive change and make our Earth a better place."} imgSrc={kangleikhonbi} />
                <TeamCard name={"Aadhar"} position={"Event Management Team"} description={""} imgSrc={adhar} />
                <TeamCard name={"Ananya"} position={"Event Management Team"} description={""} imgSrc={ananya} />
                <TeamCard name={"Anushka"} position={"Event Management Team"} description={""} imgSrc={anushka} />
                <TeamCard name={"Aastha"} position={"Design Team"} description={""} imgSrc={astha} />
                <TeamCard name={"Ayush Verma"} position={"Social Media Team"} description={""} imgSrc={ayushverma} />
                <TeamCard name={"Doliya"} position={"Social Media Team"} description={""} imgSrc={doliya} />
                <TeamCard name={"Gurnoor"} position={"Design Team"} description={""} imgSrc={gurnoor} />
                <TeamCard name={"Isha"} position={"Design Team"} description={""} imgSrc={isha} />
                <TeamCard name={"Khusbhu"} position={"Design Team"} description={""} imgSrc={khusboo} />
                <TeamCard name={"Komal"} position={"Design Team"} description={""} imgSrc={kmal} />
                <TeamCard name={"Masoom"} position={"Event Management Team"} description={""} imgSrc={masoom} />
                <TeamCard name={"Prashant"} position={"PR & Communications Team"} description={""} imgSrc={prashant} />
                <TeamCard name={"Priyanshi"} position={"Editorial Team"} description={""} imgSrc={priyanshi} />
                <TeamCard name={"Samiksha"} position={"Design Team"} description={""} imgSrc={samiksha} />
                <TeamCard name={"Suhas"} position={"Social Media Team"} description={""} imgSrc={suhas} />
                <TeamCard name={"Vishal"} position={"PR & Communications Team"} description={""} imgSrc={vishal} />
                <TeamCard name={"Vishwapriya"} position={"Editorial Team"} description={""} imgSrc={vishwapriya} />
                <TeamCard name={"Aditya"} position={"Editorial Team"} description={""} imgSrc={aditya} />
                
            </div>
            <Footer />
        </div>
    )
}

export default Team