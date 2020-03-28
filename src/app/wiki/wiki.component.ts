import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { distinctUntilChanged, debounceTime, switchMap } from "rxjs/operators";

import {WikiService} from './wiki.service';
import {IWikiData} from './wiki.model';
@Component({
  selector: "app-wiki",
  templateUrl: "./wiki.component.html",
  styleUrls: ["./wiki.component.css"]
})
export class WikiComponent implements OnInit, OnDestroy {
  wikiData: Array<IWikiData> = [];
  search$: Subject<string> = new Subject<string>();
  subscription: Subscription;
  constructor(private wikiService:WikiService) {}

  ngOnInit() {
    this.updateWikiData();
  }

  
  search(term: string): void {
    this.search$.next(term);
  }

  updateWikiData() {
    this.subscription = this.search$.pipe(
       debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.wikiService.getWikiData(term))
    ).subscribe(result => this.wikiData = result as Array<IWikiData>);
  }

  openSearchResult(url:string) {
    window.open(url, '_blank');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
