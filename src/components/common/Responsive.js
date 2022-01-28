import styled from 'styled-components';

const ResponsiveBlack = styled.div`
  /* padding-left: 1rem;
  padding-right: 1rem; */
  width: 1024px;
  margin: 0 auto;
  background: ${({ theme }) => theme.bgColor};
  @media screen {
    width: 24.4rem;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlack {...rest}>{children}</ResponsiveBlack>;
};

export default Responsive;
