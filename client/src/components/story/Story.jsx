import storyBg from '../../assets/storyBg.png'
import videoIcon from '../../assets/videoIcon.png'
function Story() {
    return (
        <div className='h-lvh'>
            <div className="relative flex">
                <h1
                    className="absolute left-0 text-[20px] lg:text-[70px] font-bold ml-[210px]  text-gray-900 opacity-15 md:block hidden">
                    STORY
                </h1>
                <h1 className="pl-2 text-3xl font-bold md:text-5xl text-black flex items-center mt-10">
                    <div className='h-[2px] w-20 bg-gray-900 mr-2' ></div>
                    <span className='text-xl'>
                        What's Our &nbsp;
                    </span> Story
                </h1>
            </div>
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
                    <button className='bg-[#fcc94c] px-4 py-3 rounded-lg font-medium'>
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