import { Container, Row, Col, Button } from "react-bootstrap";
import iconlayanan from "../assets/icon/layanan.png";
import GambarBadak from "../assets/badakberjaya.png";
import googleplay from "../assets/googleplay.png";

const LayananUtama = () => {
  return (
    <div className="layananutama">
      <Container className="sectionwrapper">
        <div className="secjudul">
          <img src={iconlayanan}></img> Layanan Utama
        </div>
        <div className="box2"></div>
        <Row className="row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 g-4">
          <Col lg={6}>
            <div className="headlineBD">BADAK BERJAYA</div>
            <br></br>
            <span className="kontenBD">
              Badak berjaya merupakan sistem informasi dan pelayanan
              administrasi kepolisi secara online milik Polres Lampung Timur.
              Aplikasi ini mempunyai fitur pelayanan SIM dan SKCK, Survey, Dumas
              Presisi, Kritik, Saran dan Pertanyaan, Pelaporan Masyarakat, dan
              terdapat panic button yang tertaun dengan nomor darurat
              polisi.Anda dapat mengakses melalui website atau mendownload
              aplikasi BADAK BERJAYA melalui playstore
            </span>
            <div className="buttonwraper">
              <Button variant="light" className="button">
                website
              </Button>{" "}
              <Button variant="link">
                <img src={googleplay} className="googleplay"></img>
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img src={GambarBadak} className="Badakimages"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LayananUtama;
