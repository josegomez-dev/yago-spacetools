import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Switches extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <AppSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Switches;
