export const users = [{
    traineeEmail:'trainee1@successive.tech',
    reviewerEmail:'reviewer1@successive.tech'
},{
    traineeEmail:'trainee1@successivetech',
    reviewerEmail:'reviewer1@successive.tech'
}]

export const permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: [],
    }
}