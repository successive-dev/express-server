export default function notFoundRoute(req, res, next) {
    res.status(404).send("Not found");
}
