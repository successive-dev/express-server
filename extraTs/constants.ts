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
    role: "trainee",
};
