const validate = {
  create: {
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: '',
      required: true,
    },
    password: {
      errorMessage: 'password is required',
      in: ['body'],
      regex: '',
      required: true,
    },
    role: {
      errorMessage: 'password is required',
      in: ['body'],
      regex: '',
      required: true,
    },
  },

  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
    },
  },

  get: {
    limit: {
      // default: 0,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      // default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },

  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};

export default validate;
