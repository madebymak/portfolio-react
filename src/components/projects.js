import React, { useState } from 'react';
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const WikiWhere = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>WikiWhere.</button></li>
            <Modal className='modal' isOpen={modalIsOpen}>
                <div className=''>
                    <div>
                        <h2>WikiWhere</h2>
                    </div>
                    <div className='img-box'>
                        <img className='responsive-img' src='' alt='' />
                    </div>
                    <div>
                        <p>A web app game where a player guesses the location of a major city based on snippets of information from Wikipedia. Stacks used were React, Cesium, WebPack, Material-UI, Babel and Node.js. </p>
                        <p><a href='https://github.com/madebymak/wiki_where' target='_blank' rel='noopener noreferrer'>Source</a> | <a href='https://wiki-where.github.io/' target='_blank' rel='noopener noreferrer'>Demo</a></p>
                    </div>
                </div>
                <button className='close-btn' onClick={() => setModalIsOpen(false) }>
                    <FontAwesomeIcon className='' icon={faTimes} size='' />
                </button>
            </Modal>
        </>
    )
}

const ShopifyDemo = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>Shopify Demo.</button></li>
            <Modal className='' isOpen={modalIsOpen}>
                <h2>Shopify Demo</h2>
                <p>body 123</p>
                <button onClick={() => setModalIsOpen(false) }>Close</button>
            </Modal>
        </>
    )
}

export { WikiWhere, ShopifyDemo } 