const validate = {
  create: {
    name: {
      in: ['body'],
      regex: '^[A-Za-z]+$',
      required: true,
    },
    password: {
      in: ['body'],
      regex: '',
      required: true,
    },
    role: {
      in: ['body'],
      regex: '',
      required: true,
    },
  },

  delete: {
    id: {
      in: ['params'],
      regex: '^[0-9a-fA-F]{24}$',
      required: true,
    },
  },
  getById: {
    id: {
      in: ['params'],
      regex: '^[0-9a-fA-F]{24}$',
      required: true,
      string: true,
    },
  },

  get: {
    limit: {
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
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
      regex: '^[0-9a-fA-F]{24}$',
      required: true,
      string: true,
    },
  },
};

export default validate;
