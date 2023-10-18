import { useState, useEffect } from "react";
import {
  CounterButtons,
  Input,
  LoadingSpinner,
  Container,
  ResponsiveContainer,
  ResponsiveStyledCounter,
  ResponsiveButton,
} from "./Styledcomponents";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import gsap from "gsap";
import { SplitText } from "gsap-trial/SplitText";
import BackgroundMusic from "./BackgroundMusic"; // Import BackgroundMusic component
import EducationalFacts from "./EducationalFacts";

gsap.registerPlugin(SplitText);
function CounterApp() {
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

    const tl = gsap.timeline({ repeat: -1 });
    const split = new SplitText("h1", { type: "chars, words" });
    const chars = split.chars;

    tl.set(chars, { color: "random([#fff,  #808080, #C0C0C0])" }, 2);

    tl.from(chars, {
      opacity: 0,
      duration: 0.1,
      stagger: 0.1,
    });

    tl.to(chars, {
      duration: 0.5,
      opacity: 0,
      stagger: 0.05,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <ResponsiveContainer>
      <ResponsiveStyledCounter >
        <h1>Counter</h1>
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
}

export default CounterApp;
