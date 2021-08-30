import React from "react";
import "../App.css";
import Navbarmenu from "./Navbarmenu";
import ImageSlider3 from "./ImageSlider3";
import { SliderData3 } from "./SliderData3";
import Form from "./Form";

function Menubarnoe() {
  return (
    <>
      <Navbarmenu />
      <ImageSlider3 slides={SliderData3} />
      <Form />
    </>
  );
}

export default Menubarnoe;
