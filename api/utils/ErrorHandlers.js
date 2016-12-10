export default function InternalError(message, code) {
  const error = new Error(message);
  error.code = code || 500;
  return error;
}
