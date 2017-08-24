import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TermsService } from '../../services/terms.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  searchTerms: string[];

  constructor(
    private router: Router,
    private termsService: TermsService
  ) { }

  ngOnInit() {
    this.searchTerms = this.termsService.getTerms();
    for (let i = 0; i < this.searchTerms.length; i++) {
      this.searchTerms[i] = this.searchTerms[i].toLowerCase();
    }
    console.log(this.searchTerms);
  }

  searchAgain(): void {
    this.router.navigateByUrl('search');
  }

}
