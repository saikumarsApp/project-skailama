import Navbar from "../Navbar";
import Model from "react-modal";
import { useState } from "react";

import "./index.css";

import { FaPlusCircle } from "react-icons/fa";

const Login = () => {
  const [visible, setvisible] = useState(false);

  return (
    <>
      <div className="login-main-container">
        <Navbar />
        <div className="login-details-card">
          <h1 className="login-heading">Create New Project</h1>
          <img
            alt="group"
            className="login-image"
            src="https://res.cloudinary.com/donrnsveu/image/upload/v1717868759/freepik-image_xbfwsc.jpg"
          />
          <p className="login-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <button
            type="button"
            className="new-project-button"
            onClick={() => setvisible(true)}
          >
            <FaPlusCircle className="icon-style" />
            <p className="button-text">Create New Project</p>
          </button>
          <Model
            isOpen={visible}
            onRequestClose={() => setvisible(false)}
            style={{
              content: {
                width: "600px",
                height: "200px",
                marginLeft: "400px",
                marginTop: "170px",
                padding: "20px",
                border: "0.1px solid #838383",
                borderRadius: "10px",
              },
            }}
          >
            <h1>Create Project</h1>
            <form type="form" className="model-container">
              <lable id="project">Enter Project Name:</lable>
              <input className="input-element" placeholder="Type here" />
            </form>
            <button
              className="cancel-button-style"
              type="button"
              onClick={() => setvisible(false)}
            >
              Cancel
            </button>
            <button
              className="cancel-button-style create-button"
              type="button"
              onClick={() => setvisible(false)}
            >
              Create
            </button>
          </Model>
        </div>
      </div>
    </>
  );
};
export default Login;
