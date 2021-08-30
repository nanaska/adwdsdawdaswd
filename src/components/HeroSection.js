import React from "react";
import { useState } from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { Link as Nazdad } from "react-router-dom";
import Navbar from "./Navbar";
import Karta from "../4.png";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { render } from "@testing-library/react";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  const [back, setback] = useState(1);
  const [aboba, setAboba] = useState(false);
  const [abobab, setAbobab] = useState(false);

  const [abobaba, setAbobaba] = useState(false);
  let classes = "a" + back;

  const vhac = () => {
    if ((classes = "a6")) {
      vhac = "a1";
    } else if ((classes = "a0")) {
      vhac = "a5";
    } else {
      vhac = classes;
    }
  };
  const changeTitle = () => {
    if (window.pageYOffset >= 600) {
      setAboba(true);
    } else {
    }
  };
  const changeTitle2 = () => {
    if (window.pageYOffset >= 1300) {
      setAbobab(true);
    } else {
    }
  };
  const changeTitle3 = () => {
    if (window.pageYOffset >= 2000) {
      setAbobaba(true);
    } else {
    }
  };
  window.addEventListener("scroll", changeTitle);
  window.addEventListener("scroll", changeTitle2);
  window.addEventListener("scroll", changeTitle3);

  return (
    <>
      <Navbar />

      <div
        id="jol"
        className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="jola" className="two-section">
        <div className="containertwosection">
          <div className={aboba ? "titletwo active" : "titletwo"}>
            О ресторане
          </div>
          <div className={aboba ? "opisanietwo active" : "opisanietwo"}>
            Запоминающийся интерьер, панорамные окна, уютная и теплая атмосфера,
            <br />
            качественная музыка, самая вкусная кухня, демократичные цены,
            <br />
            приветливый персонал. Все у нас поможет вам отлично провести время
            <br />
            со своими близкими.
          </div>
        </div>
      </div>
      <div id="jolaa" className={classes}>
        <div className={abobab ? "title active container" : "title container"}>
          <div>Меню</div>
          <div className="knopka">
            <Nazdad to="/menu">
              <button className="buttonknopka">Роллы</button>
            </Nazdad>
          </div>
          <div className="knopka2">
            <Nazdad to="/pizza">
              <button className="buttonknopka2">Пицца</button>
            </Nazdad>
          </div>
          <div className="knopka3">
            <Nazdad to="/menubarnoe">
              <button className="buttonknopka2">Барное-Меню</button>
            </Nazdad>
          </div>
          <div>
            <FaArrowAltCircleLeft
              className="buttonmenu2"
              onClick={() => setback(back - 1)}
            >
              назад
            </FaArrowAltCircleLeft>
            <FaArrowAltCircleRight
              className="buttonmenu1"
              onClick={() => setback(back + 1)}
            >
              вперед
            </FaArrowAltCircleRight>
          </div>
        </div>
      </div>
      <div id="jolaaaa" className="сontacti ">
        <div className="containertwosection">
          <div className={abobaba ? "titletwo active" : "titletwo"}>
            Тц «Императрица»
          </div>
          <div className={abobaba ? "opisanietwo active" : "opisanietwo"}>
            Адрес: Карла Маркса, 373333333
            <br /> Время работы: С 9:00 - До 23:00(пн-вс)
            <br />{" "}
            <a href="tel:89943112312" className="naaavaa">
              Телефон: +7-961-022-0220
            </a>
            <br /> Доставка: С 10:00 - До 22:00(пн-вс)
          </div>
        </div>
      </div>
      <div className="karta">
        <a href="https://yandex.ru/maps/-/CCUiJ0rPdC">
          <img src={Karta} className="img1" />
        </a>
      </div>
    </>
  );
}

export default HeroSection;
