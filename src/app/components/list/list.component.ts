import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  searchTerms: string[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
      this.route.paramMap
      .subscribe((params: ParamMap) => {
        this.buildSearchTerms(params.get('searchString'));
        });
  }

  searchAgain(): void {
    this.router.navigateByUrl('search');
  }

  buildSearchTerms(searchString: string): void {
    this.searchTerms =  searchString.split('+');
    console.log(this.searchTerms);
  }

}
