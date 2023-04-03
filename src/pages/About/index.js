import { Component } from "react";
import Menu from "../../components/Menu";

export default class About extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="body">
            <p className="animate__animated animate__bounceInDown">Hi, Kenalin Saya</p>
            <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
              Laili Cahyani
            </h1>
            <h2 className="animate__animated animate__fadeInUp animate__delay-2s">
              Mahasiswi Universitas Jember
            </h2>
            <p className="animate__animated animate__fadeInUp animate__delay-3s">
            Saya tertarik dengan pemrograman front-end yang mengkhususkan diri dalam membangun situs website.
            Saat ini, saya mengikuti studi independent di PT Hacktivate Teknologi Indonesia, untuk belajar membangun website responsif menggunakan ReactJS
            </p>
        </div>
      </div>
    );
  }
}
