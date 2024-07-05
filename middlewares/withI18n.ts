import { NextFetchEvent, NextRequest } from 'next/server';

import { MiddlewareFactory } from './types';
import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from '@/i18nConfig';

export const withI18n: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    return i18nRouter(request, i18nConfig);
  };
};
