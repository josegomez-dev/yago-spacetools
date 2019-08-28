import React, { Component } from 'react';
import { Card, CardBody, Col, Row, Container, Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';
import { GoogleApiWrapper } from 'google-maps-react';
import swal from 'sweetalert2'

class Users extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      selectedPlace: '',
      modal: false,
    }
  }

  async clickHandler(e) {
    e.preventDefault();
    const result = await swal({
      title: 'Has terminado tu labor?',
      text: "Trata de completar el siguiente formulario con la información más acertada.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Muchas gracias por su labor!'
    });
    if (result.value) {
      swal(
        'Gracias!',
        'Su labor y valentía se agradecen.',
        'success'
      )
    }
    setTimeout(() => this.props.history.push('/app/results'), 1500)
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container fluid>
          <Row>
            <Col xs={8} lg={12} style={{margin: '0px, auto'}}>
              <iframe title="video-opening" width="100%" height="615" src="https://www.youtube.com/embed/xWwlNuN_W0U?autoplay=1&showinfo=0&controls=0" frameBorder="0" allow="autoplay; encrypted-media" auto="true" allowFullScreen></iframe>
            </Col>
          </Row>
        </Container>
        {/*<Container>*/}
          {/*<Card>*/}
            {/*<CardBody>*/}
              {/*<Row className="text-center hover-data-highlight">*/}
                {/*<Col xs={2}>*/}
                  {/*<span style={{ width: '15%' }}><i className="fa fa-fire icons font-2xl d-block mt-4"></i> Epicentro</span>*/}
                {/*</Col>*/}
                {/*<Col xs={2}>*/}
                  {/*<span style={{ width: '15%' }}><i className="fa fa-users icons font-2xl d-block mt-4"></i> Ubicar unidades</span>*/}
                {/*</Col>*/}
                {/*<Col xs={2}>*/}
                  {/*<span style={{ width: '15%' }}><i className="fa fa-fire-extinguisher icons font-2xl d-block mt-4"></i> Fuego controlado</span>*/}
                {/*</Col>*/}
                {/*<Col xs={2}>*/}
                  {/*<span style={{ width: '15%' }}><i className="fa fa-exclamation-triangle icons font-2xl d-block mt-4"></i> Zona restringida</span>*/}
                {/*</Col>*/}
                {/*<Col xs={2}>*/}
                  {/*<span style={{ width: '15%' }}><i className="fa fa-check-square icons font-2xl d-block mt-4"></i> Zona Seguridad</span>*/}
                {/*</Col>*/}
                {/*<Col xs={2}>*/}
                  {/*<span style={{ width: '15%' }}><i className="fa fa-road icons font-2xl d-block mt-4"></i> Rutas de escape</span>*/}
                {/*</Col>*/}
              {/*</Row>*/}
            {/*</CardBody>*/}
          {/*</Card>*/}
        {/*</Container>*/}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <br/><br/><br/>
        {/*<div onClick={() => {*/}

        {/*}} className="sonar-wrapper">*/}
          {/*<div className="sonar-emitter">*/}
            {/*<div className="sonar-wave"></div>*/}
          {/*</div>*/}
        {/*</div>*/}
        <Container>
          <Row>
            <Col xs={12}>
              <div className="center">
                <input onClick={this.clickHandler} type="checkbox" name="" />
              </div>
            </Col>
          </Row>
        </Container>
        <br/><br/><br/>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBru3HHY7QV0vgUCx2S0OEfuVoTGwM9llg')
})(Users);
