import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions, ChartOptions } from 'chart.js';
import * as Chart from 'chart.js';

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

  public programmingLanguageLabels: string[] = ['C', 'C++', 'VB', 'C#',
  'JavaScript', 'TypeScript', 'Python', 'Java'];
  public programmingLanguageDatasets: any = [
    {data: [25, 40, 30, 90, 70, 70, 75, 80], label: 'Programming Languages', borderColor: '#698796',
    backgroundColor: '#e1e7ea' }];

  public frondEndSkillLabels: string[] = [ 'HTML/HTML5', 'CSS/Sass', 'Angular 4-8', 'React', 'Bootstrap', 'Telerik/KendoUI',
  'Material Design', 'Angular Material'

  ];
  public frontEndSkilDatasets: any[] = [
    { data: [90, 75, 80, 50, 90, 80, 80, 80], label: 'FrontEnd', borderColor: '#698796',
    backgroundColor: '#e1e7ea', lineTension: 0 } ];

  public databaseSkillsLabels: string[] = [ 'SQL Server(05-17)', 'MySQL', 'PostgeSQL', 'AZZURE SQL Server',
  'DynamoDB', 'Oracle'
    ];
  public databaseSkillsDatasets: any[] = [
      { data: [90, 50, 60, 70, 65, 70], label: 'Databases', borderColor: '#698796',
      backgroundColor: '#e1e7ea',  borderWidth: 3 } ];

  public cSharpSkillLabels: string[] = [
    '.NET (2,3,4,4.5,4.6)', '.NET MVC(2,3,4,5)', '.NET CORE (2, 2.1, 2.2)', 'WebServices (SOAP/WCF)',
    'WEB API (.NET , .NET CORE)', 'Sharepoint/InforPath(2010)', 'Dapper', 'EF (.NET/CORE)',
    'Windows Service', 'SpecFlow BDD', 'Xunit', 'Functional Programming'
  ];

  public cSharpSkillsDatasets: any = [
    { data: [90, 80, 80, 70, 75, 40, 90, 80, 90, 90, 90, 80], label: 'Databases', borderColor: '#698796',
    backgroundColor: '#e1e7ea',  borderWidth: 3 } ];

  public devOpsSkillsLabels: string[] = [
    'Jenkins', 'Octopus Deploy', 'Cake', 'PowerShell', 'Rake', 'Jules' , 'yml', 'Python Automation',
    'Scrapy', 'Status.io/Alerts', 'Redis Cache', 'Splunk', 'SemaText'
  ];

  public devOpsSkillsDatasets: any[] = [
    { data: [80, 60, 70, 70, 60, 90, 90, 90, 90, 80, 85, 80, 60], label: 'Databases', borderColor: '#698796',
    backgroundColor: '#e1e7ea',  borderWidth: 3 }
  ];

  public softSkillsLabels: string[] = [
    'Empathy', 'Communication', 'Teamwork', 'Approachability and Helpfulness', 'Patience',
    'Open-mindedness', 'Problem solving', 'Accountability', 'Creativity', 'Time management'
  ];

  public softSkillDatatsets: any = [
    { data: [80, 95, 90, 80, 70, 90, 90, 85, 90, 90, 80], label: 'Databases', borderColor: '#698796',
    backgroundColor: '#e1e7ea',  borderWidth: 3 } ];

  public radarChartType = 'radar';
  ProgrammingLangugaesRadarChart: any = [];
  FrontEndChart: any = [];
  DatabaseChart: any = [];
  CSharpSkillsChart: any = [];
  DevOpsSkilsChart: any = [];
  softSkillsChart: any = [];

  chartJSOptions: ChartOptions = {
    legend: {
      display: false
    },
    animation: {
      duration: 500,
      easing: 'easeInCubic' // general animation time
    },
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          fontSize: 10,
          minor: {
            fontSize: 10
          }
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontSize: 12,
          minor: {
            fontSize: 12
          }
        }
      }],
    }
  };

  constructor() { }

  ngOnInit() {
    this.ProgrammingLangugaesRadarChart = new Chart('languages', {
      type: 'radar',
      data: {
        labels: this.programmingLanguageLabels,
        datasets: this.programmingLanguageDatasets
      },
      options: {
        legend: {
          display: false
        },
        animation: {
          duration: 500,
          easing: 'easeInCubic' // general animation time
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
        }
      }
    });

    this.FrontEndChart = new Chart('frontend', {
      type: 'line',
      data: {
        labels: this.frondEndSkillLabels,

        datasets: this.frontEndSkilDatasets
      },
      options: this.chartJSOptions
    });

    this.DatabaseChart = new Chart('databases', {
      type: 'bar',
      data: {
        labels: this.databaseSkillsLabels,
        datasets: this.databaseSkillsDatasets
      },
      options: this.chartJSOptions
    });

    this.CSharpSkillsChart = new Chart('csharp', {
      type: 'radar',
      data: {
        labels: this.cSharpSkillLabels,

        datasets: this.cSharpSkillsDatasets
      },
      options: {
        legend: {
          display: false
        },
        animation: {
          duration: 500,
          easing: 'easeInCubic' // general animation time
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
        }
      }
    });

    this.DevOpsSkilsChart = new Chart('devops', {
      type: 'radar',
      data: {
        labels: this.devOpsSkillsLabels,

        datasets: this.devOpsSkillsDatasets
      },
      options: {
        legend: {
          display: false
        },
        animation: {
          duration: 500,
          easing: 'easeInCubic' // general animation time
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
        }
      }
    });

    this.softSkillsChart = new Chart('softskills', {
      type: 'radar',
      data: {
        labels: this.softSkillsLabels,
        datasets: this.softSkillDatatsets
      },
      options: {
        legend: {
          display: false
        },
        animation: {
          duration: 500,
          easing: 'easeInCubic' // general animation time
        },
        scales: {
          xAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
          yAxes: [{
            display: false,
            ticks: {
              fontSize: 14,
              minor: {
                fontSize: 14
              }
            }
          }],
        }
      }
    });
    this.loading = false;
  }
  ngAfterViewInit(): void {

  }


}
