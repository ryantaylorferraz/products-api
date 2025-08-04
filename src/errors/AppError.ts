export type AppError = {
  statusCode: number;
  message: string;
  stack?: string;
  name: string;
};

export function createAppError(statusCode: number, message: string): AppError {
  const error: AppError = {
    statusCode,
    message,
    name: "AppError",
    stack: "",
  };

  if (Error.captureStackTrace) {
    const tmp = new Error(message);
    Error.captureStackTrace(tmp, createAppError);
    error.stack = tmp.stack;
  }
  
  return error;
}
