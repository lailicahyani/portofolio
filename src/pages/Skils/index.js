import { Component } from "react";
import Menu from "../../components/Menu";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import Corel from "../../assets/corel.png";
import Android from "../../assets/android.png";
import Figma from "../../assets/figma.png";
import GitHub from "../../assets/github.png";

export default class Skills extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="body">
        <div className="judul">
            <h1 className="animate__animated animate__bounceInDown">
              Skills
            </h1>
          </div>
          <div className="container">
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <img 
                className="gbr" 
                src={HTML} 
                alt=""
                height="190"
                width="190" />
              <p className="mt-4">HTML</p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <img 
                className="gbr" 
                src={CSS} 
                alt="" 
                height="190"
                width="180"/>
              <p className="mt-4">CSS</p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <img 
                className="gbr" 
                src={Corel} 
                alt=""
                height="190"
                width="190" />
              <p className="mt-4">Corel</p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <img 
                className="gbr" 
                src={Android} 
                alt=""
                height="190"
                width="190" />
              <p className="mt-4">Android</p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <img 
                className="gbr" 
                src={Figma} 
                alt=""
                height="190"
                width="190" />
              <p className="mt-4">Figma</p>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <img 
                className="gbr" 
                src={GitHub} 
                alt="" 
                height="190"
                width="190"/>
              <p className="mt-4">GITHUB</p>
            </div>


            {/* <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <p>Language</p>
              <ul className="skill-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Node</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <p>Framework</p>
              <ul className="skill-list">
                <li>React and React Native</li>
                <li>Next Js</li>
                <li>Tailwind Css</li>
                <li>Boostrap</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <p>DataBase</p>
              <ul className="skill-list">
                <li>MYSQL</li>
                <li>MongoDB</li>
                <li>Sequelize</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}
