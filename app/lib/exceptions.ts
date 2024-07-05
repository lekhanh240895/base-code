export class FetchException extends Error {
  constructor(
    message = 'Server Error: There is an issue retrieving the data.'
  ) {
    super(message);
    this.name = 'FetchException';
  }
}

class ResponseError extends Error {
  response: Response;

  constructor(message: string, res: Response) {
    super(message);
    this.response = res;
  }
}

export async function myFetch<Type = any>(
  input: RequestInfo | URL,
  options?: RequestInit
) {
  const res = await fetch(input, options);
  if (!res.ok) {
    throw new ResponseError('Bad fetch response', res);
  }
  return (await res.json()) as Type;
}

export async function handleError(err: unknown) {
  if (err instanceof ResponseError) {
    switch (err.response.status) {
      case 401:
        // Prompt the user to log back in
        // showUnauthorizedDialog();
        console.log('Unauthorized!');
        break;
      case 404:
        console.log('Not found!');
        break;
      case 500:
        // Show user a dialog to apologize that we had an error and to
        // try again and if that doesn't work contact support
        // showErrorDialog();
        console.log('500 error');
        break;
      default:
        // Show
        throw new Error('Unhandled fetch response', { cause: err });
    }
  }
  throw new Error('Unknown fetch error', { cause: err });
}
