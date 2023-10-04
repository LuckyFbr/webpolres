import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="bghero">
      <Container className="text-white">
        <Row>
          <Col>
            <div className="title">
              Selamat Datang Di Website Polres Lampung Timur
            </div>
            <div className="subtitle">Melindungi, Mengayomi, Melayani</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
