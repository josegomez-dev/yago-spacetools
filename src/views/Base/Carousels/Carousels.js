import React, { Component } from 'react';
import { Card, Collapse, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';

const items = [
  {
    src: 'https://k60.kn3.net/taringa/F/3/1/E/1/1/supermachote2/80F.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: 'http://www.ronquidosgoveco.com/images/apnea1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'https://i.pinimg.com/originals/ba/a1/be/baa1be4f41b519d1c4dcd5c870447d88.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

class Carousels extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const { activeIndex } = this.state;

    const slides2 = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" xl="6">
            <Card>
              <CardBody>
                <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides2}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <strong>Sabias que el 80% de personas no saben si padecen de Apnea?</strong>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <strong>Sabias la apnea es mucho mas suceptible en hombres?</strong>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <strong>¿Qué efectos tiene la Apnea?</strong>
              </CardHeader>
              <Collapse isOpen={true} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
                <CardBody>
                  <p>
                    ➢	Pobre tono de los músculos de la faringe. <br/>
                    ➢	Vías respiratorias superiores estrechas. <br/>
                    ➢	Gran tamaño de base de lengua. <br/>
                    ➢	Tejido del paladar duro muy grueso. <br/>
                    ➢	Tamaño y posición del maxilar inferior: retrognatia o micrognatia. <br/>
                    ➢	Paladar blando muy largo y relajado. <br/>
                    ➢	Úvula o campañilla larga. <br/>
                    ➢	Hipertrofia de cornetes inferiores. <br/>
                    ➢	Hipertrofia amigdalar. <br/>
                    ➢	Hipertrofia de las vegetaciones, sobre todo en niños. <br/>
                    ➢	Desviación del tabique nasal y/ o de la nariz. <br/>
                    ➢	Obesidad. La cantidad de tejido adiposo

                  </p>
                </CardBody>
              </Collapse>
            </Card>

            <Card>
              <CardHeader>
                <strong>¿Conoces el mercado global de dispositivos para el Transtorno Respiratorio (Apnea)?</strong>
              </CardHeader>
              <Collapse isOpen={true} onEntering={this.onEntering} onEntered={this.onEntered} onExiting={this.onExiting} onExited={this.onExited}>
                <CardBody>
                  <p>
                    Un informe de la consultora Credence Research, estima que el mercado global de dispositivos para el trastorno de apnea del sueño, valorado en más de 3.900 millones de dólares en 2015, aumentará a una tasa anual del 8,1% en los próximos siete años.
                  </p>
                </CardBody>
              </Collapse>
            </Card>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Carousels;
