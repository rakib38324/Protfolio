import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactme = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qg9difq', 'template_s321n0p', form.current, 'sBDOXzE5rZJM8v5YL')
      .then((result) => {
          console.log(result.text);
          console.log('email send')
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className="hero bg-base-200 my-5 rounded-lg p-5">
            <div className="lg:w-3/4">
                <h1 className='text-4xl text-center my-4 font-bold'>Contact</h1>
                <form ref={form} onSubmit={sendEmail} className="card flex-shrink-0  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name='user_name' type="text" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='user_email' type="email" placeholder="Your Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Message</span>
                            </label>
                            <textarea name='message' className="textarea textarea-bordered" placeholder="Your message"></textarea>
                           
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contactme;