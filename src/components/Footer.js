import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function ContainerOutsideExample() {
  return (
      <Navbar style={{position: 'absolute', bottom: '0', width: '100%'}} expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Footer</Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default ContainerOutsideExample;