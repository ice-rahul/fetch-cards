import styled from 'styled-components';

const Status = styled.span`
  position: absolute;
  width: 75px;
  height: 20px;
  top: 5px;
  right: 0px;
  border-radius: 3px 0 0 3px;
  background: #00800094;
  display: flex;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.8em;
  align-items: center;
`

const Alive = styled(Status)`
  background: #00800094;
`

const Dead = styled(Status)`
  background: #80000094;
`

const Unknown = styled(Status)`
  background: #0c008094;
`

export {
  Status,
  Alive,
  Dead,
  Unknown
};
