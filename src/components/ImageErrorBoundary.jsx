// components/ImageErrorBoundary.jsx
import { Component } from "react";

class ImageErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Image loading error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="image-error-fallback">
          <div className="text-gray-400 text-center p-4">
            <p>Image failed to load</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="mt-2 text-sm text-blue-400 hover:text-blue-300"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ImageErrorBoundary;