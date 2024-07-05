import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';

import { MiddlewareFactory } from './types';

export const withHeaders: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const response = await next(request, _next);

    return response;
  };
};
