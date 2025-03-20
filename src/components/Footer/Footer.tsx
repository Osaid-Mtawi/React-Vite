import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-section py-4" style={{
      backgroundColor: 'rgb(1, 44, 100)',
      backgroundImage: 'linear-gradient(91.74deg, #0B5BA8 30.91%, #299BD8 100.98%)',
      backgroundPosition: 'center',
      position: 'relative',
    }}>
      <Container fluid className="px-md-5">
        <Row className="g-4 mt-4">
          <Col md={5} className="text-left">
            <h3 className="mb-3 text-white fw-bold">Fickle Flight</h3>
            <p className="text-white mb-0 fs-5">Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</p>
            <div className="text-left mt-3">
              <Button variant="link" className="text-white px-2 ps-0">
                <BsFacebook size={24} />
              </Button>
              <Button variant="link" className="text-white px-2">
                <BsTwitter size={24} />
              </Button>
              <Button variant="link" className="text-white px-2">
                <BsInstagram size={24} />
              </Button>
            </div>
          </Col>

          <Col md={7}>
            <Row>
              <Col md={4} className="text-left position-relative">
                <h5 className="mb-4 text-white fs-4">Company</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#" className="text-white px-0 fs-5">About Us</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">News</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">Careers</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">How we work</Nav.Link>
                </Nav>
                <div className="vr position-absolute end-0 top-0 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              </Col>

              <Col md={4} className="text-left position-relative">
                <h5 className="mb-4 text-white fs-4">Support</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#" className="text-white px-0 fs-5">Account</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">Support Center</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">FAQ</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">Accessibility</Nav.Link>
                </Nav>
                <div className="vr position-absolute end-0 top-0 h-100" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}></div>
              </Col>

              <Col md={4} className="text-left">
                <h5 className="mb-4 text-white fs-4">More</h5>
                <Nav className="flex-column">
                  <Nav.Link href="#" className="text-white px-0 fs-5">Covid Advisory</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">Airline Fees</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">Tips</Nav.Link>
                  <Nav.Link href="#" className="text-white px-0 fs-5">Quarantine Rules</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;