import { Accordion, Container } from "react-bootstrap";
import iconfaq from "../assets/icon/megaphone.png";

const Faq = () => {
  return (
    <div className="faqbackground">
      <Container className="sectionwrapper">
        <div className="secjudul">
          <img src={iconfaq}></img> FAQ
        </div>
        <div className="box4"></div>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="headerfaq">
              Bagaimana cara menyampaikan pengaduan masyarakat terkait dengan
              pelayanan publik di lingkungan Polres Lampung Timur?
            </Accordion.Header>
            <Accordion.Body>
              Pengaduan terhadap pelayanan publik di lingkungan Polres Lampung
              Timur dapat disampaikan melalui nomor Telepon (0725) 625113,
              Aplikasi Layanan Pengaduan dan Aspirasi Rakyat Online (LAPOR!)
              dengan cara: akses website www.lapor.go.id, menu LAPOR pada
              aplikasi BADAK BERJAYA Polres Lampung Timur bisa diunduh melalui
              playstore
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Bagaimana cara cara mengajukan permohonan surat kehilangan?
            </Accordion.Header>
            <Accordion.Body>
              Mengisi formulir secara online dapat dilakukan via web di
              app.polreslampungtimur.com atau download aplikasi BADAK BERJAYA
              POLRES LAMPUNG TIMUR di Google Play
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Bagaimana mekanisme SIM di Polres Lampung Timur?
            </Accordion.Header>
            <Accordion.Body>
              Mengisi formulir secara online dapat dilakukan via web di
              app.polreslampungtimur.com atau download aplikasi BADAK BERJAYA
              POLRES LAMPUNG TIMUR di Google Play
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Bagaimana mekanisme dan syarat pelayanan SKCK di Polres Lampung
              Timur?
            </Accordion.Header>
            <Accordion.Body>
              Mengisi formulir secara online dapat dilakukan via web di
              app.polreslampungtimur.com atau download aplikasi BADAK BERJAYA
              POLRES LAMPUNG TIMUR di Google Play
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
