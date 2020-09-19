import React from 'react';
import './welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

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
                        <a href='#work'>
                            <FontAwesomeIcon className='arrow-color arrow-animate' icon={faArrowDown} size='4x' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Greet
