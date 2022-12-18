import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, you have reached a dead end.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
export default ErrorPage;