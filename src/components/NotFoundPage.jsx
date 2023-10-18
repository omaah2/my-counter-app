import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const NotFoundText = styled.h1`
  font-size: 3rem;
  color: #ccccff;
`;

const SubText = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <NotFoundText>404 - Page Not Found</NotFoundText>
      <SubText>The page you are looking for does not exist.</SubText>
      <SubText>
        Return to the <a href="/">home page</a>
      </SubText>
    </Container>
  );
};

export default NotFoundPage;
