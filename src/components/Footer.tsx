import styled from 'styled-components';
import Header from './Header';

const Footer = styled(Header).attrs({as: 'footer'})`
  justify-content: center;
`

export default Footer;