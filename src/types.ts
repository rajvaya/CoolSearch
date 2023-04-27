export interface Flag {
    png: string;
    svg: string;
    alt: string;
  }
  
  export interface CoatOfArms {
    png: string;
    svg: string;
  }
  
  export interface Name {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  }
  
  export interface Currency {
    name: string;
    symbol: string;
  }
  
  export interface Languages {
    [key: string]: string;
  }
  
  export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
  }
  
  export interface Country {
    flags: Flag;
    coatOfArms: CoatOfArms;
    name: Name;
    tld: string[];
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
      [key: string]: Currency;
    };
    capital: string[];
    region: string;
    subregion: string;
    languages: Languages;
    landlocked: boolean;
    area: number;
    flag: string;
    maps: Maps;
    population: number;
    timezones: string[];
  }
  