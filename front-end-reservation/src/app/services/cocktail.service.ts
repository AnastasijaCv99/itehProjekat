import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() {}

  getJoke() {
      //const axios = require('axios');
      return axios.get('https://the-cocktail-db.p.rapidapi.com/popular.php'), {
        headers: {
          'X-RapidAPI-Key': '8497b2adedmsh27318fe5eda9204p19240djsn354ccd6bde4a',
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
        }
      }

    }   
 /* private apiUrl = 'https://the-cocktail-db.p.rapidapi.com/popular.php';
  private headers = {
                      'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
                      'X-RapidAPI-Key': '8497b2adedmsh27318fe5eda9204p19240djsn354ccd6bde4a'
                    };
  getJoke() {
    axios.get(this.apiUrl, { headers: this.headers })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }*/
  
}


