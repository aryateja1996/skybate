import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  apiKey: string = '40c7867537464d3c90642b6e1a2a6d0d';

  getUserLocation(): Promise<string> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // const latitude = position.coords.latitude;
          // const longitude = position.coords.longitude;
          //46.155783, 102.368571
          const latitude = 46.155783;
          const longitude = 102.368571;

          // Now reverse geocode to get the country code
          this.getCountryFromCoordinates(latitude, longitude).then((countryCode) => {
            resolve(countryCode);
          }).catch((error) => {
            reject(error);
          });
        }, (error) => {
          reject('Geolocation error: ' + error.message);
        });
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  private getCountryFromCoordinates(latitude: number, longitude: number): Promise<string> {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${this.apiKey}`;

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe(
        (response: any) => {
          if (response && response.results && response.results.length > 0) {

            const components = response.results[0].components;
            console.log(components);
            localStorage.setItem('country',components.country);
            const countryCode = components.country_code.toUpperCase(); // e.g., "IN"
            resolve(countryCode);
          } else {
            reject('No results found for geolocation.');
          }
        },
        (error) => {
          reject('Error during reverse geocoding: ' + error.message);
        }
      );
    });
  }
}
