import React, { Component } from "react";
import ErrorView from "./ErrorNoData";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorView />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
