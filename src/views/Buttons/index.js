import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Container, ModalFooter, Card, CardBody, CardHeader, NavItem, Nav, Badge, Button, TabContent, TabPane, NavLink, Col, Row, Table, Pagination, PaginationLink, PaginationItem, Modal, ModalHeader, ModalBody,} from 'reactstrap';
import { Pie, Line } from 'react-chartjs-2';
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips/dist/cjs/custom-tooltips";
import classnames from "classnames";
import swal from 'sweetalert2';
import axios from 'axios';
// import request from 'request';

const pie = {
  labels: [
    'Incendios por año!',
    "Yago Efectivas",
  ],
  datasets: [
    {
      data: [36, 18],
      backgroundColor: [
        'yellowgreen',
        'red',
      ],
      hoverBackgroundColor: [
        'lightgreen',
        'crimson',
      ],
    }],
};



const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};


class Buttons extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      selectedPlace: '',
      activeTab: '1',
      info: false,
      data: {},
      viewport: {
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      }
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.getData();
    }, 5000);
  }

  async getData() {
    const { data } = await axios.get('http://172.26.6.35/', { "headers": {
        "cache-control": "no-cache",
        "postman-token": "c20ab1d4-0070-3c11-51b3-0736a905be0a",
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
      }, });
    this.setState({ ...this.state, data })
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  async handleSubmit() {
    const result = await swal({
      title: 'Puedes atender esta emergencia?',
      text: "Sí no puedes, no aceptes!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ve a la dirección establecida!'
    });
    if (result.value) {
      swal(
        'Gracias!',
        'Estas en camino a salvar el hogar de alguien.',
        'success'
      )
    }
    this.props.history.push('/app/emergency')
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Container fluid>
          {/*<Row>*/}
            {/*<h3>Hey you</h3>*/}
            {/*<p>*/}
              {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam atque consectetur debitis eaque eius fugit impedit inventore ipsum iure iusto laboriosam minima nihil numquam placeat quae, quia reiciendis voluptates.*/}
            {/*</p>*/}
          {/*</Row>*/}
          <Row>
            <Col xs={9}>
              <img width="100%" height="100%" src={'https://directory.eoportal.org/documents/163813/3854799/S3A_senses_Earth_s_heat.gif'} />
            </Col>

            <Col xs={3}>
              <br/><br/>
              <Card className="">
                {/*<CardHeader>*/}
                  {/*DO YOU KNOW THAT 80% OF PEOPLE DON'T KNOW IF GOT <b>APNEA?</b>*/}
                  {/*<div className="card-header-actions">*/}
                    {/*<a href="http://www.chartjs.org" className="card-header-action">*/}
                      {/*<small className="text-muted">docs</small>*/}
                    {/*</a>*/}
                  {/*</div>*/}
                {/*</CardHeader>*/}
                <CardBody>
                  <div className="chart-wrapper">
                    <Pie data={pie} />
                  </div>
                </CardBody>
              </Card>

              <Card className="">
                {/*<CardHeader>*/}
                  {/*GET HEALTHY USING <b>APPNEA</b> IN DAYS*/}
                  {/*<div className="card-header-actions">*/}
                    {/*<a href="http://www.chartjs.org" className="card-header-action">*/}
                      {/*<small className="text-muted">docs</small>*/}
                    {/*</a>*/}
                  {/*</div>*/}
                {/*</CardHeader>*/}
                <CardBody>
                  <img width="100%" src={require('./../../assets/img/spaceapps/componente.jpg')} alt=""/>
                  <br /><br/>
                  <ul>
                    <li><b>{this.state.data.Humidity || 0.00}%</b> de Humedad</li>
                    <li><b>{this.state.data.TemperatureF || 0.00}</b> Grados F</li>
                    <li><b>{this.state.data.TemperatureC || 0.00}</b> Grados C</li>
                    <hr/>
                    <li><b>{this.state.data.Humo === '0' || this.state.data.Llama === '0' ? 'Si' : 'No'}</b>Hubo presencia de Humo o Fuego: </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <br/>
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader className="bg-dark">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      <i className="icon-basket-loaded"></i> <span
                      className={this.state.activeTab === '1' ? '' : 'd-none'}> </span>Alertas &nbsp;<Badge pill color="danger">29</Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      <i className="icon-pie-chart"></i> <span className={this.state.activeTab === '2' ? '' : 'd-none'}> </span> Registro de Incendios
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <Col xs="12" className="mb-4">
                  <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                      <Table hover bordered striped responsive size="sm" className="text-white">
                        <thead className="text-black-50">
                        <tr>
                          <th>Nombre</th>
                          <th>Fecha</th>
                          <th>Tipo</th>
                          <th>Pais</th>
                          <th>Zona Geografica</th>
                          <th>Status</th>
                          <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-red">
                          <td>Jose Alejandro Gomez Castro</td>
                          <td>2012/01/01</td>
                          <td>Ciudadano</td>
                          <td>California</td>
                          <td><b>lat:</b> 929892923.123 <b>lng:</b> 254589875.54</td>
                          <td></td>
                          <td className="text-center">
                            <Button className="bg-white" onClick={this.handleSubmit}>ATENDER</Button>
                          </td>
                        </tr>
                        <tr className="bg-red">
                          <td>Sensor #4</td>
                          <td>2012/02/01</td>
                          <td>Sensor</td>
                          <td>Costa Rica</td>
                          <td><b>lat:</b> 929892923.123 <b>lng:</b> 254589875.54</td>
                          <td></td>
                          <td className="text-center">
                            <Button className="bg-white" onClick={this.handleSubmit}>ATENDER</Button>
                          </td>
                        </tr>
                        <tr className="bg-cyan">
                          <td>Sensor #65</td>
                          <td>2012/02/01</td>
                          <td>Sensor</td>
                          <td>Costa Rica</td>
                          <td><b>lat:</b> 929892923.123 <b>lng:</b> 254589875.54</td>
                          <td className="text-center">
                            <i className="cui-circle-check icons font-2xl d-block mt-4"></i>
                            <br />
                          </td>
                          <th></th>
                        </tr>
                        <tr className="bg-cyan">
                          <td>Sensor #5</td>
                          <td>2012/03/01</td>
                          <td>Sensor</td>
                          <td>Costa Rica</td>
                          <td><b>lat:</b> 929892923.123 <b>lng:</b> 254589875.54</td>
                          <td className="text-center">
                            <i className="cui-circle-check icons font-2xl d-block mt-4"></i>
                            <br />
                          </td>
                          <th></th>
                        </tr>
                        <tr className="bg-cyan">
                          <td>Sensor #1</td>
                          <td>2012/01/21</td>
                          <td>Sensor</td>
                          <td>Francia</td>
                          <td><b>lat:</b> 929892923.123 <b>lng:</b> 254589875.54</td>
                          <td className="text-center">
                            <i className="cui-circle-check icons font-2xl d-block mt-4"></i>
                            <br />
                          </td>
                          <th></th>
                        </tr>
                        </tbody>
                      </Table>
                      <nav>
                        <Pagination>
                          <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                          <PaginationItem active>
                            <PaginationLink tag="button">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                        </Pagination>
                      </nav>
                    </TabPane>
                    <TabPane tabId="2">
                      <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                          <th>Username</th>
                          <th>Date registered</th>
                          <th>Role</th>
                          <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>Vishnu Serghei</td>
                          <td>2012/01/01</td>
                          <td>Member</td>
                          <td className="text-center">
                            <Button className="bg-cyan text-white" onClick={() => this.props.history.push('/app/results')}>VER</Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Zbyněk Phoibos</td>
                          <td>2012/02/01</td>
                          <td>Staff</td>
                          <td className="text-center">
                          <Button color="" onClick={this.toggleInfo} className="mr-1 bg-cyan text-white">HISTORIAL</Button>
                          <Modal isOpen={this.state.info} toggle={this.toggleInfo}
                                className={'modal-info ' + this.props.className}>
                            <ModalHeader toggle={this.toggleInfo}>Historial</ModalHeader>
                            <ModalBody>
                              <Table responsive>
                                  <thead>
                                  <tr>
                                    <th>Username</th>
                                    <th>Date registered</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td>Samppa Nori</td>
                                    <td>2012/01/01</td>
                                    <td>Member</td>
                                    <td>
                                      <Badge color="success">Active</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Estavan Lykos</td>
                                    <td>2012/02/01</td>
                                    <td>Staff</td>
                                    <td>
                                      <Badge color="danger">Banned</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Chetan Mohamed</td>
                                    <td>2012/02/01</td>
                                    <td>Admin</td>
                                    <td>
                                      <Badge color="secondary">Inactive</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Derick Maximinus</td>
                                    <td>2012/03/01</td>
                                    <td>Member</td>
                                    <td>
                                      <Badge color="warning">Pending</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Friderik Dávid</td>
                                    <td>2012/01/21</td>
                                    <td>Staff</td>
                                    <td>
                                      <Badge color="success">Active</Badge>
                                    </td>
                                  </tr>
                                  </tbody>
                                </Table>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={this.toggleInfo}>Do Something</Button>{' '}
                              <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
                            </ModalFooter>
                          </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>Einar Randall</td>
                          <td>2012/02/01</td>
                          <td>Admin</td>
                          <td className="text-center">
                            <Button className="bg-cyan text-white" onClick={() => this.props.history.push('/app/results')}>VER</Button>
                          </td>
                        </tr>
                        <tr>
                          <td>Félix Troels</td>
                          <td>2012/03/01</td>
                          <td>Member</td>
                          <td className="text-center">
                            <Button color="" onClick={this.toggleInfo} className="mr-1 bg-cyan text-white">HISTORIAL</Button>
                            <Modal isOpen={this.state.info} toggle={this.toggleInfo}
                                  className={'modal-info ' + this.props.className}>
                              <ModalHeader toggle={this.toggleInfo}>Modal title</ModalHeader>
                              <ModalBody>
                                <Table responsive>
                                  <thead>
                                  <tr>
                                    <th>Username</th>
                                    <th>Date registered</th>
                                    <th>Role</th>
                                    <th>Status</th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td>Samppa Nori</td>
                                    <td>2012/01/01</td>
                                    <td>Member</td>
                                    <td>
                                      <Badge color="success">Active</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Estavan Lykos</td>
                                    <td>2012/02/01</td>
                                    <td>Staff</td>
                                    <td>
                                      <Badge color="danger">Banned</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Chetan Mohamed</td>
                                    <td>2012/02/01</td>
                                    <td>Admin</td>
                                    <td>
                                      <Badge color="secondary">Inactive</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Derick Maximinus</td>
                                    <td>2012/03/01</td>
                                    <td>Member</td>
                                    <td>
                                      <Badge color="warning">Pending</Badge>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Friderik Dávid</td>
                                    <td>2012/01/21</td>
                                    <td>Staff</td>
                                    <td>
                                      <Badge color="success">Active</Badge>
                                    </td>
                                  </tr>
                                  </tbody>
                                </Table>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="primary" onClick={this.toggleInfo}>Do Something</Button>{' '}
                                <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
                              </ModalFooter>
                            </Modal>
                          </td>
                        </tr>
                        <tr>
                          <td>Aulus Agmundr</td>
                          <td>2012/01/21</td>
                          <td>Staff</td>
                          <td className="text-center">
                            <Button className="bg-cyan text-white" onClick={() => this.props.history.push('/app/results')}>VER</Button>
                          </td>
                        </tr>
                        </tbody>
                      </Table>
                      <nav>
                        <Pagination>
                          <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                          <PaginationItem active>
                            <PaginationLink tag="button">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                          <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                        </Pagination>
                      </nav>
                    </TabPane>
                  </TabContent>
                </Col>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBru3HHY7QV0vgUCx2S0OEfuVoTGwM9llg')
})(Buttons)
