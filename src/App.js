import './App.css';
import { Alert, Breadcrumb, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { use, useState } from 'react';

function App() {

 /*  const block = useState("Yellow")[0];
  const setBlock = useState("Yellow")[1];

  console.log(block);
  console.log(setBlock); */

  const [color, setColor] = useState("Red");
  const [number, setNumber] = useState();

  const changeNumber = () =>{
    setNumber(1*2)
  }


  const changeColor = ()=>{
    setColor("Yellow")
  }

  const buttonChange = ()=>{
    changeNumber();
    changeColor();
  }

  const [carbrand, setCarBrand] = useState("Tata");
  const [carModel, setCarModel] = useState("Punch Kaziranag Edition");
  const [carYear, setCarYear] = useState("2022");
  const [carColor, setCarColor] = useState("Bage Green");

  const [bike, setBike] = useState({
    bikeBrand: "KTM",
    bikeModel: "Adventure 390s",
    bikeColor: "KTM Organe",
    bikeYear: "2025"
  });
    /* let color = "Red";
    const changeColor = ()=>{
      color = "Yellow";
      //console.log(color);
    }  */
  //const [brand, setBrand] = useState('BMW')
  return (
    <div className="App">
      <header className="App-header">
        <Container >
        {/* <Form>
          <Row>
            <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='example@example.com'/>
            <Form.Text >We won't use this email{color}</Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'/>
          </Form.Group>
          </Col>
          </Row>
        </Form> */}
      <Card className='mb-3' style={{color:'GrayText'}}>
        {/* <Card.Img src='https://picsum.photos/500'/> */}
        <Card.Body>
          <Card.Title>This is test  </Card.Title>
          <Card.Text>This is test for number{number}</Card.Text>
          <Card.Text> My car brand is {carbrand}</Card.Text>
          <Card.Text>It is {carbrand} {carModel}</Card.Text>
          <Card.Text>It was manufactured in {carYear}</Card.Text>
          <Card.Text>The color of {carModel} is {carColor}</Card.Text>
          <Card.Text>My bike brand is {bike.bikeBrand}</Card.Text>
          <Card.Text>The model is {bike.bikeBrand} {bike.bikeModel} color of the bike is {bike.bikeColor} delivery starts from {bike.bikeYear}</Card.Text>
        </Card.Body>
      </Card>
      {/* <div>
      <Breadcrumb className='mb-3' style={ {colorAdjust :'unset', margin: 20}}>
        <Breadcrumb.Item>One</Breadcrumb.Item>
        <Breadcrumb.Item>Two</Breadcrumb.Item>
        <Breadcrumb.Item active>Three</Breadcrumb.Item>
        </Breadcrumb>
        </div> */}
        <Alert variant='primary'> This is a button {color}</Alert>
        <Button onClick= {buttonChange}variant='success'>Test Button</Button>
        <Button onClick= { ()=>{
          changeColor();
          changeNumber();
        }}  variant='success'>Multiple Test</Button> 
        </Container>
      </header>
    </div>
  );
}

export default App;
