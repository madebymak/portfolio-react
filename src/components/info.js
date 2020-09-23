import React from 'react';
import { WikiWhere, ShopifyDemo, PieChart, Budget, HappyJournal, Tweetr } from './projects.js'
import './info.css';

const InfoSection = () => {
    return (
        <div className='row'>
            <div id='work' className='section work'>
                <div className='col-6 info-col'>
                    <span className='heading'>Projects.</span>
                    <ul className='project-list'>
                        <WikiWhere />
                        <ShopifyDemo />
                        <PieChart />
                        <Budget />
                        <HappyJournal />
                        <Tweetr />
                    </ul>
                </div>

                <div className='col-6 info-col'>
                    <span className='heading'>Contact.</span>
                    <ul className='project-list'>
                        <li><a href='mailto:mr.jmak@gmail.com' target='_blank' rel="noopener noreferrer">Email.</a></li>
                        <li><a href='https://www.dropbox.com/s/id74r4pz3lkshc2/jacky_mak_resume.pdf?dl=0' target='_blank' rel="noopener noreferrer">CV.</a></li>
                        <li><a href='https://github.com/madebymak' target='_blank' rel="noopener noreferrer">GitHub.</a></li>
                        <li><a href='https://www.linkedin.com/in/jacky-mak' target='_blank' rel="noopener noreferrer">LinkedIn.</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
