import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin: 0.5rem;
  background-color: white;
  border: solid grey 1px;
  width: 200px;
  height: 200px;
  border-radius: 3px;
  box-shadow: 2px 4px 10px #ccc;
  @media (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 336px) {
    width: 140px;
  }

  @media (max-width: 320px) {
    width: 120px;
  }
`

export default Wrapper;
