import { Container } from "@/components/ui";

export default function Loading() {
  return (
    <div className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="animate-pulse">
          <div className="h-3 w-32 rounded-full bg-sand" />
          <div className="mt-6 h-10 w-full max-w-2xl rounded-lg bg-sand" />
          <div className="mt-3 h-10 w-4/5 max-w-xl rounded-lg bg-sand" />
          <div className="mt-6 h-4 w-full max-w-xl rounded bg-sand/80" />
          <div className="mt-2 h-4 w-3/4 max-w-lg rounded bg-sand/80" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-64 rounded-2xl bg-sand" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
