import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container} from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
import img1 from './../../assets/img/brand/00.png';
import img2 from './../../assets/img/brand/untitled.8.png';
import img3 from './../../assets/img/brand/untitled.9.png';
import img4 from './../../assets/img/brand/untitled.10.png';
import logo from './../../assets/img/spaceapps/logo.png';
import isotpo from './../../assets/img/spaceapps/logo.png';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';


const items = [
  {
    src: img3,
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: img4,
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: img1,
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
  {
    src: img2,
    altText: 'Slide 4',
    caption: 'Slide 4',
  },
];


class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 100,
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
    // const { activeIndex } = this.state;
    //
    // const slides2 = items.map((item) => {
    //   return (
    //     <CarouselItem
    //       onExiting={this.onExiting}
    //       onExited={this.onExited}
    //       key={item.src}
    //     >
    //       <img className="d-block w-100" src={item.src} alt={item.altText} />
    //       <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //     </CarouselItem>
    //   );
    // });

    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg" compact>
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
              {window.location.href.split('/#/')[1] === 'welcome' && <span>
                  <div style={{ textAlign: 'center' }}>
                  <img width="300px" src={logo} alt=""/>
                </div>
                <br /><br />
              </span>}
              {/*{window.location.pathname === '/' && <Card>*/}
                {/*<Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>*/}
                  {/*<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />*/}
                  {/*{slides2}*/}
                  {/*<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />*/}
                  {/*<CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />*/}
                {/*</Carousel>*/}
              {/*</Card>}*/}
              <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
