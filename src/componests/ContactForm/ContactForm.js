import React from 'react';
import formBg from '../../assets/form-bg.png';

const bgForm = {
    backgroundImage:`url(${formBg})`,
    backgroundReapet:'no-reapet',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}

const ContactForm = () => {
    return (
        <div style={bgForm} className="card shadow-2xl text-white">
            <div className='px-10 pt-10'>
                <h3 className='text-2xl font-bold mb-3'>Drop us a message</h3>
                <p>We would love to hear everything from you</p>
            </div>
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Contact Number</span>
                    </label>
                    <input type="number" placeholder="contact number" className="input input-bordered" />
            
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Subject</span>
                    </label>
                    <input type="text" placeholder="subject" className="input input-bordered" />
            
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Your message</span>
                    </label> 
                    <textarea className="textarea textarea-bordered h-24" placeholder="message"></textarea>
                </div>

                <div className="form-control w-56 mt-6">
                <button className="btn btn-dark">Send</button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;