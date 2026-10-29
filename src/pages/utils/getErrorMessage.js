export const getErrorMessage = (error) => {
  if (!error) return null;

  return error instanceof Error
    ? error.message
    : error?.data
      ? error.data
      : String(error);
};
