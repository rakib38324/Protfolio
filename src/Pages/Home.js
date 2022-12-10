import React from 'react';
import { FaDownload } from "react-icons/fa";
import img from '../../src/images/rakib.jpg'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {


    return (
        <div >

            {/* <div className='col-span-8'>
                    <h1>frontend Developer</h1>
            </div>

            <div>
                    <img className='w-full' src={img} alt="" />
            </div> */}

            <div className="hero bg-base-200">
                <div className="grid lg:grid-cols-12 p-4">

                    <div className='lg:col-span-8 m-6'>
                        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                            <span className='text-2xl lg:text-4xl font-bold'>Hi, I am <span className='font-bold'>MD. Aminul Islam Rakib</span> <br /> <>I am a </></span>{' '}

                            <span className='text-2xl lg:text-4xl' style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['MERN Stack Developer.', 'React Developer.', 'JavaScript Developer.', 'Front-end Developer.']}
                                    loop={100}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                
                                />
                            </span>

                        </h1>
                        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, dolorum corporis atque, officiis velit autem aperiam magnam iure quidem vel quo harum quos aspernatur veritatis nam porro officia distinctio illo?</p>



                        <button className="btn mt-9 bg-base-100 border-white text-black hover:bg-base-100"> <FaDownload> </FaDownload> <span className='pl-2'>Resume</span></button>


                    </div>

                    <div className='col-span-4'>
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;