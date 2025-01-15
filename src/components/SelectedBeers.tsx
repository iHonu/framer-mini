import Link from 'next/link';
import Image from 'next/image';
import wildImage from '../../public/beers/wild.png';
import dwaalImage from '../../public/beers/dwaal.png';
import minneImage from '../../public/beers/minne.png';
import gloedBatchImage from '../../public/beers/gloed-batch.png';
import dewImage from '../../public/beers/dew.png';

export const SelectedBeers = () => {
  const selectedBeers = [
    {
      name: 'Wild',
      image: wildImage,
      link: 'https://nevel.org/product/dwaal/',
    },
    {
      name: 'Dwaal',
      image: dwaalImage,
      link: 'https://nevel.org/product/dwaal/',
    },
    {
      name: 'Minne',
      image: minneImage,
      link: 'https://nevel.org/winkel/',
    },
    {
      name: 'Gloed Batch',
      image: gloedBatchImage,
      link: 'https://nevel.org/product/gloed-batch-6-2022/',
    },
    {
      name: 'Dew',
      image: dewImage,
      link: 'https://nevel.org/product/dauw/',
    },
  ];
  return (
    <section className="section" id="selected-beers">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Bears</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {selectedBeers.map(({ name, image, link }) => (
            <Link
              key={name}
              href={link}
              className="border-t border-stone-400 py-6 md:py-8 lg:py-10 border-dotted flex flex-col last:border-b relative group/beer "
            >
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover/beer:h-full transition-all duration-500 bg-stone-300"></div>
              <div className=" flex items-center justify-between md:block relative z-20">
                <div className="w-36 md:hidden">
                  <Image
                    src={image}
                    alt={name}
                    className="size-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-center gap-4 md:[grid-template-columns:1fr_300_max-content] md:gap=8">
                  <div className="lg:group-hover/beer:pl-8 transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
                  </div>

                  <div className="relative w-32 md:w-48 opacity-0 scale-80 group-hover/beer:opacity-100 group-hover/beer:scale-100 lg:group-hover/beer:scale-110 transition-all duration-300 z-10 hidden md:block">
                    <div className="absolute w-full aspect-square top-1/2 -translate-y-1/2">
                      <Image
                        src={image}
                        alt={name}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:group-hover/beer:pr-8 transition-all duration-500">
                    <div className="size-6 overflow-hidden">
                      <div className="h-6 w-12 flex group-hover/beer:-translate-x-1/2 transition-all duration-300">
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
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
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
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
