import React from "react";

const Services = () => {
  return (
    <div
      className="container my-5 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "70vh", textAlign: "center" }}
    >
      <h1 className="display-4">Our Services</h1>
      <p className="lead">We offer a bunch of Services, some of which are:</p>
      <ul className="list-group">
        <li className="list-group-item">Web Development</li>
        <li className="list-group-item">Artificial Intelligence</li>
        <li className="list-group-item">Software Development</li>
        <li className="list-group-item">UI/UX Designing</li>
      </ul>
    </div>
  );
};

export default Services;
