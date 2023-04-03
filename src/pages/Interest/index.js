import { Component } from "react";
import Mobile from "../../assets/mobile.png";
import Web from "../../assets/website.jpg";
import Desain from "../../assets/multimedia.jpg";
import Menu from "../../components/Menu";

export default class Interest extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="body">
          <div className="judul">
            <h1 className="animate__animated animate__bounceInDown">
              Interest
            </h1>
          </div>
          <div className="flex">
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              Mobile Development
              <img
                className="mt-4"
                src={Mobile}
                alt=""
                height="190"
                width="250"
              />
            </p>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              Web Development
              <img
                className="mt-4"
                src={Web}
                alt=""
                height="190"
                width="250"
              />
            </p>
            <p className="animate__animated animate__fadeInUp animate__delay-3s">
              Desain Grafis
              <img
                className="mt-4"
                src={Desain}
                alt=""
                height="190"
                width="250"
              />
            </p>
          </div>

          
        </div>
      </div>
    );
  }
}
