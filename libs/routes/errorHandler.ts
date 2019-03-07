export default function errorHandler(err, req, res, next) {
    res.send(
        {
            error: "Not Found",
            message: "error",
            status: 500,
            timestamp: new Date(),
        },
    );
}
