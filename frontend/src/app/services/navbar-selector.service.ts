import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarSelectorService {

  private selection: string;

  constructor() { }

  public setNavbarSelector(aux: string) {
    this.selection = aux;
  }

  public getNavbarSelector(): string {
    return this.selection;
  }
}
