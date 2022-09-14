import styled from "@emotion/styled";
import { Link } from 'react-router-dom'


export const AnchorLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
`;

export const NavbarList = styled.ul`
  list-style: none;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.color};
  font-weight: 600;
  margin: 0;
  li {
    text-transform: capitalize;
    display: flex;
    align-items: center;
    span {
      color: ${(props) => props.colorSpan};
    }
  }
`;

export const Logo = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.color};
  span {
    color: #d1094b;
  }
`;

export const SpanCounter = styled.span`

  color: ${(props) => props.color};
  `
