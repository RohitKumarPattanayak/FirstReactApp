import Button from "react-bootstrap/Button";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
function Footer() {
  return (
    <div style={{background:'black',color:'white'}}>
      <Container>
            <Row style={{padding:'1%'}}>
                <Col xs={2}>1</Col>
                <Col xs={4}>2</Col>
                <Col xs={6} style={{display:'flex',flexDirection:'row-reverse'}}><Button>Contact Today</Button></Col>
            </Row>
            <Row style={{background:'lightgrey', textAlign:'center',padding:'1%',margin:'0%'}}>
                <Col>11</Col>
                <Col>22</Col>
                <Col>33</Col>
            </Row>
      </Container>
    </div>
  );
}

export default Footer;
