import React, { useEffect, useState } from "react";
import logo from "../assets/logo-background.png";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { FaIndustry } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";

function Home() {
  const [follow, setFollow] = useState(true);
  useEffect(() => {}, []);

  const handleFollow = () => {
    setFollow(!follow);
  };
  return (
    <div className="container overflowAuto py-5">
      {/* <div className="row">
      <div className="col">
        <nav  className="bg-light rounded-3 p-3 mb-4">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">User Profile</li>
          </ol>
        </nav>
      </div>
    </div> */}

      <div className="row">
        <div className="col-lg-4">
          <div className="card shadow mb-4">
            <div className="card-body text-center">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: 150 }}
              />
              <h5 className="my-3">Diana</h5>
              <p className="text-muted mb-1">Full Stack Developer</p>
              <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
              <div className="d-flex justify-content-center mb-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFollow}
                >
                  {follow ? "Follow" : "Unfollow"}
                </button>
                <button type="button" className="btn btn-outline-primary ms-1">
                  Message
                </button>
              </div>
            </div>
          </div>
          <div className="card shadow mb-4 mb-lg-0">
            <div className="card-body p-0">
              <ul className="list-group list-group-flush rounded-3">
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <BsFillBuildingsFill />
                  <p className="mb-0">WSO2</p>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                  <FaIndustry />
                  <p className="mb-0">IT Industry</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Diana</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">example@example.com</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <p className="mb-0">Location</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-body">
              <h5>BIO </h5>
              <hr />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
            </div>
          </div>
          <div className="card shadow mb-4">
            <div className="card-body">
              <h5>SKILLS </h5>
              <hr />
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  Cras justo odio
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Dapibus ac facilisis in
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Morbi leo risus
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  Porta ac consectetur ac
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action disabled"
                >
                  Vestibulum at eros
                </a>
              </div>
            </div>
          </div>
          {/* <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: "0.77rem" }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "72%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      Backend API
                    </p>
                    <div
                      className="progress rounded mb-2"
                      style={{ height: 5 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "66%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4 mb-md-0">
                  <div className="card-body">
                    <p className="mb-4">
                      <span className="text-primary font-italic me-1">
                        assigment
                      </span>{" "}
                      Project Status
                    </p>
                    <p className="mb-1" style={{ fontSize: "0.77rem" }}>
                      Web Design
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: " 80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: " 72%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      One Page
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: " 89%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: " 55%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                      Backend API
                    </p>
                    <div
                      className="progress rounded mb-2"
                      style={{ height: 5 }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: " 66%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
