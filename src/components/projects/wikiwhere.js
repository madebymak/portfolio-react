import React, { useState } from 'react';
import Modal from 'react-modal'

const WikiWhere = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <>
            <li><button onClick={() => setModalIsOpen(true)}>WikiWhere.</button></li>
            <Modal isOpen={modalIsOpen}>
                <h2> testing 123</h2>
                <p>body 123</p>
                <button onClick={() => setModalIsOpen(false) }>Close</button>
            </Modal>
        </>
    )
}

export default WikiWhere