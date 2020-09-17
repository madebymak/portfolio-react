import React from 'react';
import './welcome.css';

function Greet() {
    return (
        <div className='row'>
            <div className='section main'>
                <div className='flex'>
                    <div className='col-4'>
                        <img className='profile-circle zoomIn' src='/assets/profile.jpg' alt='' />
                    </div>
                    <div className='col-8 intro slideInRight'>
                        <h1>Hi there,<br /> My name is Jacky and I am a <span className='blue-text'>web developer</span>.</h1>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 arrow slideInUp'>
                        {/* TODO: install fontawesome for react */}
                        <a href='#work'>arrow icon<i className='arrow-color arrow-animate fa fa-arrow-down fa-2x' aria-hidden='true'></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greet
