import { navItems } from '@/data/navItems';
import { Button } from '@/components/ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section ">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="uppercase">Get in touch with us </span>
          </div>
          <div>
            <div className="md:grid md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                  Interested in a tasting or tour or do you have a question
                  about our beers
                </h2>
                <Button
                  variant="secondary"
                  className="mt-8 group/button"
                  iconRight={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 scale-95 group-hover:translate-x-1 group-hover:scale-100  group-hover:-translate-y-1 transition-all ease-in-out"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  }
                >
                  info@nevel.org
                </Button>
              </div>
              <div>
                <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0 ">
                  {navItems.map(({ href, label }) => (
                    <a key={label} href={href}>
                      <Button variant="text" className="text-lg">
                        {label}
                      </Button>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <p className="py-16 text-white/30 text-sm">
          Rondweg 15, 6515 AS, Nijmegen, The Netherlands
        </p>
      </div>
    </footer>
  );
};
