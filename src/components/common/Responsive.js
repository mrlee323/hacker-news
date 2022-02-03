import styled from 'styled-components';

const ResponsiveBlock = styled.div`
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
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
