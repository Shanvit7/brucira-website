import { ReactNode, FC } from "react";

interface FooterLayoutProps {
  form: ReactNode;
  motto: ReactNode;
  links: ReactNode;
}

const Footer: FC<FooterLayoutProps> = ({ form, motto, links }) => (
  <>
    <div>{form}</div>
    <div>{motto}</div>
    <div className="p-4 lg:p-16">{links}</div>
  </>
);

export default Footer;
