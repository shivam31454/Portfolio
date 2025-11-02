// import React, { useState, useEffect } from "react";
// import { Container, Row, Button } from "react-bootstrap";
// import Particle from "../Particle";
// import pdf from "../../assets/ShivamResume.pdf";
// import { AiOutlineDownload } from "react-icons/ai";
// import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// function ResumeNew() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <Container fluid className="resume-section">
//       <Particle />
//       <Row style={{ justifyContent: "center", position: "relative" }}>
//         <Button
//           variant="primary"
//           href={pdf}
//           target="_blank"
//           style={{ maxWidth: "250px" }}
//         >
//           <AiOutlineDownload />
//           &nbsp;Download CV
//         </Button>
//       </Row>

//       <Row className="resume">
//         <Document file={pdf} className="d-flex justify-content-center">
//           <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
//         </Document>
//       </Row>

//       <Row style={{ justifyContent: "center", position: "relative" }}>
//         <Button
//           variant="primary"
//           href={pdf}
//           target="_blank"
//           style={{ maxWidth: "250px" }}
//         >
//           <AiOutlineDownload />
//           &nbsp;Download CV
//         </Button>
//       </Row>
//     </Container>
//   );
// }

// export default ResumeNew;

// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import { AiOutlineDownload } from "react-icons/ai";
// import Particle from "../Particle";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";

// function ResumeNew() {
//   const resumeLink = "/Shivam_Resume.pdf"; // Make sure this file is inside the public/ folder

//   return (
//     <Container fluid className="resume-section">
//       <Particle />
//       <Container className="text-center">
//         <Button
//           variant="primary"
//           href={resumeLink}
//           target="_blank"
//           style={{ maxWidth: "250px" }}
//         >
//           <AiOutlineDownload />
//           &nbsp;Download CV
//         </Button>

//         <div
//           style={{
//             height: "90vh",
//             marginTop: "20px",
//             border: "2px solid rgba(255,255,255,0.2)",
//             borderRadius: "12px",
//             overflow: "hidden",
//           }}
//         >
//           <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
//             <Viewer fileUrl={resumeLink} />
//           </Worker>
//         </div>

//         <Button
//           variant="primary"
//           href={resumeLink}
//           target="_blank"
//           style={{ maxWidth: "250px", marginTop: "20px" }}
//         >
//           <AiOutlineDownload />
//           &nbsp;Download CV
//         </Button>
//       </Container>
//     </Container>
//   );
// }

// export default ResumeNew;

import React from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function ResumeNew() {
  const resumeUrl = "/Shivam_Resume.pdf";
  const handleForceDownload = async () => {
    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) throw new Error("Failed to fetch resume file");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = "Shivam_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading the file:", error);
      alert("Unable to download resume. Please try again.");
    }
  };

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container className="text-center">
        <Button
          variant="primary"
          onClick={handleForceDownload}
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      
        <div
          style={{
            height: "90vh",
            marginTop: "20px",
            border: "2px solid rgba(255,255,255,0.2)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={resumeUrl} />
          </Worker>
        </div>

        <Button
          variant="primary"
          onClick={handleForceDownload}
          style={{ maxWidth: "250px", marginTop: "20px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Container>
    </Container>
  );
}

export default ResumeNew;
