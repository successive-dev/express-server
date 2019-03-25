import { isEmpty } from 'lodash';

const validationHandler = (config) => (req, res, next) => {
  const keys = Object.keys(config);
  keys.forEach((key) => {
    const items = config[key];
    const values = items.in.map((item) => {
      return req[item][key];
    });
    const validatedValues = values.filter((item) => item);

    if (items && items.required) {
      if (validatedValues.length !== values.length) {
        return next({
          error: 'Bad Request',
          message: `${key} required`,
          status: 400,
        });
      }
    }

    if (items && items.number) {
      if (validatedValues[0] && isNaN(validatedValues[0])) {
        return next({
          error: 'Bad Request',
          message: `${key} should be number`,
          status: 400,
        });
      }
    }

    if (items && items.string) {
      if (typeof validatedValues[0] !== 'string') {
        return next({
          error: 'Bad Request',
          message: `${key} should be string`,
          status: 400,
        });
      }
      if (typeof validatedValues[0] === 'string' && validatedValues[0] === '') {
        return next({
          error: 'Bad Request',
          message: `${key} should not be empty`,
          status: 400,
        });
      }
    }

    if (items && items.isObject) {
      if (typeof validatedValues[0] !== 'object') {
        return next({
          error: 'Bad Request',
          message: `${key} should be object`,
          status: 400,
        });
      }
      if (isEmpty(validatedValues[0])) {
        return next({
          error: 'Bad Request',
          message: `${key} should not be empty`,
          status: 400,
        });
      }
    }
  });

  next();
};
export default validationHandler;
