import { NotFoundView } from "../components/not-found-view";

export default function NotFound() {
  return (
    <NotFoundView
      portalHref="/"
      homeHref={process.env.NEXT_PUBLIC_HOME_URL ?? "http://localhost:3000"}
    />
  );
}
