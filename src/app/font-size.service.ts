import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {
  fontSize: number = 1.5;

  constructor() { }
  get() {
    return this.fontSize;
  }
  set(value: number) {
    this.fontSize = value;
  }
}
