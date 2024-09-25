import { ReactNode, FC } from "react";

interface LandingLayoutProps {
  topbar: ReactNode;
  children: ReactNode;
  info: ReactNode;
  stats: ReactNode;
  testimonials: ReactNode;
  faqs: ReactNode;
  footer: ReactNode;
}

const LandingLayout: FC<LandingLayoutProps> = ({
  topbar,
  children: intro,
  info,
  stats,
  testimonials,
  faqs,
  footer,
}) => (
  <main className="grid grid-cols-1">
    <header id="topbar">{topbar}</header>
    <section id="intro">{intro}</section>
    <section id="info">{info}</section>
    <section id="stats">{stats}</section>
    <section id="stats">{testimonials}</section>
    <section id="faqs">{faqs}</section>
    <footer id="footer">{footer}</footer>
  </main>
);

export default LandingLayout;
