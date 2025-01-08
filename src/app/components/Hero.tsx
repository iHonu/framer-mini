import Image from 'next/image';
import heroImage from '../../../public/hero.jpg';
import { Button } from './ui/Button';
export const Hero = () => {
  return (
    <section>
      <div className="container !max-w-full">
        <h1 className="text-5xl mt-40">
          Wild and sour beers brewed with sustainable, 100% Dutch ingredients.
        </h1>
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
        <Button variant="text">Contact</Button>
      </div>
      <div>
        <Image
          src={heroImage}
          alt="Beer and Grain"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
};
