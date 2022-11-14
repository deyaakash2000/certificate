import React from "react";
// import "../css/Certificate.css";
import logo from "../img/logo.jpg";
export default function Certificatetemp(props) {
    const {iteam} =props
  return (
    <div>
       <h1>{iteam.title}</h1>
       <p>{iteam.email}</p>
    </div>
  );
}
