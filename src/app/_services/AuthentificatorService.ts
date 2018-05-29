import { Injectable } from '@angular/core';
import {Authentificator} from "../_models/Authentificator";

@Injectable()
export class AuthentificatorService {

  getAuthentificator(){
    return [
      new Authentificator("local"),
      new Authentificator("supervision"),
      new Authentificator("mobeepass")
    ]
  }
}
