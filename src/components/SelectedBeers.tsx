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
    <section className="py-24 md:py-32 lg:py-40">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected Bears</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {selectedBeers.map(({ name, image, link }) => (
            <Link
              key={name}
              href={link}
              className="border-t border-stone-400 py-6 md:py-8 lg:py-10 border-dotted flex flex-col last:border-b "
            >
              <div className=" flex items-center justify-between md:block">
                <div className="w-36 md:hidden">
                  <Image
                    src={image}
                    alt={name}
                    className="size-full object-cover"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
