import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { GraficasService } from '../../services/graficas.service';
import { ArduinoResponse } from '../../interfaces/arduino.interface';
import { delay } from 'rxjs';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  registros : ArduinoResponse[] = [];
  temperatura : number[]  =[];
  luminocidad : number [] =[];

  i: number = 0;


  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  number = this.temperatura[0];

  public barChartData: ChartData<'bar'> = {
    labels: [ 'Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7' ],
    datasets: [
      { data: [ 22 , 59, 80, 81, 56, 55, 40 ], label: 'Luminocidad' },
      { data: [ this.i, 17] , label: 'Temperaturas' }
    ]
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
 
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
 
  public randomize(): void {
    // Only Change 3 values
  }

  constructor(private graficasService: GraficasService) { }
 
  ngOnInit(): void {

    this.graficasService.getDatosArduino()
      .subscribe( data =>{
        console.log({data});
        const tamanio = data.length;
        this.registros = data;
        
      }
      )
  }

}
