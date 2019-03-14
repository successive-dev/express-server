export const permissions = {
    getUsers: {
        all: ['head-trainer'],
        delete: [],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
    },
};

export const seedUserData = {
    emailid: 'DummyEmailId',
    name: 'DummyName',
    role: 'head-trainer',
};
