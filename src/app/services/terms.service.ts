import { Injectable } from '@angular/core';

@Injectable()
export class TermsService {
  searchTerms: string[];

  constructor() { }

  getTerms(): string[] {
    return this.searchTerms;
  }

  setTerms(searchTerms: string[]): void {
    this.searchTerms = searchTerms;
  }
}
