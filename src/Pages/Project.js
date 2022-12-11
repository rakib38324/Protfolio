import React from 'react';
import img1 from '../project/Screenshot 2022-12-10 220340.png'
import img2 from '../project/Screenshot 2022-12-10 220437.png'
import img3 from '../project/Screenshot 2022-12-10 220547.png'

const Project = () => {
    return (
        <div className='sm:p-2'>
            <h1 className='text-4xl font-bold mt-5 text-center'>My Projects</h1>
            <div>
                <div className='grid lg:grid-cols-3 my-5 gap-4 sm:m-5'>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                        <figure><img className='w-full' src={img1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">UpScale Resale</h2>
                            <p>MERN Stack</p>
                            <div className="card-actions grid lg:grid-cols-3 sm:grid-cols-1 sm:w-full">
                                <a href="https://upsacle-resale.web.app/" target="_blank"><button to='hello' className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">Live site</button></a>
                                <a href="https://github.com/rakib38324/UpScale_Resale_Client" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">Client site</button></a>
                                <a href="https://github.com/rakib38324/UpScale_Resale_Server" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">server site</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                        <figure><img className='w-full' src={img2} alt="" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">RTR Cloud Kitchen</h2>
                            <p>MERN Stack</p>
                            <div className="card-actions grid lg:grid-cols-3 sm:grid-cols-1 sm:w-full">
                                <a href="https://rtr-cloud-kitchen-7e6be.web.app/" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">Live site</button></a>
                                <a href="https://github.com/rakib38324/RTR_Cloude_Kitchen_Client" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">Client site</button></a>
                                <a href="https://github.com/rakib38324/RTR_Cloude_Kitchen_Server" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">server site</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                        <figure><img className='w-full' src={img3} alt="" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">10Minutes School</h2>
                            <p>MERN Stack</p>
                            <div className="card-actions grid lg:grid-cols-3 sm:grid-cols-1 sm:w-full">
                                <a href="https://minute-school-75c90.web.app/" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">Live site</button></a>
                                <a href="https://github.com/rakib38324/10_Minute_School_Client" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">Client site</button></a>
                                <a href="https://github.com/rakib38324/10_Minute_School_Server" target="_blank"><button className="btn btn-sm bg-base-300 border-white text-black hover:bg-base-100">server site</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;