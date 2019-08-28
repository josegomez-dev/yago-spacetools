import React, { Component } from 'react';
import { Table, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips/dist/cjs/custom-tooltips";
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import axios from "axios/index";

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}


function DataRow(props) {
  const row = props.data;
  return (
    <tr key="asdasdas">
      {/*<td><a href={userLink}>{user.name}</a></td>*/}
      <td>{moment.weekdays(row.day)}</td>
      <td>{row.cantApneas}</td>
      <td>{getStateByApneas(row.cantApneas)}</td>
    </tr>
  )
}

const getStateByApneas = (cantApneas) => {
  if (cantApneas >= 5 && cantApneas < 15) {
    return 'Leve';
  } else if (cantApneas > 15 && cantApneas < 30) {
    return 'Moderado';
  } else if (cantApneas > 30) {
    return 'Severo';
  }
};


const dataRecords = [
  { day: 0, cantApneas: 20 },
  { day: 1, cantApneas: 5 },
  { day: 2, cantApneas: 75 },
  { day: 3, cantApneas: 0 },
  { day: 4, cantApneas: 0 },
  { day: 5, cantApneas: 50 },
  { day: 6, cantApneas: 0 }
];

const bar = {
  labels: moment.weekdays(),
  datasets: [
    {
      label: 'Cantidad de episodios de APNEA',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [
        dataRecords[0].cantApneas,
        dataRecords[1].cantApneas,
        dataRecords[2].cantApneas,
        dataRecords[3].cantApneas,
        dataRecords[4].cantApneas,
        dataRecords[5].cantApneas,
        dataRecords[6].cantApneas
      ]
    },
  ],
};

class Jumbotrons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mqtt: []
    };
  }

  componentDidMount() {
    axios.get(`https://hwthon18.herokuapp.com/kapokwa10`).then(res => {
      this.setState({ mqtt: res.data });
    });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12">
            <Card className="bg-dark">
              <CardHeader>
                Ciclo del sueño
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar data={bar} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Datos de la Semana<small className="text-muted"></small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                  <tr>
                    <th scope="col">Dia</th>
                    <th scope="col">Ep. Apneas</th>
                    <th scope="col">Gravedad</th>
                  </tr>
                  </thead>
                  <tbody>
                  {dataRecords.map((row, index) =>
                    <DataRow key={index} data={row}/>
                  )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Jumbotrons;
