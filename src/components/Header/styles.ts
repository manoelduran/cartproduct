import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
    a {
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.2;
    }
  }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;