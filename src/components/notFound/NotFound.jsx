import { useRedirect } from "../../customHook/useRedirect";

export default function NotFound() {
  useRedirect("/firstsection", 3000);

  return (
    <>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <p>You are being redirected to the main page, wait please...</p>
    </>
  );
}
