import { createFileRoute } from "@tanstack/react-router";
import { BayouGame } from "../components/BayouGame";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return <BayouGame />;
}
