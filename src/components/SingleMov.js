import {useState ,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SingleData from './movies.json'
import { useParams } from 'react-router';
const axios = require('axios');

function SingleMov() {
    const {movid} = useParams()
    const [SingleData, setData] = useState([]);
    useEffect(async() => {
      try {  
        const response = await axios.get(`http://localhost:5000/movies/${movid}`);
        console.log(response);
        setData([response.data]);
      } catch (error) {
        console.error(error);
      }
    }, [])
    
    console.log("parameter is :",movid)
    console.log("type of the parameter",typeof(movid))
  return (
    <div style={{background:'lightblue',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <Container>
        <Row style={{textAlign:'center'}}>
            {SingleData.map((mov)=>{            
             return (<Col xs={12} md={3} lg={3} style={{marginTop:'2%',marginBottom:'2%',background:'yellow'}}>
                    <Card >
                    <Card.Img variant="top" src={mov.image} />
                    <Card.Body>
                        <Card.Title>{mov.title}</Card.Title>
                        <Card.Text>
                        {mov.acotr}                    
                        </Card.Text>  
                    </Card.Body>
                </Card>
            </Col>)    
            
            }
            )}
                                
        </Row>
</Container>
        
    </div>
    
  );
}

export default SingleMov;
