import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
 import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _alburmUrl = '../assets/album.json';

  constructor(private _http: Http) {}
  getAlbum(id: number): any {
    this._http.get(this._alburmUrl).map((response) => response.json());
  }
}
