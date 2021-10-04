import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    img {
      align-self: center;
      max-width: 250px;
    }
    > strong {
      align-self: center;
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 10px;
    }
    > span {
      align-self: center;
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
    button {
      width: 100%;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 18px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#7159c1')};
      }
       }
`;

export const IconDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
  > span{
      margin-left: 5px;
      font-size: 21px;
      font-weight: bold;
  }
`;