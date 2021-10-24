import {useState ,useEffect} from 'react'
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const axios = require('axios');


function SingleMov() {
    const [data, setData] = useState([]);
    useEffect(async() => {
      try {  
        const response = await axios.get('http://localhost:5000/movies');
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }, [])
    const {movid} = useParams()
    console.log("parameter is :",movid)
    console.log("type of the parameter",typeof(movid))
  return (
    <div style={{background:'lightblue',display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        <Container>
        <Row style={{textAlign:'center'}}>
            {data.map((mov)=>{
                console.log("Id's within the dtabse :",mov._id)
                
            if(mov._id==movid) {
                console.log("im within the database z:",mov._id)
                console.log("ha ha")
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
            }
            )}
                                
        </Row>
</Container>
        
    </div>
    
  );
}

export default SingleMov;
