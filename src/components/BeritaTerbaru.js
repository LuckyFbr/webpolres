import { Card, Container, Row, Col } from "react-bootstrap";
import berita1 from "../assets/herosection.JPG";
import icongrid from "../assets/icon/grid-alt.png";

const BeritaTerbaru = () => {
  return (
    <div className="BeritaLP">
      <Container className="sectionwrapperr">
        <div className="secjudul">
          <img src={icongrid}></img> Berita utama
        </div>
        <div className="box1"></div>
        <Row className="row-cols-lg-2 row-cols-md-1 row-cols-sm-1 g-4">
          <Col lg={6} className="mt-4 mb-4">
            <Card className="berita1">
              <Card.Img variant="Top" src={berita1} />
              <Card.Body>
                <Card.Text>17 September 2023</Card.Text>
                <Card.Title>
                  Berusaha Tabrak Petugas, 2 Spesialis Curanmor Di Lamtim
                  Ditangkap Polisi
                </Card.Title>
                <Card.Text>
                  LAMPUNG TIMUR - 2 orang sindikat pencurian kendaraan bermotor
                  (Curanmor), yang berupaya menabrak petugas kepolisian di
                  Lampung Timur, terpaksa dilumpuhkan dengan tindakan tegas dan
                  terukur, dibagian kakinya. Kapolres Lampung Timur AKBP M Rizal
                  Muchtar, didampingi Kasat Reskrim IPTU Johanes EP Sihombing,
                  pada Selasa (12/9), ......
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mt-4">
            <Row className="mb-4">
              <Col>
                <Card style={{ width: "635px", height: "205px" }}>
                  <Row>
                    <Col>
                      <Card.Img src={berita1} alt="berita1" />
                      <Card.Body></Card.Body>
                    </Col>
                    <Col>
                      <p className="mt-2">11 September 2023</p>
                      <Card.Title>
                        Nekat Melawan, Gembong Pencuri Sapi Di Lampung Timur
                        Terpaksa Diberikan Tindakan Tegas Terukur Oleh Polisi
                      </Card.Title>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Card style={{ width: "635px", height: "205px" }}>
                  <Row>
                    <Col>
                      <Card.Img src={berita1} alt="berita1" />
                      <Card.Body></Card.Body>
                    </Col>
                    <Col>
                      <p className="mt-2">11 September 2023</p>
                      <Card.Title>
                        Nekat Melawan, Gembong Pencuri Sapi Di Lampung Timur
                        Terpaksa Diberikan Tindakan Tegas Terukur Oleh Polisi
                      </Card.Title>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row className="mb-4">
              <Col>
                <Card style={{ width: "635px", height: "205px" }}>
                  <Row>
                    <Col>
                      <Card.Img src={berita1} alt="berita1" />
                      <Card.Body></Card.Body>
                    </Col>
                    <Col>
                      <p className="mt-2">11 September 2023</p>
                      <Card.Title>
                        Nekat Melawan, Gembong Pencuri Sapi Di Lampung Timur
                        Terpaksa Diberikan Tindakan Tegas Terukur Oleh Polisi
                      </Card.Title>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeritaTerbaru;
