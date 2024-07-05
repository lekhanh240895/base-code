import { stackMiddlewares } from './middlewares/stackMiddlewares';
import { withAuthorization } from './middlewares/withAuthorization';
import { withHeaders } from './middlewares/withHeaders';
import { withI18n } from './middlewares/withI18n';

export default stackMiddlewares([withAuthorization, withHeaders, withI18n]);

// applies this middleware only to files in the app directory
export const config = {
  matcher: [
    '/((?!api|static|.*\\..*|_next).*)',
    {
      source: '/',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' }
      ]
    }
  ]
};
