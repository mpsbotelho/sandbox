import styled from "styled-components";
import { darken } from "polished";

const grayzinho = "#ebe6e0";
const grayzao = "#ebe7f0";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0 20px;
  height: 40px;

  background-image: linear-gradient(to bottom right, ${grayzinho}, ${grayzao});
`;

export const Form = styled.form`
  display: flex;
  text-decoration: none;
  height: 100%;

  div {
    padding: 10px 4px;
    display: flex;
    justify-content: center;
    /* border: 0; */

    * {
      margin: 0 2px;
      border: 0;
      border-radius: 4px;
    }

    input {
      width: 125px;
      padding: 4px;
    }

    button {
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: background 0.2s;
      background: none;

      &:hover {
        background: ${darken(0.1, grayzinho)};
      }
    }
  }
`;
