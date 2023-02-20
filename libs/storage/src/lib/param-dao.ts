import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ParamDao {
  static get ip(): string {
    return this._ip;
  }

  static set ip(value: string) {
    this._ip = value;
  }
  private static _ip="kleappspring.florianmorin.repl.co"

}
