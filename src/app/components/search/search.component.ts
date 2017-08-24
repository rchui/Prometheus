import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchTerms: string[];
  searchString: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  searchFor(searchText): Boolean {
    // Split by white space and commas.
    this.searchTerms = String(searchText).split(/[ ,]+/);
    for (let i = 0; i < this.searchTerms.length; i++) {
      this.searchTerms[i] = this.searchTerms[i].toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    }
    this.buildSearchString();
    this.router.navigateByUrl('/list/' + this.searchString);
    return false;
  }

  buildSearchString() {
    this.searchString = this.searchTerms.join('+');
  }
}
