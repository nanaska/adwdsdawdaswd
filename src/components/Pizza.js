import React from "react";
import "../App.css";
import Navbarmenu from "./Navbarmenu";
import ImageSlider2 from "./ImageSlider2";
import { SliderData2 } from "./SliderData2";
import Form from "./Form";

function Pizza() {
  return (
    <>
      <Navbarmenu />
      <ImageSlider2 slides={SliderData2} />
      <Form />
    </>
  );
}

export default Pizza;
