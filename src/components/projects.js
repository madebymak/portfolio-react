import React, { useState } from 'react';
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const WikiWhere = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>WikiWhere.</button></li>
            <Modal className='modal' isOpen={modalIsOpen}>
                <div className='modal-inner'>
                    <div>
                        <span className='modal-heading'>WikiWhere.</span>
                        <button className='close-btn' onClick={() => setModalIsOpen(false) }>
                    <FontAwesomeIcon className='' icon={faTimes} size='1x' />
                </button>
                    </div>
                    <div className='img-box'>
                        <img className='responsive-img' src='/assets/wiki_where.png' alt='' />
                    </div>
                    <div>
                        <p>A web app game where a player guesses the location of a major city based on snippets of information from Wikipedia. Stacks used were React, Cesium, WebPack, Material-UI, Babel and Node.js.</p>
                        <p><a href='https://github.com/madebymak/wiki_where' target='_blank' rel='noopener noreferrer'>Source</a> | <a href='https://wiki-where.github.io/' target='_blank' rel='noopener noreferrer'>Demo</a></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const ShopifyDemo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>Shopify Demo.</button></li>
            <Modal className='modal' isOpen={modalIsOpen}>
                <div className='modal-inner'>
                    <div>
                        <span className='modal-heading'>Shopify Demo.</span>
                        <button className='close-btn' onClick={() => setModalIsOpen(false) }>
                    <FontAwesomeIcon className='' icon={faTimes} size='1x' />
                </button>
                    </div>
                    <div className='img-box'>
                        <img className='responsive-img' src='/assets/wiki_where.png' alt='' />
                    </div>
                    <div>
                        <p>A mock ecommerce store for a snowboard company. Built using Shopify's Liquid and Ruby on Rails.</p>
                        <p><a href='https://github.com/madebymak/shopify-mock-store' target='_blank' rel='noopener noreferrer'>Source</a> | <a href='https://jmak-test.myshopify.com/' target='_blank' rel='noopener noreferrer'>Demo</a></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const PieChart = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>Pie Chart Demo.</button></li>
            <Modal className='modal' isOpen={modalIsOpen}>
                <div className='modal-inner'>
                    <div>
                        <span className='modal-heading'>Pie Chart Demo.</span>
                        <button className='close-btn' onClick={() => setModalIsOpen(false) }>
                    <FontAwesomeIcon className='' icon={faTimes} size='1x' />
                </button>
                    </div>
                    <div className='img-box'>
                        <img className='responsive-img' src='/assets/wiki_where.png' alt='' />
                    </div>
                    <div>
                        <p>An animated interactive pie chart that randomizes each slices. Built using the D3.js javascript library.</p>
                        <p><a href='https://github.com/madebymak/d3-project' target='_blank' rel='noopener noreferrer'>Source</a> | <a href='http://bl.ocks.org/madebymak/raw/b5d4e735be73e71f41b4dbb88485a9fa/' target='_blank' rel='noopener noreferrer'>Demo</a></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const Budget = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>PSD to HTML.</button></li>
            <Modal className='modal' isOpen={modalIsOpen}>
                <div className='modal-inner'>
                    <div>
                        <span className='modal-heading'>PSD to HTML.</span>
                        <button className='close-btn' onClick={() => setModalIsOpen(false) }>
                    <FontAwesomeIcon className='' icon={faTimes} size='1x' />
                </button>
                    </div>
                    <div className='img-box'>
                        <img className='responsive-img' src='/assets/wiki_where.png' alt='' />
                    </div>
                    <div>
                        <p>A responsive PSD to HTML project built with Twitter's Bootstrap and HTML/CSS.</p>
                        <p><a href='https://github.com/madebymak/budget-for-training' target='_blank' rel='noopener noreferrer'>Source</a> | <a href='https://madebymak.github.io/budget-for-training/' target='_blank' rel='noopener noreferrer'>Demo</a></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const HappyJournal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>Happy Journal.</button></li>
            <Modal className='modal' isOpen={modalIsOpen}>
                <div className='modal-inner'>
                    <div>
                        <span className='modal-heading'>Happy Journal.</span>
                        <button className='close-btn' onClick={() => setModalIsOpen(false) }>
                    <FontAwesomeIcon className='' icon={faTimes} size='1x' />
                </button>
                    </div>
                    <div className='img-box'>
                        <img className='responsive-img' src='/assets/wiki_where.png' alt='' />
                    </div>
                    <div>
                        <p>A journal entry app that ranks entries based on a user submitted sentiment score. Stacks used were React, NodeJS, ExpressJS and RethinkDB.</p>
                        <p><a href='https://github.com/madebymak/react-rethinkdb-journal-2' target='_blank' rel='noopener noreferrer'>Source</a></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

const Tweetr = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>Tweetr.</button></li>
            <Modal className='modal' isOpen={modalIsOpen}>
                <div className='modal-inner'>
                    <div>
                        <span className='modal-heading'>Tweetr.</span>
                        <button className='close-btn' onClick={() => setModalIsOpen(false) }>
                    <FontAwesomeIcon className='' icon={faTimes} size='1x' />
                </button>
                    </div>
                    <div className='img-box'>
                        <img className='responsive-img' src='/assets/wiki_where.png' alt='' />
                    </div>
                    <div>
                        <p>A simple single-page AJAX-based Twitter clone. Stacks used were ES6 (client side JS), jQuery (Ajax), CSS3, HTML5, Git for version control and mongoDB for database.</p>
                        <p><a href='https://github.com/madebymak/tweetr' target='_blank' rel='noopener noreferrer'>Source</a></p>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export { WikiWhere, ShopifyDemo, PieChart, Budget, HappyJournal, Tweetr }