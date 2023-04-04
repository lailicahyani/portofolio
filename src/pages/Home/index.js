import { Component } from "react";
import Menu from "../../components/Menu";

export default class Home extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="home">
            <p className="animate__animated animate__bounceInDown">Online Portofolio </p>
            <h1 className="animate__animated animate__fadeInUp animate__delay-1s">
              RCTN-KS07-007
            </h1>
            <h2 className="animate__animated animate__fadeInUp animate__delay-2s">
              React Native - Hacktiv8
            </h2>
        </div>
      </div>
    );
  }
}
