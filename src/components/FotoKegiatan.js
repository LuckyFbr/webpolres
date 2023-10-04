import { Container, Row, Col } from "react-bootstrap";
import galeri1 from "../assets/galeri1.jpg";
import galeri2 from "../assets/galeri2.jpg";
import galeri3 from "../assets/galeri3.jpg";
import galeri4 from "../assets/galeri4.jpg";
import galeri5 from "../assets/galeri5.jpg";
import galeri6 from "../assets/galeri6.jpg";
import galeri7 from "../assets/galeri7.jpg";
import galeri8 from "../assets/galeri8.jpg";
import icongaleri from "../assets/icon/picture.png";

const FotoKegiatan = () => {
  return (
    <div className="galeri min-vh-100">
      <Container className="sectionwrapper">
        <div className="secjudul">
          <img src={icongaleri}></img> Galeri Kegiatan
        </div>
        <div className="box3"></div>
        <Row className="row-cols-lg-4 row-cols md-4 row-cols-sm-2 row-cols-2 g-4">
          <Col>
            <img
              src={galeri1}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
          <Col>
            <img
              src={galeri2}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
          <Col>
            <img
              src={galeri3}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
          <Col>
            <img
              src={galeri4}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
          <Col>
            <img
              src={galeri5}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
          <Col>
            <img
              src={galeri6}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
          <Col>
            <img
              src={galeri7}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
          <Col>
            <img
              src={galeri8}
              alt="polreslamtim.com"
              className="w-100 h-100"
            ></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FotoKegiatan;
