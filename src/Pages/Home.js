import React from 'react';
import { FaDownload, FaLinkedin, FaFacebookSquare, FaWhatsappSquare,FaGithubSquare } from "react-icons/fa";
import img from '../../src/images/rakib.jpg'
import { Typewriter } from 'react-simple-typewriter'


const Home = () => {


    return (
        <div >



            <div className="hero bg-base-200">
                <div className="lg:grid lg:grid-cols-12 p-4">

                    <div className='sm:pt-2 lg:col-span-8 lg:m-6'>
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

                        <div>
                            
                            <a href="https://www.linkedin.com/in/aminulislamrakib3832/" target="_blank"><button className='text-4xl mt-4'><FaLinkedin></FaLinkedin></button></a>
                            <a href="https://wa.link/01dmbn" target="_blank"><button className='text-4xl mt-4'><FaWhatsappSquare></FaWhatsappSquare></button></a>
                            <a href="https://www.facebook.com/Rakib3832" target="_blank"><button className='text-4xl mt-4'><FaFacebookSquare></FaFacebookSquare></button></a>
                            <a href="https://github.com/rakib38324" target="_blank"><button className='text-4xl mt-4'><FaGithubSquare></FaGithubSquare></button></a>
                        </div>

                    </div>

                    <div className='col-span-4 pt-2'>
                        <img src={img} className="sm:w-4/3 lg:max-w-sm rounded-lg shadow-2xl" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;