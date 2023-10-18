// import { useState } from "react";
// import { Button } from "../Styledcomponents";
// import styled from "styled-components";
// import { FaInfoCircle } from "react-icons/fa";

// const facts = [
//   "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
//   "The longest time between two twins being born is 87 days. Amy and Katie Jones-Elliot of Ireland were born prematurely on June 1, 2012, and Amy was discharged from the hospital 87 days before her sister Katie.",
//   "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
//   "The world's largest desert is not the Sahara but Antarctica. While we often associate deserts with hot, sandy environments, a desert is technically defined by its low precipitation levels.",
//   "The oldest known sample of the smallpox virus has been found in the teeth of a 17th-century child buried in Lithuania.",
// ];

// const EducationalFactsContainer = styled.div`
//   background-color: #c0c0c0;
//   border-radius: 5px;
//   width: 450px;
//   margin-left: 500px;
//   height: 400px;
//   color: ${(props) => props.theme.textColor};
//   padding: 0.5rem;
//   text-align: center;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
// `;

// const Icon = styled(FaInfoCircle)`
//   font-size: 2rem;
//   margin-right: 0.5rem;
// `;

// const FactButton = styled(Button)`
//   background: linear-gradient(to bottom, #ff6600, #ff9900);
//   color: white;
//   border: none;
//   border-radius: 5px;
//   padding: 0.5rem ;
//   cursor: pointer;

//   &:hover {
//     background: linear-gradient(to bottom, #cc3300, #ff6600);
//   }
// `;

// const EducationalFacts = () => {
//   const [factIndex, setFactIndex] = useState(0);

//   const changeFact = () => {
//     const nextIndex = (factIndex + 1) % facts.length;
//     setFactIndex(nextIndex);
//   };

//   const fact = facts[factIndex];

//   return (
//     <EducationalFactsContainer>
//       <Icon />
//       <h1>Educational Facts</h1>
//       <p>{fact}</p>
//       <FactButton onClick={changeFact}>Next Fact</FactButton>
//     </EducationalFactsContainer>
//   );
// };

// export default EducationalFacts;

import { useState } from "react";
import { Button } from "./Styledcomponents";
import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";

const facts = [
  "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
  "The longest time between two twins being born is 87 days. Amy and Katie Jones-Elliot of Ireland were born prematurely on June 1, 2012, and Amy was discharged from the hospital 87 days before her sister Katie.",
  "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
  "The world's largest desert is not the Sahara but Antarctica. While we often associate deserts with hot, sandy environments, a desert is technically defined by its low precipitation levels.",
  "The oldest known sample of the smallpox virus has been found in the teeth of a 17th-century child buried in Lithuania.",
];

const EducationalFactsContainer = styled.div`
  background: rgba(237, 208, 237, 0.4);
  backdrop-filter: blur(8.5px);
  border-radius: 5px;
  width: 300px;
  height: auto;
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 70%; /* Adjust the width for smaller screens */
    margin: 0 auto; /* Center the component */
  }
`;

const Icon = styled(FaInfoCircle)`
  font-size: 2rem;
  margin-right: 0.5rem;
`;

const FactButton = styled(Button)`
  background: linear-gradient(to bottom, #ff6600, #ff9900);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom, #cc3300, #ff6600);
  }
`;

const EducationalFacts = () => {
  const [factIndex, setFactIndex] = useState(0);

  const changeFact = () => {
    const nextIndex = (factIndex + 1) % facts.length;
    setFactIndex(nextIndex);
  };

  const fact = facts[factIndex];

  return (
    <EducationalFactsContainer>
      <Icon />
      <h1>Educational Facts</h1>
      <p>{fact}</p>
      <FactButton onClick={changeFact}>Next Fact</FactButton>
    </EducationalFactsContainer>
  );
};

export default EducationalFacts;
