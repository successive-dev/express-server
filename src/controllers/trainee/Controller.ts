class Trainee {
    public get(req, res) {
        res.send("Get Req");
    }
    public post(req, res) {
        res.send("Post Req");
    }
    public put(req, res) {
        res.send("Put Req");
    }
    public delete(req, res) {
        res.send("Delete Req");
    }
}

export default new Trainee();