import Link from 'next/link';
import Image from 'next/image';
import wildImage from '../../../public/beers/wild.png';
import dwaalImage from '../../../public/beers/dwaal.png';
import minneImage from '../../../public/beers/minne.png';
import gloedBatchImage from '../../../public/beers/gloed_batch.jpg';
import dewImage from '../../../public/beers/dew.jpg';

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
    <section className="py-24">
      <div className="container">
        <h2 className="text-4xl">Selected Bears</h2>
        <div className="mt-10">
          {selectedBeers.map(({ name, image, link }) => (
            <Link key={name} href={link}>
              <div className="border-b border-stone-400 py-6 border-dotted flex items-center justify-between">
                <Image src={image} alt={name} className=" max-w-40" />
                <div className="mt-8 flex justify-between items-center">
                  <h3 className="text-2xl">{name}</h3>
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
