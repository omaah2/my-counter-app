import { useState, useEffect } from "react";
import {
  CounterButtons,
  Input,
  LoadingSpinner,
  Container,
  ResponsiveContainer,
  ResponsiveStyledCounter,
  ResponsiveButton,
} from "./Styledcomponents"; // Make sure to adjust the import path based on your folder structure
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import BackgroundMusic from "./BackgroundMusic"; // Import BackgroundMusic component
import EducationalFacts from "./EducationalFacts";
import styled from "styled-components"; // Import styled from styled-components

const AnimatedCounter = styled.h1`
  color: #fff; /* Initial color */
  text-shadow: 2px 2px 4px #000; /* Optional text shadow */
  margin: 2;
  animation: colorChange 2s alternate infinite; /* Animation duration and properties */
  @keyframes colorChange {
    0% {
      color: #fff; /* Initial color */
    }
    100% {
      color: #9d39a8;
    }
  }
  @media (max-width: 768px) {
    padding-right:45px;
  }
`;


const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);
  const setValue = (value) => setCount(value);

  const simulateAsyncAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Async action completed!", { position: "top-right" });
    }, 2000);
  };

  useEffect(() => {
      gsap.to(".container", {
        rotation: 360,
        duration: 5,
        ease: "linear",
      });
  }, []);

  return (
    <ResponsiveContainer>
      <ResponsiveStyledCounter>
        <AnimatedCounter>Counter</AnimatedCounter>
        <Container className="container">
          <CounterButtons>
            <ResponsiveButton onClick={decrement}>
              <FaMinus />
            </ResponsiveButton>
            <Input
              type="number"
              value={count}
              onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <ResponsiveButton onClick={increment}>
              <FaPlus />
            </ResponsiveButton>
          </CounterButtons>
          <ResponsiveButton onClick={reset}>Reset</ResponsiveButton>
          <ResponsiveButton onClick={simulateAsyncAction} disabled={loading}>
            Async Action
          </ResponsiveButton>
          {loading && <LoadingSpinner color="#CCCCFF" size={50} />}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
          />
        </Container>
        <BackgroundMusic />
        <EducationalFacts />
      </ResponsiveStyledCounter>
    </ResponsiveContainer>
  );
};

export default CounterApp;
