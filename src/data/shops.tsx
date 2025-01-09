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
        address: 'Roden',
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
        address: 'Leeuwarden',
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
        address: 'Apeldoorn',
        website: 'https://dummywebsite.com/hop-thunders',
        googleMaps: 'https://goo.gl/maps/dummyHopThunders',
      },
      {
        city: 'Arnhem',
        name: 'Wine Merchant Barrique',
        address: 'Arnhem',
        website: 'https://dummywebsite.com/wine-merchant-barrique',
        googleMaps: 'https://goo.gl/maps/dummyWineMerchantBarrique',
      },
      {
        city: 'Arnhem',
        name: 'The Hoppenaar',
        address: 'Arnhem',
        website: 'https://dummywebsite.com/the-hoppenaar',
        googleMaps: 'https://goo.gl/maps/dummyTheHoppenaar',
      },
      {
        city: 'Arnhem',
        name: 'Sonsbeek Winery',
        address: 'Arnhem',
        website: 'https://dummywebsite.com/sonsbeek-winery',
        googleMaps: 'https://goo.gl/maps/dummySonsbeekWinery',
      },
      {
        city: 'Ermelo',
        name: 'Burg Beers',
        address: 'Ermelo',
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
        address: 'Groningen',
        website: 'https://dummywebsite.com/malt',
        googleMaps: 'https://goo.gl/maps/dummyMalt',
      },
      {
        city: 'Groningen',
        name: 'Just in Beer',
        address: 'Groningen',
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
        address: 'Weert',
        website: 'https://dummywebsite.com/winery-weert',
        googleMaps: 'https://goo.gl/maps/dummyWineryWeert',
      },
      {
        city: 'Geleen',
        name: 'Beverage and Liquor Store Vos',
        address: 'Geleen',
        website: 'https://dummywebsite.com/beverage-and-liquor-vos',
        googleMaps: 'https://goo.gl/maps/dummyBeverageAndLiquorVos',
      },
      // Add other shops here for Limburg...
    ],
  },
  {
    name: 'Noord-Brabant',
    shops: [
      {
        city: 'Oss',
        name: 'Bierscout.nl',
        address: 'Oss',
        website: 'https://dummywebsite.com/bierscout',
        googleMaps: 'https://goo.gl/maps/dummyBierscout',
      },
      {
        city: 'Eindhoven',
        name: 'Edrinks',
        address: 'Eindhoven',
        website: 'https://dummywebsite.com/edrinks',
        googleMaps: 'https://goo.gl/maps/dummyEdrinks',
      },
      {
        city: 'Eindhoven',
        name: 'Bottle Shop Eindhoven',
        address: 'Eindhoven',
        website: 'https://dummywebsite.com/bottle-shop-eindhoven',
        googleMaps: 'https://goo.gl/maps/dummyBottleShopEindhoven',
      },
      {
        city: 'Gemert',
        name: 'Het Oude Vat',
        address: 'Gemert',
        website: 'https://dummywebsite.com/het-oude-vat',
        googleMaps: 'https://goo.gl/maps/dummyHetOudeVat',
      },
      {
        city: 'Haps',
        name: 'Drank van de Meisjes',
        address: 'Haps',
        website: 'https://dummywebsite.com/drank-van-de-meisjes',
        googleMaps: 'https://goo.gl/maps/dummyDrankVanDeMeisjes',
      },
      {
        city: 'Helmond',
        name: 'Hetbiermoment.nl',
        address: 'Helmond',
        website: 'https://dummywebsite.com/hetbiermoment',
        googleMaps: 'https://goo.gl/maps/dummyHetbiermoment',
      },
      {
        city: 'Den Bosch',
        name: 'Bottle Shop Den Bosch',
        address: 'Den Bosch',
        website: 'https://dummywebsite.com/bottle-shop-den-bosch',
        googleMaps: 'https://goo.gl/maps/dummyBottleShopDenBosch',
      },
      {
        city: 'Sint-Oedenrode',
        name: 'Drankenhandel van Boxmeer',
        address: 'Sint-Oedenrode',
        website: 'https://dummywebsite.com/drankenhandel-van-boxmeer',
        googleMaps: 'https://goo.gl/maps/dummyDrankenhandelVanBoxmeer',
      },
      {
        city: 'Teteringen',
        name: 'Mitra Ad van Dongen',
        address: 'Teteringen',
        website: 'https://dummywebsite.com/mitra-ad-van-dongen',
        googleMaps: 'https://goo.gl/maps/dummyMitraAdVanDongen',
      },
      {
        city: 'Tilburg',
        name: 'Bierbrigadier Tilburg',
        address: 'Tilburg',
        website: 'https://dummywebsite.com/bierbrigadier-tilburg',
        googleMaps: 'https://goo.gl/maps/dummyBierbrigadierTilburg',
      },
    ],
  },
  {
    name: 'Noord-Holland',
    shops: [
      {
        city: 'Alkmaar',
        name: 'Bierwinkel Alkmaar',
        address: 'Alkmaar',
        website: 'https://dummywebsite.com/bierwinkel-alkmaar',
        googleMaps: 'https://goo.gl/maps/dummyBierwinkelAlkmaar',
      },
      {
        city: 'Amsterdam',
        name: 'Bierkoning',
        address: 'Amsterdam',
        website: 'https://dummywebsite.com/bierkoning',
        googleMaps: 'https://goo.gl/maps/dummyBierkoning',
      },
      {
        city: 'Amsterdam',
        name: 'Rebel Wines',
        address: 'Amsterdam',
        website: 'https://dummywebsite.com/rebel-wines',
        googleMaps: 'https://goo.gl/maps/dummyRebelWines',
      },
      {
        city: 'Amsterdam',
        name: 'Sterk',
        address: 'Amsterdam',
        website: 'https://dummywebsite.com/sterk',
        googleMaps: 'https://goo.gl/maps/dummySterk',
      },
      {
        city: 'Amsterdam',
        name: 'Vleck Wijnen',
        address: 'Amsterdam',
        website: 'https://dummywebsite.com/vleck-wijnen',
        googleMaps: 'https://goo.gl/maps/dummyVleckWijnen',
      },
      {
        city: 'Amsterdam',
        name: 'Bierbaum',
        address: 'Amsterdam',
        website: 'https://dummywebsite.com/bierbaum',
        googleMaps: 'https://goo.gl/maps/dummyBierbaum',
      },
      {
        city: 'Heerhugowaard',
        name: 'Vinoci',
        address: 'Heerhugowaard',
        website: 'https://dummywebsite.com/vinoci',
        googleMaps: 'https://goo.gl/maps/dummyVinoci',
      },
      {
        city: 'Hoorn',
        name: 'Against All Odds',
        address: 'Hoorn',
        website: 'https://dummywebsite.com/against-all-odds',
        googleMaps: 'https://goo.gl/maps/dummyAgainstAllOdds',
      },
      {
        city: 'Krommenie',
        name: 'Slijterij Drinks & Gifts',
        address: 'Krommenie',
        website: 'https://dummywebsite.com/slijterij-drinks-gifts',
        googleMaps: 'https://goo.gl/maps/dummySlijterijDrinksGifts',
      },
      {
        city: 'Lisse',
        name: 'Smaakhuis',
        address: 'Lisse',
        website: 'https://dummywebsite.com/smaakhuis',
        googleMaps: 'https://goo.gl/maps/dummySmaakhuis',
      },
      {
        city: 'Tuitjenhorn',
        name: 'Bolle Hendrik',
        address: 'Tuitjenhorn',
        website: 'https://dummywebsite.com/bolle-hendrik',
        googleMaps: 'https://goo.gl/maps/dummyBolleHendrik',
      },
      {
        city: 'Uithoorn',
        name: 'Drinkhut',
        address: 'Uithoorn',
        website: 'https://dummywebsite.com/drinkhut',
        googleMaps: 'https://goo.gl/maps/dummyDrinkhut',
      },
    ],
  },
];

console.log(shops);
