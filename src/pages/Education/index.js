import { Component } from "react";
import Menu from "../../components/Menu";

export default class Educations extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="body">
          <div className="judul">
            <h1 className="animate__animated animate__bounceInDown">
            Education
            </h1>
          </div>
          <div className="border">
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              2017 - 2020 <br/> SMKN 1 Lumajang - Desain Grafika 
            </p>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              2020 - sekarang <br/> Universitas Jember - Teknologi Informasi
            </p>
          </div>
        </div>
      </div>
    );
  }
}
