import styled from "styled-components";
import { ClipLoader } from "react-spinners";

// Base styles
export const Container = styled.div`
  background: rgba(237, 208, 237, 0.4);
  backdrop-filter: blur(8.5px);
  border-radius: 5px;
  margin-bottom: 2rem;
`;

export const StyledCounter = styled.div`
  background: linear-gradient(to bottom, #652b6b, #d540e6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300%;
  height: auto;
  font-family: Cursive;
  padding: 0.5rem;
  padding-bottom: 5rem;
`;

export const CounterButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background: linear-gradient(to bottom, #c376cc, #5b1363);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background: linear-gradient(to bottom, #fff, #c96ed4);
  }
`;

export const Input = styled.input`
  font-size: 1.5rem;
  width: 60px;
  text-align: center;
  border-radius: 5px;
`;

export const LoadingSpinner = styled(ClipLoader)`
  margin: 1rem;
  display: flex;
  justify-content: center;
`;

// Media Queries
const mobileBreakpoint = "768px";

export const ResponsiveContainer = styled(Container)`
  @media (max-width: ${mobileBreakpoint}) {
    background-color: #f0f0f0;

  }
`;
export const ResponsiveStyledCounter = styled(StyledCounter)`
  @media (max-width: ${mobileBreakpoint}) {
    width: 100%;
    height: auto;
    padding-bottom: 0;
    padding:none;

  }
`;

export const ResponsiveButton = styled(Button)`
  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1rem; /* Reduce font size for mobile */
  }
`;

export default {
  StyledCounter,
  Container,
  CounterButtons,
  Button,
  Input,
  LoadingSpinner,
  ResponsiveContainer,
  ResponsiveButton,
};
