import styled from 'styled-components';

const StyledBigBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const BigBox = ({ children }) => {
  return <StyledBigBox>{children}</StyledBigBox>;
};

export default BigBox;
