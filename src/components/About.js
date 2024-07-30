import React from "react";

const About = () => {
  return (
    <div
      className="container my-5 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "70vh", textAlign: "center" }}
    >
      <h1 className="display-4">About Us</h1>
      <p className="lead">Your company's story and mission go here.</p>
      <p>
        We are committed to delivering the best service to our clients. Our team
        consists of experienced professionals who are passionate about their
        work.
      </p>
    </div>
  );
};

export default About;
