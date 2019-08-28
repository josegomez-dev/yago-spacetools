import React, { Component } from 'react';
import { Col, Row, Button } from 'reactstrap';
// import Widget01 from './Widget01';
// import Widget02 from './Widget02';
// import Widget03 from './Widget03';
import Widget04 from './Widget04';

const getRandomValue = (_MAX, _byWhat) => {
  return `${(Math.floor(Math.random() * _MAX) + _byWhat)}`
};

// Brand Card Chart
// const makeSocialBoxData = (dataSetNo) => {
//   const socialBoxData = [
//     { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
//     { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
//     { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
//     { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
//   ];
//
//   const dataset = socialBoxData[dataSetNo];
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         backgroundColor: 'rgba(255,255,255,.1)',
//         borderColor: 'rgba(255,255,255,.55)',
//         pointHoverBackgroundColor: '#fff',
//         borderWidth: 2,
//         data: dataset.data,
//         label: dataset.label,
//       },
//     ],
//   };
//   return () => data;
// };
//
// const socialChartOpts = {
//   responsive: true,
//   maintainAspectRatio: false,
//   legend: {
//     display: false,
//   },
//   scales: {
//     xAxes: [
//       {
//         display: false,
//       }],
//     yAxes: [
//       {
//         display: false,
//       }],
//   },
//   elements: {
//     point: {
//       radius: 0,
//       hitRadius: 10,
//       hoverRadius: 4,
//       hoverBorderWidth: 3,
//     },
//   },
// };

const initialState = {
  _BPM: '65',
  _EKGR: '70.22',
  _CANT: '12',
  activePrototype: false,
  seeMore: false
};

let interval = null;


class Widgets extends Component {
  constructor(props) {
    super(props);
    this.startRandomData = this.startRandomData.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleSeeMoreChange = this.handleSeeMoreChange.bind(this);

    this.state = initialState;
  }

  startRandomData() {
    interval = setInterval(() => {
      this.setState({
        _BPM: getRandomValue(100, 10),
        _EKGR: getRandomValue(100, 10),
        _CANT: getRandomValue(100, 10)
      });
    }, 500);
  }

  handleStartChange(event) {
    event.preventDefault();
    if (!event.target.checked) {
      window.clearInterval(interval);
      this.setState({
        _BPM: '',
        _EKGR: '',
        _CANT: '',
        activePrototype: false
      });
    } else {
      this.startRandomData();
      this.setState({ activePrototype: true });
    }
  }

  handleSeeMoreChange(event) {
    event.preventDefault();
    this.setState({ seeMore: !this.state.seeMore });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12" xs="12" md="12" className="text-center">
            <p>Evitamos <span style={{ fontWeight: '1000', fontSize: '20px;' }}>{this.state._CANT}</span> episodios de Apena</p>
          </Col>
        </Row>
        <Row>
          <Col lg="7" xs="7" md="7" className="bg-dark">
            <br/>
            <p>BPM: <b>{this.state._BPM}</b> Pulsaciónes por minuto</p>
            <p>Saturación de Oxigeno: <b>{this.state._EKGR}</b></p>
          </Col>
          <Col lg="5" xs="5" md="5">
            <Widget04 color="danger" header={`Detuvimos ${this.state._CANT}`} value={this.state._CANT} invert> EP. APNEA.</Widget04>
            {/*<Widget04 icon="icon-speedometer" color="danger" header={`c/Hr ${this.state._CANT}`} value={this.state._CANT} invert># EST.</Widget04>*/}
          </Col>
          {/*<Col xs="12" sm="6" lg="3">*/}
          {/*<br/>*/}
          {/*<Widget01 color="success" header="89.9%" />*/}
          {/*</Col>*/}
        </Row>
        <br />
        <Row>
          <Col lg={12}>
            <img width="100%" src="https://cdn.dribbble.com/users/330174/screenshots/2695600/comp_2.gif" alt=""/>
          </Col>
          <Col lg={12} className="text-center align-bottom">
            <br/>
            <Button onClick={() => this.props.history.push('/app/stats')}>Ver resumen semanal...</Button>
            <br/><br/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Widgets;
