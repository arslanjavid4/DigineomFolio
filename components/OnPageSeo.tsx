/** Crawlable copy and internal links. Screen-reader only — no visual change. */
export default function OnPageSeo() {
  return (
    <div className="sr-only">
      <p>
        A second engineering team. Not a second payroll. Hire vetted remote talent from Pakistan.
        DigiNeom places degree-verified Pakistani software engineers with companies in Europe and
        North America. Engineers work from co-working spaces we manage, not from home.
      </p>
      <nav aria-label="On this page">
        <a href="/">DigiNeom home</a>
        <a href="/#model">Offshore engineering model</a>
        <a href="/#workspace">Managed co-working workspace in Pakistan</a>
        <a href="/#process">Four steps to hire a Pakistani software engineer</a>
        <a href="/#vetting">How we vet remote talent from Pakistan</a>
        <a href="/#cost">Pakistani engineer rates versus Europe and North America</a>
        <a href="/talent">Talent directory</a>
        <a href="/clients">Mid-market client stories</a>
        <a href="/hubs">Managed hubs</a>
        <a href="/pricing">Pricing</a>
        <a href="/about">About DigiNeom</a>
        <a href="/contact">Talk to us about a role</a>
      </nav>
    </div>
  );
}
