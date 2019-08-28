import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Pie, Radar, Line } from 'react-chartjs-2';
import { Card, CardBody, Col, Row, Badge,
  Button,
  Container,
  ButtonDropdown,
  CardFooter,
  CardHeader,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from 'reactstrap';



class Dash extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlace: ''
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container fluid>
          <Row>
            <Col xs="12" lg="5">
              <Card>
                <CardHeader>
                  <strong>Reporte</strong>
                </CardHeader>
                <CardBody>
                  <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">ID del oficial a cargo: </Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="#120312" disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">Nombre del oficial al mando: </Label>
                      </Col>
                      <Col xs="12" md="5">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="Jose Alejandro Gomez Castro" disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">Tiempo de control: </Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="Jose Alejandro Gomez Castro" disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">Estación de bomberos: </Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="Alajuela | Sector Grecia" disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="5">
                        <Label htmlFor="disabled-input">Intensidad del Fuego: </Label>
                      </Col>
                      <Col xs="12" md="7" lg="4">
                        <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                          <option>Seleccione</option>
                          <option value="clase_1">Leve</option>
                          <option value="clase_4">Medio</option>
                          <option value="clase_5">Grave</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col xs="12" md="5">
                        <Label>Tipo de Fuego: </Label>
                      </Col>
                      <Col xs="12" md="7" lg="4">
                        <Input type="select" name="selectSm" id="SelectLm" bsSize="sm">
                          <option>Seleccione</option>
                          <option value="clase_1">Clase 1</option>
                          <option value="clase_2">Clase 2</option>
                          <option value="clase_3">Clase 3</option>
                          <option value="clase_4">Clase 4</option>
                          <option value="clase_5">Clase 5</option>
                        </Input>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">Perdidas mortales: </Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="Si | 3" disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">Detalle de la causa: </Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="1h: 50m 30s" disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">Daños en el habitad: </Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="85% daños en el habitad" disabled />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="4">
                        <Label htmlFor="disabled-input">Hallazgos de la exploración: </Label>
                      </Col>
                      <Col xs="12" md="8">
                        <Input type="text" id="disabled-input" name="disabled-input" placeholder="1h: 50m 30s" disabled />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Button block color="primary" onClick={() => this.props.history.push('/app/board')} className="btn-pill">Enviar</Button>
              <br/>
            </Col>
            <Col xs="12" lg="7" style={{margin: '0px, auto'}}>
              <img src={require('./../../assets/img/spaceapps/multi-spectro-cam.png')} width="100%" height="70%" alt=""/>
              <br/><br/>
              <Row>
                <Col xs={4}>
                  <h3>Zonas mas afectadas</h3>
                </Col>
                <Col xs={4}>
                  <h3>Informacion adicional</h3>
                </Col>
                <Col xs={4}>
                  <h3>Detalle de accion</h3>
                </Col>
              </Row>

              <hr/>
              <Row>
                <Col xs={4}>
                  <p>Parque Nacional Cahuita</p>
                  <p>Reserva Biologica Bosque Nuboso Monteverde</p>
                </Col>
                <Col xs={4}>
                  <p>Las temperaturas van desde los <b>30</b> hasta los <b>45</b> grados</p>
                </Col>
                <Col xs={4}>
                  <p>Se cerco la zona mas afectada con material no flamable y se ubico estrategicamente las unidades de bomberos que atenderian la emergencia. </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBru3HHY7QV0vgUCx2S0OEfuVoTGwM9llg')
})(Dash);

