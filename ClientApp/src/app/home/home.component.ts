import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private coinsObservable: Observable<any[]>;

  constructor(private _http: HttpClient) { }



  ngOnInit() {

    TimerObservable.create(0, 10000)
      .subscribe(() => {
        this.coinsObservable = this._http.get<any[]>("https://api.coinmarketcap.com/v1/ticker/");
      });
    
  }

}
