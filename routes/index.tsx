import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="sim-shell">
      <h1 className="sim-title">Airline Call Simulator</h1>
      <iframe
        title="Airline Call Simulator"
        src="/sim.html"
        className="sim-frame"
      />
    </main>
  );
}
