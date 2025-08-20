import { Request, Response, NextFunction } from 'express';
import config from '../config';
import { getErrorMessage } from '../utils';
import CustomError from '../errors/CustomError';
import { UnauthorizedError } from 'express-oauth2-jwt-bearer';
import joi from 'joi';

export default function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (res.headersSent || config.debug) {
    next(error);
    return;
  }

  if (joi.isError(error)) {
    const validationError: ValidationError = {
      error: {
        message: 'Validation error',
        code: 'ERR_VALID',
        errors: error.details.map((detail) => ({
          message: detail.message,
        })),
      },
    };
    res.status(422).json(validationError);
    return;
  }

  if (error instanceof CustomError) {
    res.status(error.statusCode).json({
      error: {
        message: error.message,
        code: error.code,
      },
    });
    return;
  }

  if (error instanceof UnauthorizedError) {
    res.status(401).json({
      error: {
        message: error.message,
        code: 'code' in error ? error.code : 'ERR_AUTH',
      },
    });
    return;
  }

  res.status(500).json({
    error: {
      message:
        getErrorMessage(error) ||
        'An unexpected error occurred. Please view logs for more details.',
    },
  });
}
