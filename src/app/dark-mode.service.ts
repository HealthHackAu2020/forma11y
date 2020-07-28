import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  isDarkMode: boolean = false;
  constructor() { }
  get() {
    return this.isDarkMode;
  }
  set(value: boolean) {
    this.isDarkMode = value;
  }
}
