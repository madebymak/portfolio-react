import React from 'react';
import './info.css';

function InfoSection() {
    return (
        <div className='row'>
            <div id='work' className='section work'>
                <div className='col-6 info-col'>
                    <span className=''>Projects.</span>
                    <ul className='project-list'>
                        <li>WikiWhere.</li>
                        <li>Shopify Demo.</li>
                        <li>Pie Chart.</li>
                        <li>PSD to HTML.</li>
                        <li>Happy Journal.</li>
                        <li>Tweetr.</li>
                    </ul>
                </div>

                <div className='col-6 info-col'>
                    <span className=''>Contact.</span>
                    <ul className='project-list'>
                        <li><a href='' target='_blank'>Email.</a></li>
                        <li><a href='' target='_blank'>CV.</a></li>
                        <li><a href='' target='_blank'>GitHub.</a></li>
                        <li><a href='' target='_blank'>LinkedIn.</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
