import { details } from '@/data/details';
import Image from 'next/image';

export const Details = () => {
  const detailsIndex = 0;
  return (
    <section className="section section-x-margin" id="details">
      <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden">
        <span className="whitespace-nowrap">What makes us unique</span>
        <span className="whitespace-nowrap self-end text-red-orange-500">
          What makes us unique
        </span>
      </h2>
      <div className="container">
        <div className="mt-20 ">
          {details.map(
            ({ title, subtitle, description, image }, index) =>
              index === detailsIndex && (
                <div
                  key={title}
                  className="grid md:grid-cols-5 md:gap-8 lg:gap-12 md:items-center"
                >
                  <div className=" aspect-square md:aspect-[9/16] md:col-span-2">
                    <Image
                      src={image}
                      alt={title}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mt-8 md:mt-0 md:col-span-3">
                    <div className="text-4xl md:text-5xl lg:text-6xl">
                      {title}
                    </div>
                    <div className="text-xl md:text-2xl mt-1 lg:mt-2 font-light text-stone-500">
                      {subtitle}
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8 lg:mt-10 block leading-2">
                      {description}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
        <div className="flex  gap-4 mt-6 lg:mt-10">
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
