import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import Center from '../Common/Center';


const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dataBox: PropTypes.func,
};

const BoxWrapper = styled.div `
  min-height: 30vh;
`;

const InfoWrapper = styled.div `
  width: auto;
`

const defaultProps = {
  dataBox: () => ({ variant: 'facebook', friends: '-', feeds: '-' }),
};


class Widget03 extends Component {

  
  render() {

    // eslint-disable-next-line
    const { children, className, cssModule, dataBox, ...attributes } = this.props;

    // demo purposes only
    const data = dataBox();
    const variant = data.variant;

    const keys = Object.keys(data);
    const vals = Object.values(data);

    return (
      <BoxWrapper>
          <div>
            {children}
          </div>
          <InfoWrapper>
            <Row>
              <Col>
                <Center>
                  <div className="text-value">{vals[1]}</div>
                  <div className="text-uppercase text-muted small">{keys[1]}</div>
                </Center>
              </Col>
              <Col>
                <Center>
                  <div className="text-value">{vals[2]}</div>
                  <div className="text-uppercase text-muted small">{keys[2]}</div>
                </Center>
              </Col> 
            </Row>
          </InfoWrapper>
        
      </BoxWrapper>
    );
  }
}

Widget03.propTypes = propTypes;
Widget03.defaultProps = defaultProps;

export default Widget03;
