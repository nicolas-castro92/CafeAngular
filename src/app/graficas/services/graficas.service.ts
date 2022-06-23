import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArduinoResponse } from '../interfaces/arduino.interface';
import { TemperaturaResponse } from '../interfaces/temperatura.interface';
import { LuzResponse } from '../interfaces/luz.interface';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getDatosArduino():Observable<ArduinoResponse[]>{
    return this.http.get<ArduinoResponse[]>('http://localhost:3000');
  }

  getDatosTemperatura():Observable<TemperaturaResponse[]>{
    return this.http.get<TemperaturaResponse[]>('http://localhost:3000/temperatura');
  }

  getDatosLuz():Observable<LuzResponse[]>{
    return this.http.get<LuzResponse[]>('http://localhost:3000/luz');
  }


}
