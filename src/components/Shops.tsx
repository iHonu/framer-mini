'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardHeader } from '@/components/ui/card';
interface Shop {
  id: string;
  name: string;
  address: string;
  website: string;
  googleMaps: string;
}

interface Region {
  id: string;
  name: string;
  shops: Shop[];
}

export const Shops = () => {
  const [regions, setRegions] = useState<Region[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    const fetchShops = async () => {
      const data = await fetch('api/shops').then((res) => res.json());
      console.log('Fetched regions:', data);
      setRegions(data);
      const noordHolland = data.find((region: Region) => {
        console.log('Checking region:', region.name.toLowerCase());
        return region.name.toLowerCase() === 'noord-holland';
      });
      console.log('Found Noord Holland:', noordHolland);
      if (noordHolland) {
        setSelectedRegion(noordHolland);
        setShops(noordHolland.shops);
      }
    };
    fetchShops();
  }, []);

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region);
    setShops(region.shops);
  };

  console.log(regions);
  return (
    <section className="section section-x-margin" id="shops">
      <div className=" !max-w-full">
        <h2 className="text-3xl md:text-6xl lg:text-8xl pt-6 mb-6 md:pt-12 md:mb-12">
          Shops
        </h2>

        <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-320px)] md:border-l md:border-r border-stone-400">
          {/* Regions tabs - left side */}
          <div className=" md:w-1/3 flex flex-col justify-center md:border-r md:border-t border-t-stone-500 md:border-b border-stone-400">
            <div className="flex flex-wrap mb-4 md:mb-0 flex-row md:flex-col gap-3 md:gap-2 p-2 md:p-0">
              {regions.map((region) => (
                <button
                  key={region.name}
                  onClick={() => handleRegionClick(region)}
                  className={`text-left md:text-lg lg:text-xl uppercase p-1.5 md:p-4 hover:bg-stone-300 transition-colors md:pl-10 border border-stone-300 rounded-sm md:rounded-none md:border-none ${
                    selectedRegion?.name === region.name
                      ? 'bg-stone-300 font-medium'
                      : ''
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1  md:overflow-y-auto border-t border-t-stone-500 border-b border-stone-400">
            {selectedRegion ? (
              <div className="bg-stone-200 ">
                <div className="md:flex hidden border-b border-stone-400 sticky bg-stone-200 top-0">
                  <h3 className="text-xl md:text-2xl lg:text-3xl uppercase ml-12 pb-8 pt-8">
                    {selectedRegion.name}
                  </h3>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-1 md:gap-3 lg:gap-4 auto-rows-fr mx-4 mt-2 md:mx-10 md:mt-8">
                  {shops.map((shop) => (
                    <Link
                      key={shop.name}
                      href={shop.website}
                      className="h-full "
                    >
                      <Card className="group transition-colors h-full bg-transparent border-none shadow-none rounded-none ">
                        <CardHeader className="flex flex-row items-center justify-between h-full gap-1 p-3 md:p-4 lg:p-6">
                          <div className="space-y-1 flex flex-col md:flex-col-reverse items-start justify-start">
                            <h3 className="text-xl group-hover:text-red-orange-500">
                              {shop.name}
                            </h3>
                            <p className="text-stone-500 group-hover:text-stone-700">
                              {shop.address}
                            </p>
                          </div>
                          <div className="w-6 flex-shrink-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-red-orange-500 group-hover:scale-110 group-hover:-translate-y-1"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </div>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>{' '}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
