import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import data from './movies.json'
function AllMovies() {
  return (
    <div style={{background:'lightblue'}}>
        <Container>
        <Row style={{textAlign:'center'}}>
            {data.map((mov)=>
            <Col  xs={6} md={3} lg={3} style={{marginTop:'2%',marginBottom:'2%'}}>
            <Card onClick={()=>window.location.href="/movies/"+mov.id}>
                    <a href={"/movies/"+mov.id}>
                    <Card.Img variant="top" src={mov.image} />
                    </a>
                    <Card.Body>
                        <Card.Title>{mov.title}</Card.Title>
                        <Card.Text>
                        {mov.acotr}    
                        </Card.Text>  
                    </Card.Body>
                </Card>
            </Col>    
            )}                         
        </Row>
</Container>
    </div>
    
  );
}

export default AllMovies;
