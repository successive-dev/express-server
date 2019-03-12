export const users = [{
    reviewerEmail: "reviewer1@successive.tech",
    traineeEmail: "trainee1@successive.tech",
}, {
    reviewerEmail: "reviewer1@successive.tech",
    traineeEmail: "trainee1@successivetech",
}];

export const permissions = {
    getUsers: {
        all: ["head-trainer"],
        delete: [],
        read: ["trainee", "trainer"],
        write: ["trainer"],
    },
};

export const seedUser = {
    emailid: "DummyEmailId",
    name: "DummyName",
};
