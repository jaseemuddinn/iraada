import React from 'react'
import img from '../../../assets/whoweareBg.png'

function TeamHome() {
    return (
        <div className='lg:h-lvh bg-[#a3e4b1] flex justify-center items-center p-5'>
            <div style={{}} className='bg-[#39e75f] md:w-4/5 rounded-3xl flex p-10 justify-between md:overflow-x-auto md:overflow-y-auto'>
                <div className='lg:w-1/2 lg:pr-10'>
                    <h1 className='font-Montserrat font-bold text-4xl md:text-5xl lg:text-5xl'>
                        We as a Team
                    </h1>
                    <p className='text-justify py-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis dicta vero fugiat delectus eius sequi rerum, in dolorem tempore quibusdam repudiandae non atque inventore qui a. In qui culpa non?
                        Ex, asperiores. Enim sequi quidem, saepe explicabo aut inventore ea maiores ducimus aliquam consectetur dolorem modi excepturi voluptates voluptatum illo sunt rerum consequuntur quos repellendus veniam eveniet atque tempora! Nulla?
                        Nemo excepturi eaque totam odio corrupti iusto nesciunt deserunt aperiam tenetur adipisci tempore sequi iure, ipsa, quis minima recusandae nostrum deleniti officia aut! Voluptatibus possimus ipsam expedita, mollitia dolore vero.Nemo excepturi eaque totam odio corrupti iusto nesciunt deserunt aperiam tenetur adipisci tempore sequi iure, ipsa, quis minima recusandae nostrum deleniti officia aut! Voluptatibus possimus ipsam expedita, mollitia dolore vero.
                    </p>
                </div>
                <div className="hidden lg:block">
                    <img src={img} alt="User Image" />
                </div>
            </div>
        </div>
    )
}

export default TeamHome