import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const Error404Page: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className='flex justify-center min-h-screen items-center flex-col'>
      <h1 className='text-3xl font-bold'>Oops!</h1>
      <p className='my-5 text-xl'>Sorry, an unexpected error has occured</p>
      <p className='text-lg'>
        { errorMessage }
      </p>
    </div>
  )
}
 export default Error404Page