
const errorHandler = (error, req, res, next) => {
    console.log('Middleware Error Handling!');
    const errorStatus = error.statusCode || 500;
    const errorMessage = error.message || 'Internal Server Error';
    res.status(errorStatus).json({
        "success": "false",
        "status": errorStatus,
        "message": errorMessage,
    })
}

export default errorHandler;