import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="container !max-w-full">
        <div className="flex justify-between items-center h-20 ">
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
            <button className="bg-red-orange-500 h-11 px-6 rounded-xl text-white items-center border border-red-orange-500 uppercase hidden md:inline-flex ">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
