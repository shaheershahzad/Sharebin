import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  public validateEmail(email: string): boolean {
    return false;
  }
}
