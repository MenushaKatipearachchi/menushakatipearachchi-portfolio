import Link from "next/link";

const Footer = () => {
  return (
    <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 py-4 md:py-7 flex flex-col gap-2">
            <p>2026 (c) Menusha Eshan Katipearachchi. All rights reserved.</p>
            <p>
              Built with Next.js |{" "}
              <Link
                href="https://www.linkedin.com/in/menusha-katipearachchi/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </Link>{" "}
              |{" "}
              <Link
                href="https://github.com/MenushaKatipearachchi"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                GitHub
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
