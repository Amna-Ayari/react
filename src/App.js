import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     
      <Form>
      <h1>Registration</h1>
       <Form.Group controlId="formBasicName">
    <Form.Label className="nom">Full Name</Form.Label>
    <Form.Control type="name" placeholder="enter your name" />
       </Form.Group>

       <Form.Group controlId="formBasicUsername">
    <Form.Label  className="nom">Username</Form.Label>
    <Form.Control type="username" placeholder="enter your username" />
       </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label  className="nom">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPhon">
    <Form.Label  className="nom">Phone Number</Form.Label>
    <Form.Control type="number" placeholder="Number" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label  className="nom">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicConfirm">
    <Form.Label  className="nom">Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm your password" />
       </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
