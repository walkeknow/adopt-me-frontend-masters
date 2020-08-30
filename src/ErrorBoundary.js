import React, { Component } from 'react';
import { Link, Redirect, navigate } from '@reach/router';

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
    countdown: 5,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error('Errorboundary caught an error', error, info);
  }

  // alternative to React Hooks without any dependencies, 
  // causing the component to re-render as props are changed from setTimeOut
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(this.startCountdown, 1000);
    }
  }

  startCountdown = () => {
    this.setState(({ countdown }) => {
      if (countdown === 0) {
        /* or simply do:
        setTimeout(() => navigate('/'), 5000) */
        return {
          redirect: true,
        };
      }
      return {
        countdown: countdown - 1,
      };
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error.{' '}
          <Link to="/">
            Click here to go back to the homepage or wait for{' '}
            {this.state.countdown} seconds
          </Link>
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
