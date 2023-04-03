import { Component } from "react";
import Menu from "../../components/Menu";

export default class Awards extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="body">
          <div className="judul">
            <h1 className="animate__animated animate__bounceInDown">
            Awards
            </h1>
          </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <ul className="award-list">
                <li>Android Developer - SIB 3</li>
                <li>Panitia Ilkom Creative Entrepreneur 2.0</li>
                <li>Anggota UKM-KI 2022/2023</li>
              </ul>
            </div>
        </div>
      </div>
    );
  }
}
