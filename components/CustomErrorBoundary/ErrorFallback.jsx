const ErrorFallback = ({error, resetErrorBoundary}) => {
    return (
        <div className="error_msg" role="alert">
            <p>Something went wrong:</p>
            <span>{error.message}</span>
            <button onClick={resetErrorBoundary}>Retry</button>
        </div>
    ); 
}

export default ErrorFallback;