import "../App";
import "../components/Menu.css";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";
const api = axios.create({
  baseURL: `http://localhost:`,
});
require("dotenv").config({ path: "../../.env" });

function Form(props) {
  const [value, setvalue] = useState(null);
  const [value2, setvalue2] = useState(null);
  const [value3, setvalue3] = useState(null);
  const [getIp, setgetIp] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://geolocation-db.com/json/4c5c79b0-f162-11eb-bd83-53373d3682fb`
      )

      .then((data) => setgetIp(data.data));
  }, [getIp]);
  console.log(getIp);
  let coutry = getIp.country_name;
  let city = getIp.city;
  let ip = getIp.IPv4;
  const text = `Заказ: ${value},%0AНомер: ${value2}%0A Адресс :${value3}%0A-------------------------------%0A Cтрана:${coutry}%0A Город:${city}%0A Ip: ${ip}`;
  const fetchTelegram = () => {
    axios.post(
      `https://api.telegram.org/bot1920322493:AAF6JPW3jj8Remj9fJo0YNFYdn8gVGzJVKU/sendMessage?chat_id=-1001479871182&text=${text}`
    );
  };

  return (
    <>
      <div className="forma">
        <input
          className="form-control"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          value={value2}
          onChange={(e) => setvalue2(e.target.value)}
        />
        <br />
        <input
          className="form-control"
          type="text"
          value={value3}
          onChange={(e) => setvalue3(e.target.value)}
        />

        <button onClick={fetchTelegram} className="btn btn-success" id="submit">
          send
        </button>
      </div>
    </>
  );
}
export default Form;
