import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient px-4 text-primary-foreground">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-primary-foreground">Page not found</h1>
        <p className="mt-4 text-primary-foreground/70">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 text-sm font-medium text-brass-foreground transition-transform hover:-translate-y-0.5"
          >
            Go to the home page
          </Link>
        </div>
      </div>
    </div>
  );
}