import { ReactNode, FC } from "react";

interface LandingLayoutProps {
  topbar: ReactNode;
  children: ReactNode;
  brands: ReactNode;
  info: ReactNode;
  stats: ReactNode;
  testimonials: ReactNode;
  faqs: ReactNode;
  footer: ReactNode;
}

const LandingLayout: FC<LandingLayoutProps> = ({
  topbar,
  children: intro,
  brands,
  info,
  stats,
  testimonials,
  faqs,
  footer,
}) => (
  <main className="grid grid-cols-1 overflow-x-hidden">
    <header id="topbar">{topbar}</header>
    <section className="p-4 lg:p-16" id="intro">
      {intro}
    </section>
    <section id="brands">{brands}</section>
    <section className="p-4 lg:p-16" id="info">
      {info}
    </section>
    <section className="p-4 lg:p-16" id="stats">
      {stats}
    </section>
    <section className="p-4 lg:p-16" id="stats">
      {testimonials}
    </section>
    <section className="p-4 lg:p-16" id="faqs">
      {faqs}
    </section>
    <footer id="footer">{footer}</footer>
  </main>
);

export default LandingLayout;
