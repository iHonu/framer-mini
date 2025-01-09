import Image from 'next/image';
import heroImage from '../../public/hero.jpg';
import { Button } from './ui/Button';
export const Hero = () => {
  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mt-40 md:mt-0">
              Wild and sour beers brewed with sustainable, 100% Dutch
              ingredients.
            </h1>
            <div className="flex flex-col md:flex-row mt-10 items-start md:items-center gap-6">
              {' '}
              <Button
                variant="secondary"
                iconRight={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                }
              >
                <span>Beers</span>
              </Button>
              <Button variant="text">Contact</Button>{' '}
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="mt-20 md:mt-0 md:h-full">
            <Image
              className="size-full object-cover"
              src={heroImage}
              alt="Beer and Grain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
