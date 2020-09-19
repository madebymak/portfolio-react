import React from 'react';
import './info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function InfoSection() {
    return (
        <div className='row'>
            <div id='work' className='section work'>
                <div className='col-6 info-col'>
                    <span className=''>Projects.</span>
                    <ul className='project-list'>
                        <li>Project 1.</li>
                        <li>Project 2</li>
                        <li>Project 3</li>
                        <li>Project 4</li>
                        <li>Project 5</li>
                        <li>Project 6</li>
                    </ul>
                </div>

                <div className='col-6 info-col'>
                    <span className=''>Contact.</span>
                    <ul className='project-list'>
                        <li>Contact 1</li>
                        <li>Contact 2</li>
                        <li>Contact 3</li>
                        <li>Contact 4</li>
                        <li>Contact 5</li>
                        <li>Contact 6</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
