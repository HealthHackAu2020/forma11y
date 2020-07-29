import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontFamilyService {
  fontFamily: string;
  constructor() { }
  get() {
    return this.fontFamily;
  }
  set(value: string) {
    this.fontFamily = value;
  }
}
