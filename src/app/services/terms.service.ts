import { Injectable } from '@angular/core';

@Injectable()
export class TermsService {
  searchTerms: string[];

  constructor() { }

  async getTerms(): Promise<string[]> {
    try {
      return await this.searchTerms;
    } catch (error) {
      console.log('Error: ', error.message);
    }
  }

  setTerms(searchTerms: string[]): void {
    this.searchTerms = searchTerms;
  }
}
