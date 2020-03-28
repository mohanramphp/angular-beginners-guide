import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { IWikiData } from "./wiki.model";

@Injectable()
export class WikiService {
  constructor(private http: HttpClient) {}

  getWikiData(term: string, limit = 10): Observable<Array<IWikiData>> {
    const URL = `https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${term}&limit=${limit}`;
    return term ? this.http.get(URL).pipe(map(this.dataMassaging)) : of([]);
  }

  private dataMassaging([
    searchTerm,
    searchResult,
    third,
    searchResultLink
  ]: Array<any>) {
    return searchResult.map((result: string, index) => ({
      result,
      resultLink: searchResultLink[index]
    }));
  }
}
