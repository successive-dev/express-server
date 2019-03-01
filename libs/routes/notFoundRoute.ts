export default function notFoundRoute(err, req, res, next){
    res.status(404).send("Not found");
}