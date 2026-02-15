import Link from "next/link";

const AnnouncementBar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 z-50 border-b border-primary/10 bg-white/95 backdrop-blur-sm">
      <div className="container">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-7 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-sm text-primary">Open to Software Engineering opportunities.</p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="mailto:ekettipearachchi@gmail.com" className="underline underline-offset-4">
                Email
              </Link>
              <Link href="https://www.linkedin.com/in/menusha-katipearachchi/" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
