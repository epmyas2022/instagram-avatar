export function Call(Controller) {
  return async (req, res, next) => {
    try {
      await Controller(req, res);
    } catch (error) {
      next(error);
      console.error(error);
    }
  };
}

export function CallWithParams(Controller, ...params) {
  return async (req, res, next) => {
    try {
      await Controller(req, res, ...params);
    } catch (error) {
      next(error);
      console.error(error);
    }
  };
}
