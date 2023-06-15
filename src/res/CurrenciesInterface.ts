export interface CurrenciesInterface {
  currencies: Array<{
    name: string;
    abbreviation: string;
    rates: {
      USD: number;
      GBP: number;
      EUR: number;
      PLN: number;
      PHP: number;
    };
  }>;
}
