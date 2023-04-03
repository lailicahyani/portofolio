import { Component } from "react";
import Menu from "../../components/Menu";

export default class Experiance extends Component {
  render() {
    return (
      <div className="main">
        <Menu />
        <div className="body">
          <div className="judul">
            <h1 className="animate__animated animate__bounceInDown">
              Experiance
            </h1>
          </div>
          <div className="border">
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              Tim Project Aplikasi Mobile - Aplikasi Laundry <br/> Untuk memenuhi tugas mata kuliah di kampus
            </p>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              Studi Independent Bersertifikat 3 - Hacktiv8 <br/> Android Java For Mobile Development
            </p>
          </div>
        </div>
      </div>
    );
  }
}
