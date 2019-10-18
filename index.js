import React from 'react';
import styled, { keyframes } from 'styled-components';
import { TranslateText } from 'versa-ui';
import PropTypes from 'prop-types';

const blink = keyframes`
0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
}`;

const Loading = styled.span`
  animation-name: ${blink};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Loading2 = styled.span`
  animation-name: ${blink};
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;

  span:nth-child(1) {
    animation-delay: 0.4s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0;
  }
`;

const CardLoader = ({ loadingMessage, ...props }) => (
  <div {...props}>
    <Loading2>
      <Loading2>(</Loading2>
      <Loading2>(</Loading2>
      <Loading2>(</Loading2>
    </Loading2>
    <TranslateText translate={loadingMessage} />
    <Loading>
      <Loading>)</Loading>
      <Loading>)</Loading>
      <Loading>)</Loading>
    </Loading>
  </div>
);

CardLoader.propTypes = {
  loadingMessage: PropTypes.object,
};

export default CardLoader;
