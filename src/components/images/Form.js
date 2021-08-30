import "../App";
import "../components/Menu.css";
import React, { Component, useState } from "react";
import GetIp from "./GetIp";

require("dotenv").config({ path: "../../.env" });

class Form extends Component {
  state = {
    text: "",
    number: "",
    adress: "",
  };
  handleIp = GetIp.prototype;
  handleAdd = async (e) => {
    await this.setState({
      text: e.target.value,
    });
  };
  handleAdd2 = async (e) => {
    await this.setState({
      number: e.target.value,
    });
  };
  handleAdd3 = async (e) => {
    await this.setState({
      adress: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let api = process.env.REACT_APP_API;
    let chatId = process.env.REACT_APP_CHAT;
    let text = this.state.text;
    let number = this.state.number;
    let adress = this.state.adress;
    console.log(process.env);
    let TEXT = `ЗАКАЗ: ${text},НОМЕР: ${number},АДРЕСС: ${adress} `;
    let url = `https://api.telegram.org/bot${api}/sendMessage?chat_id=${chatId}&text=ЗАКАЗ: ${text},%0AНОМЕР: ${number},%0AАДРЕСС: ${adress}&parse_mode=html `;
    let formData = new FormData();
    formData.append("text", this.state.text);
    fetch(url);
  };
  render() {
    const { items, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="forma">
        <input
          onChange={this.handleAdd}
          className="form-control"
          type="text"
          id="text"
          placeholder="Введите что вы хотите"
          autocomplete="off"
        />
        <br />
        <input
          onChange={this.handleAdd2}
          className="form-control"
          type="text"
          id="text"
          placeholder="Ваш номер"
          autocomplete="off"
        />
        <br />
        <input
          onChange={this.handleAdd3}
          className="form-control"
          type="text"
          id="text"
          placeholder="Адресс"
          required
          autocomplete="off"
        />

        <button
          onClick={this.handleSubmit}
          className="btn btn-success"
          id="submit"
        >
          send
        </button>
      </div>
    );
  }
}

export default Form;
