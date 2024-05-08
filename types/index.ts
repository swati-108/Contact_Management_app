export interface Contact {
  firstname: string;
  lastname: string;
  status: string;
  id: string;
}

export interface ContactState {
  Contacts: Contact[];
}

export interface DateData {
  [date: string]: number;
}

export interface LineChartData {
  cases: DateData;
  deaths: DateData;
  recovered: DateData;
}

export interface CountryData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: string;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

export interface MapData extends Array<CountryData> {}
