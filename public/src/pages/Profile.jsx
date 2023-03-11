import React, { useEffect, useState } from "react";
import logo from "../assets/logo-background.png";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { FaIndustry } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiTwotoneStar, AiOutlineStar } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import "./profile.css";
import Footer from "../components/Pawandi/Footer.jsx";
import { useParams } from "react-router-dom";

function Profile(props) {
  const [follow, setFollow] = useState(true);
  const [profileDetails, setProfileDetails] = useState({});
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [experiences, setExperiences] = useState([
    { role: "", companyName: "" },
  ]);
  const { user, techleadId } = useParams();
  console.log(techleadId);
  useEffect(() => {
    const app_url = "https://8080-eedbecaadafcdfcfbacaaadacabcdebacdacedf.project.examly.io";
    axios
      .get(`${app_url}/profile/techlead/${techleadId}`)
      .then((response) => {
        console.log(response.data[0]);
        setProfileDetails(response.data[0]);
      });

    axios
      .get(`${app_url}/profile/skills/${techleadId}`)
      .then((response) => {
        console.log(response.data);
        setSkills(response.data);
      });
    axios
      .get(`${app_url}/profile/education/${techleadId}`)
      .then((response) => {
        console.log(response.data);
        setEducation(response.data);
      });

    axios
      .get(`${app_url}/profile/experiences/${techleadId}`)
      .then((response) => {
        console.log(response.data);
        setExperiences(response.data);
      });

    axios
      .get(`${app_url}/profile/follow/${user}/${techleadId}`)
      .then((response) => {
        console.log(response.data.length);
        if (response.data.length !== 0) {
          setFollow(false);
        }
      });
  }, []);

  const handleFollow = () => {
    if (follow) {
      axios
        .post(`http://localhost:8080/profile/follow`, {
          user: user,
          techlead: techleadId,
        })
        .then((response) => {
          setFollow(!follow);
        });
    } else {
      axios
        .post(`http://localhost:8080/profile/unfollow`, {
          user: user,
          techlead: techleadId,
        })
        .then((response) => {
          console.log(response);
          setFollow(!follow);
        });
    }
  };
  return (
    <div className="style2">
      <div className="style container overflowAuto py-5">
        {/* <div className="row">
          <div className="col">
            <nav className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">User</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav>
          </div>
        </div> */}

        <div className="row">
          <div className="col-lg-4">
            <div className="card shadow mb-4">
              <div className="card-body text-center">
                <img
                  src={profileDetails.profilePicture}
                  alt="profile"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">
                  {profileDetails.firstName + " " + profileDetails.lastName}
                </h5>
                {/* <p className="text-muted mb-1">{experiences[0].role}</p> */}
                <p className="text-muted mb-4">{profileDetails.country}</p>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleFollow}
                  >
                    {follow ? "Follow" : "Unfollow"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-1"
                  >
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
                    {/* <p className="mb-0">{experiences[0].companyName}</p> */}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <FaIndustry />
                    <p className="mb-0">IT Industry</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card shadow mt-4 mb-4">
              <div className="card-body">
                <h5>Skills </h5>
                <hr />
                {skills.map((skill) => {
                  let stars = [];

                  for (let i = 0; i < skill.rate; i++) {
                    stars.push(<AiTwotoneStar id={i} />);
                  }
                  for (let i = 0; i < 5 - skill.rate; i++) {
                    stars.push(<AiOutlineStar id={5 - i} />);
                  }

                  return (
                    <div className="row">
                      <div className="col-6">
                        <a
                          href="#"
                          className="list-group-item list-group-item-action"
                        >
                          {skill.name}
                        </a>
                      </div>
                      <div className="col-6 mb-2">{stars}</div>
                      <hr />
                    </div>
                  );
                })}
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
                    <p className="text-muted mb-0">
                      {" "}
                      {profileDetails.firstName + " " + profileDetails.lastName}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{profileDetails.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Location</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{profileDetails.country}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card shadow mb-4">
              <div className="card-body">
                <h5>Bio </h5>
                <hr />
                <p>{profileDetails.bio}</p>
              </div>
            </div>
            <div className="card shadow mb-4">
              <div className="card-body">
                <h5>Education </h5>
                <hr />
                {education.map((edu) => {
                  return (
                    <>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <GoPrimitiveDot className="mt-2" />

                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{edu.instituteName}</div>
                          <div>{edu.qualificationName}</div>
                          <div className="fw-lighter">
                            {edu.start + " - " + edu.end}
                          </div>
                        </div>
                      </li>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-body">
                <h5>Experiences </h5>
                <hr />
                {experiences.map((exp) => {
                  return (
                    <>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <GoPrimitiveDot className="mt-2" />

                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{exp.companyName}</div>
                          <div>{exp.role}</div>
                          <div className="fw-lighter">
                            {exp.end
                              ? exp.start + " - " + exp.end
                              : exp.start + " - current"}
                          </div>
                          <div className="fw-lighter">{exp.country}</div>
                        </div>
                      </li>
                      <hr />
                    </>
                  );
                })}
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

      <Footer />
    </div>
  );
}

export default Profile;
