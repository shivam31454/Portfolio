
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// TODO: After uploading your project images, import them here:
import parkingImg from "../../Assets/Projects/parking.png"; // Parking Management System
import swasthyaImg from "../../Assets/Projects/swasthya.png"; // Swasthya Vedha
import driveImg from "../../Assets/Projects/drive.png"; // Drive Project
import chatImg from "../../Assets/Projects/chat.png"; // Real-time Chatting App

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the major projects I’ve built recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* 1️⃣ Parking Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkingImg}
              title="Parking Management System"
              description="A web-based system that automates parking slot booking, entry management, and payment tracking for both users and administrators. Built using React, Node.js, Express, and MongoDB for real-time availability updates."
              ghLink="https://github.com/yourusername/parking-management-system" // TODO: Replace with your actual GitHub repo
              demoLink="https://your-demo-link.com" // TODO: Replace with live demo link if deployed
            />
          </Col>

          {/* 2️⃣ Swasthya Vedha */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swasthyaImg}
              title="Swasthya Vedha"
              description="A healthcare platform that provides medical record management, appointment booking, and disease prediction using ML models. Designed with a focus on accessibility and user-friendly UI using React and Flask backend."
              ghLink="https://github.com/yourusername/swasthya-vedha" // TODO: Replace with your actual GitHub repo
              demoLink="https://your-demo-link.com" // TODO: Replace with live demo link
            />
          </Col>

          {/* 3️⃣ Drive */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={driveImg}
              title="Drive"
              description="A secure file storage and sharing web app similar to Google Drive, built with React, Firebase, and Cloud Storage. Allows uploading, viewing, sharing, and deleting files with authentication and access control."
              ghLink="https://github.com/yourusername/drive" // TODO: Replace with your GitHub repo
              demoLink="https://your-demo-link.com" // TODO: Replace with live demo link
            />
          </Col>

          {/* 4️⃣ Real-time Chatting App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatImg}
              title="Real-time Chatting App"
              description="A real-time chat application built using React, Node.js, Socket.io, and MongoDB. Supports private and group chats, typing indicators, message notifications, and user authentication for a seamless messaging experience."
              ghLink="https://github.com/yourusername/realtime-chat-app" // TODO: Replace with your GitHub repo
              demoLink="https://your-demo-link.com" // TODO: Replace with live demo link
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
