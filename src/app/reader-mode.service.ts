import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderModeService {
  isReaderMode: boolean = false;
  constructor() { }
  get() {
    return this.isReaderMode;
  }
  set(value: boolean) {
    this.isReaderMode = value;
  }
}
