import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 0.5rem;
`;

export function Section({ children, ...rest }) {
  return <StyledSection {...rest}>{children}</StyledSection>;
}
