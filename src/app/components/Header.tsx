import Link from 'next/link';
import { Button } from './ui/Button';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0  w-full z-50 h-20">
      <div className="container !max-w-full">
        <div className="flex justify-between items-center h-20 backdrop:blur-md ">
          <div className="">
            <Link
              href="/"
              className="text-xl font-bold uppercase flex items-center justify-center gap-2"
            >
              <div className="size-8 border border-stone-600 rounded-full flex items-center justify-center">
                <img src="./logo.svg" className="size-6" />
              </div>
              <span>Barrel & Grain</span>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="size-11 border border-stone-300 rounded-full inline-flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <Button variant="primary" className=" hidden md:inline-flex ">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
