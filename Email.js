import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Modal, Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function GmailLayout() {
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [formData, setFormData] = useState({ to: "", subject: "", message: "" });
  const nav = useNavigate(); // ✅ FIXED: Now correctly calling useNavigate()

  const handleComposeChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.to || !formData.subject || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    const mailtoLink = `mailto:${formData.to}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;

    toast.success("Email is being composed!");
    setShowComposeModal(false);
    nav("/"); // ✅ FIXED: `useNavigate` is now working correctly
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={3} className="bg-light vh-100 p-3">
          <h5>📧 Gmail Clone</h5>
          <Button variant="primary" className="w-100 mb-3" onClick={() => setShowComposeModal(true)}>
            + Compose
          </Button>
          <ListGroup>
            <ListGroup.Item action>Inbox</ListGroup.Item>
            <ListGroup.Item action>Sent</ListGroup.Item>
            <ListGroup.Item action>Drafts</ListGroup.Item>
            <ListGroup.Item action>Spam</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={9} className="p-3">
          <h4>Welcome to the Gmail Clone</h4>
          <p>Click "Compose" to send an email.</p>
        </Col>
      </Row>

      {/* Compose Email Modal */}
      <Modal show={showComposeModal} onHide={() => setShowComposeModal(false)} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>📩 Compose Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Label>To</Form.Label>
              <Form.Control
                type="email"
                name="to"
                value={formData.to}
                onChange={handleComposeChange}
                required
                placeholder="Enter recipient email"
                className="p-2"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleComposeChange}
                required
                placeholder="Enter subject"
                className="p-2"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleComposeChange}
                required
                placeholder="Type your message..."
                className="p-2"
              />
            </Form.Group>
            <div className="text-end">
              <Button variant="secondary" className="me-2" onClick={() => setShowComposeModal(false)}>
                Cancel
              </Button>
              <Button type="submit" className="btn-success px-4">
                Send
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}
