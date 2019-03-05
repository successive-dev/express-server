"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = [{
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    }, {
        traineeEmail: 'trainee1@successivetech',
        reviewerEmail: 'reviewer1@successive.tech'
    }];
exports.permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
};
//# sourceMappingURL=constants.js.map