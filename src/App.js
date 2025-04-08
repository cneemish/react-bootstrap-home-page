import './App.css';
import { Alert, Breadcrumb, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container >
        <Form>
          <Row>
            <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='example@example.com'/>
            <Form.Text className='text-muted'>We won't use this email</Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password'/>
          </Form.Group>
          </Col>
          </Row>
        </Form>
      <Card className='mb-3' style={{color:'GrayText'}}>
        <Card.Img src='https://picsum.photos/100'/>
        <Card.Body>
          <Card.Title>This is test  </Card.Title>
          <Card.Text>This is test Text</Card.Text>
        </Card.Body>
      </Card>
      <div>
      <Breadcrumb className='mb-3' style={ {colorAdjust :'unset', margin: 20}}>
        <Breadcrumb.Item>One</Breadcrumb.Item>
        <Breadcrumb.Item>Two</Breadcrumb.Item>
        <Breadcrumb.Item active>Three</Breadcrumb.Item>
        </Breadcrumb>
        </div>
        <Alert variant='primary'> This is a button</Alert>
        <Button variant='success'>Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
