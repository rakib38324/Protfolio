import React from 'react';
import img1 from '../project/Screenshot 2022-12-10 220340.png'
import img2 from '../project/Screenshot 2022-12-10 220437.png'
import img3 from '../project/Screenshot 2022-12-10 220547.png'

const Project = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold mt-5'>My Projects</h1>
            <div>
                <div className='grid grid-cols-3 my-5'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img1} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">UpScale Resale</h2>
                            <p>MERN Stack</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img2} alt="" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">RTR Cloud Kitchen</h2>
                            <p>MERN Stack</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={img3} alt="" /></figure>
                        <div className="card-body">
                        <h2 className="card-title">10Minutes School</h2>
                            <p>MERN Stack</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;