import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ErrorContainer = styled.div`
  background-color: #f2dede;
  border: 1px solid #a94442;
  padding: 15px;
  margin: 20px;
`;

const ErrorHeading = styled.h1`
  font-size: 24px;
  color: #a94442;
`;

const ErrorMessage = styled.p`
  font-size: 16px;
  color: #a94442;
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorHeading>Something went wrong</ErrorHeading>
          <ErrorMessage>
            We apologize for the inconvenience. Please try again later.
          </ErrorMessage>
        </ErrorContainer>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
