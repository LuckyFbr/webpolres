import { Col, Container, NavLink, Row } from "react-bootstrap";
import iconpolres from "../assets/LogoPolres.png";
const Footer = () => {
  return (
    <div className="footerbackground">
      <Container className="footerwrapper">
        <Row>
          <Col lg={6}>
            <Row className="logofooterwrapper">
              <Col lg={1}>
                <div>
                  <img
                    alt=""
                    src={iconpolres}
                    width="50"
                    height="40"
                    className="d-inline-block align-top"
                  />{" "}
                </div>
              </Col>
              <Col lg={6}>
                <h2>POLRES LAMTIM</h2>
              </Col>
            </Row>
            <br></br>
            <div>
              Jalan Letnan Adnan Sanjaya No.09, Terbanggi Marga, Kec. Sukadana,
              Kabupaten Lampung Timur, Lampung 34394
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.185378176704!2d105.52297791064234!3d-5.07368309488187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4090e0eb07c2d7%3A0x2f7a36e5e34bd0c8!2sPolres%20Lampung%20Timur!5e0!3m2!1sid!2sid!4v1696329443463!5m2!1sid!2sid"
              width="450"
              height="150"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg={2}>
            <div className="footnav">Profil</div>
            <br></br>
            <NavLink>Sejarah</NavLink>
            <br></br>
            <NavLink>Visi Misi</NavLink>
            <br></br>
            <NavLink>Struktur Organisasi</NavLink>
            <br></br>
            <NavLink>Deretan Kapolres</NavLink>
          </Col>
          <Col lg={2}>
            <div className="footnav">Layanan</div>
            <br></br>
            <NavLink>SIM</NavLink>
            <br></br>
            <NavLink>SKCK</NavLink>
            <br></br>
            <NavLink>Tilang</NavLink>
            <br></br>
            <NavLink>Badak Berjaya</NavLink>
            <br></br>
            <NavLink>SP2HP</NavLink>
          </Col>
          <Col lg={2}>
            <div className="footnav">Berita</div>
            <br></br>
            <NavLink>Kriminal</NavLink>
            <br></br>
            <NavLink>Narkoba</NavLink>
            <br></br>
            <NavLink>Sosial</NavLink>
            <br></br>
            <NavLink>Penghargaan</NavLink>
            <br></br>
            <NavLink>Hukuman</NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
