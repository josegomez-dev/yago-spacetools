import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>NASA &copy; <a target="true" href="https://www.nasa.gov/">2018</a></span>
        <span className="ml-auto">Develop by <a target="true" href="https://www.google.com/search?rlz=1C1CHBF_enCR778CR778&ei=mvxdW9_sFOui_QbvkrWQCg&q=jose+alejandro+gomez+casrro&oq=jose+alejandro+gomez+casrro&gs_l=psy-ab.3..35i39k1j0i203k1j0i22i30k1.2465.4923.0.4995.27.10.0.0.0.0.491.1066.2-1j1j1.3.0....0...1.1.64.psy-ab..24.3.1065...0j0i20i263k1.0.ViWqw5S9p2g">Space Tools</a></span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
