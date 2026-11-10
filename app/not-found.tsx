import { Container, ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">404</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-tight text-balance text-forest-deep sm:text-5xl lg:text-6xl">
            This page has wandered off.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink/65">
            The page you are looking for may have moved or no longer exists. Let
            us help you find your way back.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Back to home</ButtonLink>
            <ButtonLink href="/join" variant="outline" icon={false}>
              Join a Bible study
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
