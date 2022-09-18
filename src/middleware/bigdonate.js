import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BigDonate = ({show,fullscreen,setShow}) => {


    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    


  return (
    // {values.map((v, idx) => (
    //     <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
    //       Full screen
    //       {typeof v === 'string' && `below ${v.split('-')[0]}`}
    //     </Button>
    //   ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
  )
}

export default BigDonate;