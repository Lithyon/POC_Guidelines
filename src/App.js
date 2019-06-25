import React, { Component } from 'react';
import { client } from './connectDirectus';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './components/Post';

class App extends Component {

  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await client.getItems("posts");
    this.setState({ data: response.data });
  }

  render() {
    console.log(this.state.data)
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {' React Bootstrap'}
          </Navbar.Brand>
        </Navbar>

        <Container>
          <Row className="my-5">
            {this.state.data.map(el => (
              <Col key={el.id}><Post {...el} key={el.id}></Post></Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(App);
