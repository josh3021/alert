export const useErrorHandler = (error?: unknown) => {
  if (error) {
    console.error(error);
  }
};
