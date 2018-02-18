import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from "rxjs/observable/TimerObservable";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public orderBy: string
  public coins: Coin[];
  public preChanges1H: Number[] = [];
  public changes1H: Number[] = [];
  public changes24H: Number[] = [];
  public changes7D: Number[] = [];
  public priceUSD: number[] = [];
  public priceBTC: number[] = [];
  public marketCapUSD: number[] = [];
  public availableSupply: number[] = [];
  public totalSupply: number[] = [];

  public detailsObservable: Observable<CoinDetail[]>;

  constructor(private _http: HttpClient) {

  }

  ngOnInit() {

    this._http.get<Coin[]>("https://api.coinmarketcap.com/v1/ticker/").subscribe(result => {
      if (result) {
        result.sort((e1, e2) => e1.rank - e2.rank);
        this.coins = result;
      }
    });


    TimerObservable.create(0, 30000)
      .subscribe(() => {
        this._http.get<CoinDetail[]>("https://api.coinmarketcap.com/v1/ticker/").subscribe(result => {
          if (result) {
            this.preChanges1H = this.changes1H;
            this.priceUSD = [];
            this.changes1H = [];
            this.changes24H = [];
            this.changes7D = [];
            this.priceUSD = [];
            this.priceBTC = [];
            this.marketCapUSD = [];
            this.availableSupply = [];
            this.totalSupply = [];
            for (let p of result) {
              this.priceUSD.push(p.price_usd);
              this.changes1H.push(p.percent_change_1h);
              this.changes24H.push(p.percent_change_24h);
              this.changes7D.push(p.percent_change_7d);
              this.priceBTC.push(p.price_btc);
              this.marketCapUSD.push(p.market_cap_usd);
              this.availableSupply.push(p.available_supply);
              this.totalSupply.push(p.total_supply);
            }
          }

        });
      });

  }


}
