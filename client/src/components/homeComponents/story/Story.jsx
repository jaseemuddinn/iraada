import storyBg from '../../../assets/storyBg.png'
import videoIcon from '../../../assets/videoIcon.png'
import Heading from '../heading/Heading'
function Story() {
    return (
        <div className='md:h-lvh mb-5' >
            <Heading initial={"What's Our"} name={"Story"} />
            <div className='md:flex md:mt-20 mt-5'>
                <p className='md:px-24 px-7'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam quas voluptas alias cumque. Repudiandae corrupti omnis quasi. Mollitia temporibus, ipsam soluta fugit nobis natus, eius quam voluptates explicabo eos ullam.
                    Sequi ex enim dolorem deserunt rem natus, fuga earum quam consequatur. Quibusdam quod tenetur eum libero ut? Aspernatur omnis culpa deserunt, earum similique amet reiciendis iusto necessitatibus nostrum! Eos, ullam?
                    Repellat nulla impedit exercitationem fuga officia dolor commodi molestias veniam quisquam, quo ullam numquam soluta vel voluptates distinctio iste cupiditate consectetur officiis odio, nisi sit eveniet. Quos, quas. Obcaecati, inventore.
                    <br /> <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere alias cum culpa, harum architecto, impedit saepe rem tempore exercitationem ab voluptatum libero quia vero pariatur magni tenetur eum. At.
                    Voluptates, quaerat ipsa libero incidunt natus facilis sapiente quisquam deserunt perspiciatis vel quidem nemo optio eius enim reiciendis aut omnis perferendis aperiam veritatis quae dicta beatae dolore hic ipsam. Voluptate!
                    Quisquam a quam tenetur pariatur officia magni culpa? Placeat aspernatur maxime necessitatibus quam excepturi sint fugit eveniet quaerat. Eos hic dolorem beatae delectus veniam rerum minima voluptatum consectetur neque! Eligendi.
                    <br /><br />
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