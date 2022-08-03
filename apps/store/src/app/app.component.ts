import { Component } from '@angular/core';
import { storeUtilFormatters } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  storeUtilFormatters = storeUtilFormatters;
  games = this.http.get<any[]>('/api/games');

}