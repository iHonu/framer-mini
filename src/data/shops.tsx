interface Region {
  name: string;
  shops: Shop[];
}

interface Shop {
  city: string;
  name: string;
  address: string;
  website: string;
  googleMaps: string;
}

export const shops: Region[] = [
  {
    name: 'Drenthe',
    shops: [
      {
        city: 'Roden',
        name: 'Van Erp Roden',
        address: 'Roden, Drenthe',
        website: 'https://dummywebsite.com/van-erp-roden',
        googleMaps: 'https://goo.gl/maps/dummyVanErpRoden',
      },
    ],
  },
  {
    name: 'Friesland',
    shops: [
      {
        city: 'Leeuwarden',
        name: 'The Marquis',
        address: 'Leeuwarden, Friesland',
        website: 'https://dummywebsite.com/the-marquis',
        googleMaps: 'https://goo.gl/maps/dummyTheMarquis',
      },
    ],
  },
  {
    name: 'Gelderland',
    shops: [
      {
        city: 'Apeldoorn',
        name: 'Hop Thunders',
        address: 'Apeldoorn, Gelderland',
        website: 'https://dummywebsite.com/hop-thunders',
        googleMaps: 'https://goo.gl/maps/dummyHopThunders',
      },
      {
        city: 'Arnhem',
        name: 'Wine Merchant Barrique',
        address: 'Arnhem, Gelderland',
        website: 'https://dummywebsite.com/wine-merchant-barrique',
        googleMaps: 'https://goo.gl/maps/dummyWineMerchantBarrique',
      },
      {
        city: 'Arnhem',
        name: 'The Hoppenaar',
        address: 'Arnhem, Gelderland',
        website: 'https://dummywebsite.com/the-hoppenaar',
        googleMaps: 'https://goo.gl/maps/dummyTheHoppenaar',
      },
      {
        city: 'Arnhem',
        name: 'Sonsbeek Winery',
        address: 'Arnhem, Gelderland',
        website: 'https://dummywebsite.com/sonsbeek-winery',
        googleMaps: 'https://goo.gl/maps/dummySonsbeekWinery',
      },
      {
        city: 'Ermelo',
        name: 'Burg Beers',
        address: 'Ermelo, Gelderland',
        website: 'https://dummywebsite.com/burg-beers',
        googleMaps: 'https://goo.gl/maps/dummyBurgBeers',
      },
      // Add other shops here for Gelderland...
    ],
  },
  {
    name: 'Groningen',
    shops: [
      {
        city: 'Groningen',
        name: 'Malt',
        address: 'Groningen, Groningen',
        website: 'https://dummywebsite.com/malt',
        googleMaps: 'https://goo.gl/maps/dummyMalt',
      },
      {
        city: 'Groningen',
        name: 'Just in Beer',
        address: 'Groningen, Groningen',
        website: 'https://dummywebsite.com/just-in-beer',
        googleMaps: 'https://goo.gl/maps/dummyJustInBeer',
      },
      // Add other shops here for Groningen...
    ],
  },
  {
    name: 'Limburg',
    shops: [
      {
        city: 'Weert',
        name: 'Winery Weert',
        address: 'Weert, Limburg',
        website: 'https://dummywebsite.com/winery-weert',
        googleMaps: 'https://goo.gl/maps/dummyWineryWeert',
      },
      {
        city: 'Geleen',
        name: 'Beverage and Liquor Store Vos',
        address: 'Geleen, Limburg',
        website: 'https://dummywebsite.com/beverage-and-liquor-vos',
        googleMaps: 'https://goo.gl/maps/dummyBeverageAndLiquorVos',
      },
      // Add other shops here for Limburg...
    ],
  },
  {
    name: 'North Brabant',
    shops: [
      {
        city: 'Oss',
        name: 'Bierscout.nl',
        address: 'Oss, North Brabant',
        website: 'https://dummywebsite.com/bierscout',
        googleMaps: 'https://goo.gl/maps/dummyBierscout',
      },
      {
        city: 'Eindhoven',
        name: 'Edrinks',
        address: 'Eindhoven, North Brabant',
        website: 'https://dummywebsite.com/edrinks',
        googleMaps: 'https://goo.gl/maps/dummyEdrinks',
      },
      // Add other shops here for North Brabant...
    ],
  },
  // Add other regions similarly...
];

console.log(shops);
