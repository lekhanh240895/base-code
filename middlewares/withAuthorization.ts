import { NextFetchEvent, NextRequest } from 'next/server';
import { MiddlewareFactory } from './types';

export const withAuthorization: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    // Continue to the next middleware for other cases
    return next(request, _next);
  };
};
