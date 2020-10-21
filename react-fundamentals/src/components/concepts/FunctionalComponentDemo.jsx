import React from "react";
import {
  Container,
  Row, Col,
  Card, CardImg,
  CardText, CardBody,
  CardTitle, CardSubtitle,
} from "reactstrap";

const FunctionalComponentDemo = () => {
  return (
    <Container className="main">
      <Row>
        <Col xs="12">
          <h1>Functional Component</h1>
          <p>Functional Components are the primary tool in React to build a small, modular piece of your page.</p>
          
          <dl>
            <dt>No "this" keyword</dt>
            <dd>Class components are deprecated although they may still turn up in Legacy React apps</dd>
            <dt>return()</dt>
            <dd>Each Component must return a single element. If the Component is comprised of multiple elements they must be wrapped in a parent element.</dd>
            <dt>Unidirectional flow</dt>
            <dd>Individual components are built and injected into parent elements, which themselves are injected into their parent elements. This keeps the flow of data from the smallest modules to the layout of the entire page.</dd>
          </dl>
        </Col>
      </Row>
      <h1>Functional Syntax vs Arrow Function</h1>
      <Row>
        <Col xs="6">
          <HelloWorld />
        </Col>
        <Col xs="6">
          <HelloWorldArrow />
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionalComponentDemo;

const HelloWorld = function() {
  return (
    <Card>
      <CardBody>
        <CardTitle>Normal Function</CardTitle>
        <CardSubtitle>HelloWorld = function() </CardSubtitle>
        </CardBody>
        <CardImg width="100%" src="https://miro.medium.com/max/700/1*dAwQkc-E0j1AcpdPeGznzg.png"></CardImg>
        <CardBody>
        <CardText>This card was created using normal functional syntax with the "function" keyword.</CardText>
      </CardBody>
    </Card>
  )
};

const HelloWorldArrow = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>Fat Arrow Function</CardTitle>
        <CardSubtitle>HelloWorldArrow = () =&gt; </CardSubtitle>
        </CardBody>
        <CardImg width="100%" src="https://4vector.com/i/free-vector-right-arrow-clip-art_113984_Right_Arrow_clip_art_hight.png"></CardImg>
        <CardBody>
        <CardText>This card was created using arrow notation.</CardText>
      </CardBody>
    </Card>
  )
};