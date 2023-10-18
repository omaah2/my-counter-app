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
  background-image: url("https://images.pexels.com/photos/396547/pexels-photo-396547.jpeg?auto=compress&cs=tinysrgb&w=600");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250vh;
  height: auto;
  font-family: Cursive;
  padding: 0.5rem;

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
  background: linear-gradient(to bottom, #c0c0c0, #fff);
  color: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  &:hover {
    background: linear-gradient(to bottom, #333, #000);
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
    width: 80vh;
    height: 250vh;
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
