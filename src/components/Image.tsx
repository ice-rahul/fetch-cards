import styled from 'styled-components';

const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 3px;
  @media (max-width: 600px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 320px) {
    height: 80px;
    width: 80px;
  }
`

export default Image
