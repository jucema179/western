import { Image, Button, Col, Container, Modal } from 'react-bootstrap';
import React, { Component } from 'react';
import ContactForm from './contactForm'
import './css/styles.css';

export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Body className="p-5">
          <ContactForm />
        </Modal.Body>
      </Modal>
    );
}

