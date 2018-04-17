import React from 'react';
import styled, { keyframes } from 'styled-components';
import fadeIn from 'react-animations/lib/fade-in';

const fadeInAnimation = keyframes`${fadeIn}`;


const FadeIn = styled.div`
  animation-name: ${fadeInAnimation};
  animation-duration: 1s;
  animation-delay: 0s;
`;

const Page = ({
  children,
}) => (
  <FadeIn>{children}</FadeIn>
);

export default Page;
