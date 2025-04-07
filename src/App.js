import logo from './logo.svg';
import './App.css';
import { Alert, Breadcrumb, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card className='mb-3' style={{color:'GrayText'}}>
        <Card.Img src='https://picsum.photos/200'/>
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
      
      </header>
    </div>
  );
}

export default App;
