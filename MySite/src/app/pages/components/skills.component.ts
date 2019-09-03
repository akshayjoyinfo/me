import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions, ChartOptions } from 'chart.js';
import * as Chart from 'chart.js';
import { ChartSkilsData } from 'src/app/core/chart-skils-data.model';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit, AfterViewInit {

  loading = true;
  responsive = true;
  cols = 1;
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  public chartSkillsData: ChartSkilsData = new ChartSkilsData();
  public radarChartType = 'radar';
  ProgrammingLangugaesRadarChart: any = [];
  FrontEndChart: any = [];
  DatabaseChart: any = [];
  CSharpSkillsChart: any = [];
  DevOpsSkilsChart: any = [];
  softSkillsChart: any = [];



  constructor() { }

  ngOnInit() {
    this.ProgrammingLangugaesRadarChart = new Chart('languages', {
      type: 'radar',
      data: {
        labels: this.chartSkillsData.programmingLanguageLabels,
        datasets: this.chartSkillsData.programmingLanguageDatasets
      },
      options: this.chartSkillsData.chartJsRadarOptions
    });

    this.FrontEndChart = new Chart('frontend', {
      type: 'line',
      data: {
        labels: this.chartSkillsData.frondEndSkillLabels,
        datasets: this.chartSkillsData.frontEndSkilDatasets
      },
      options: this.chartSkillsData.chartJSOptions
    });

    this.DatabaseChart = new Chart('databases', {
      type: 'bar',
      data: {
        labels: this.chartSkillsData.databaseSkillsLabels,
        datasets: this.chartSkillsData.databaseSkillsDatasets
      },
      options: this.chartSkillsData.chartJSOptions
    });

    this.CSharpSkillsChart = new Chart('csharp', {
      type: 'radar',
      data: {
        labels: this.chartSkillsData.cSharpSkillLabels,

        datasets: this.chartSkillsData.cSharpSkillsDatasets
      },
      options: this.chartSkillsData.chartJsRadarOptions
    });

    this.DevOpsSkilsChart = new Chart('devops', {
      type: 'radar',
      data: {
        labels: this.chartSkillsData.devOpsSkillsLabels,
        datasets: this.chartSkillsData.devOpsSkillsDatasets
      },
      options: this.chartSkillsData.chartJsRadarOptions
    });

    this.softSkillsChart = new Chart('softskills', {
      type: 'radar',
      data: {
        labels: this.chartSkillsData.softSkillsLabels,
        datasets: this.chartSkillsData.softSkillDatatsets
      },
      options: this.chartSkillsData.chartJsRadarOptions
    });

    this.loading = false;
  }
  ngAfterViewInit(): void {

  }


}
