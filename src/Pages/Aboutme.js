import React from 'react';
import img1 from '../images/images/expressjs.jpg'
import img2 from '../images/images/Learn-Reactjs.jpeg'
import img3 from '../images/images/mongodb.png'
import img4 from '../images/images/nodejs_cover_photo_smaller_size.png'
import img5 from '../images/images/tailwindui-small@75.8bb955b2.jpg'
import img6 from '../images/images/what-is-javascript.jpg'

const Aboutme = () => {
    return (
        <div id='project' className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" lg:w-1/2">
                    <h1 className="text-4xl font-bold">About Me</h1>
                    <p className="py-6">Hello, I am MD. Aminul Islam Rakib. I am student of Computer Science and Engineering Student on Daffodil International University. I want make me a successful Web Developer.</p>
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="text-4xl font-bold mb-2 text-center">My Skill</h1>
                    <div className='grid lg:grid-cols-3'>
                        <div>
                            <img src={img6} alt="Image 1" className=" p-2 rounded-lg" />
                        </div>
                        <div>
                            <img src={img4} alt="Image 1" className=" p-2 rounded-lg" />
                        </div>
                        <div>
                            <img src={img2} alt="Image 1" className=" p-2 rounded-lg" />
                        </div>
                        <div>
                            <img src={img3} alt="Image 1" className=" p-2 rounded-lg" />
                        </div>
                        <div>
                            <img src={img1} alt="Image 1" className=" p-2 rounded-lg" />
                        </div>
                        <div>
                            <img src={img5} alt="Image 1" className=" p-2 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;