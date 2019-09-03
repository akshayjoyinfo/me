import { ChartOptions, RadialChartOptions } from 'chart.js';

export class ChartSkilsData {
  // tslint:disable-next-line: variable-name
  private _programmingLanguageLabels: string[] = ['C', 'C++', 'VB', 'C#', 'JavaScript', 'TypeScript', 'Python', 'Java'];

  public get programmingLanguageLabels(): string[] {
    return this._programmingLanguageLabels;
  }
  public set programmingLanguageLabels(value: string[]) {
    this._programmingLanguageLabels = value;
  }

  public programmingLanguageDatasets: any = [
    {data: [25, 40, 30, 90, 70, 70, 75, 80], label: 'Programming Languages', borderColor: '#698796',
    backgroundColor: 'rgba(162, 183, 195,0.4)' }];

  public frondEndSkillLabels: string[] = [ 'HTML/HTML5', 'CSS/Sass', 'Angular 4-8', 'React', 'Bootstrap', 'Telerik/KendoUI',
  'Material Design', 'Angular Material'

  ];
  public frontEndSkilDatasets: any[] = [
    { data: [90, 75, 80, 50, 90, 80, 80, 80], label: 'FrontEnd', borderColor: '#698796',
    backgroundColor: 'rgba(162, 183, 195,0.4)', lineTension: 0 } ];

  public databaseSkillsLabels: string[] = [ 'SQL Server(05-17)', 'MySQL', 'PostgeSQL', 'AZZURE SQL Server',
  'DynamoDB', 'Oracle'
    ];
  public databaseSkillsDatasets: any[] = [
      { data: [90, 50, 60, 80, 65, 70], label: 'Databases', borderColor: '#698796',
      backgroundColor: 'rgba(162, 183, 195,0.4)',  borderWidth: 3 } ];

  public cSharpSkillLabels: string[] = [
    '.NET (2,3,4,4.5,4.6)', '.NET MVC(2,3,4,5)', '.NET CORE (2, 2.1, 2.2)', 'WebServices (SOAP/WCF)',
    'WEB API (.NET , .NET CORE)', 'Sharepoint/InforPath(2010)', 'Dapper', 'EF (.NET/CORE)',
    'Windows Service', 'SpecFlow BDD', 'Xunit', 'Functional Programming'
  ];

  public cSharpSkillsDatasets: any = [
    { data: [90, 80, 80, 70, 75, 40, 90, 80, 90, 90, 90, 80], label: 'Databases', borderColor: '#698796',
    backgroundColor: 'rgba(162, 183, 195,0.4)',  borderWidth: 3 } ];

  public devOpsSkillsLabels: string[] = [
    'Jenkins', 'Octopus Deploy', 'Cake', 'PowerShell', 'Rake', 'Jules' , 'yml', 'Python Automation',
    'Scrapy', 'Status.io/Alerts', 'Redis Cache', 'Splunk', 'SemaText'
  ];

  public devOpsSkillsDatasets: any[] = [
    { data: [80, 60, 70, 70, 60, 90, 90, 90, 90, 80, 85, 80, 60], label: 'Databases', borderColor: '#698796',
    backgroundColor: 'rgba(162, 183, 195,0.4)',  borderWidth: 3 }
  ];

  public softSkillsLabels: string[] = [
    'Empathy', 'Communication', 'Teamwork', 'Approachability and Helpfulness', 'Patience',
    'Open-mindedness', 'Problem solving', 'Accountability', 'Creativity', 'Time management'
  ];

  public softSkillDatatsets: any = [
    { data: [80, 95, 90, 80, 70, 90, 90, 85, 90, 90, 80], label: 'Databases', borderColor: '#698796',
    backgroundColor: 'rgba(162, 183, 195,0.4)',  borderWidth: 3 } ];

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
          stacked: true,
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

    chartJsRadarOptions: RadialChartOptions = {
      legend: {
        display: false
      },
      tooltips: {
        enabled: true,
        callbacks: {
            label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex].label + ' : ' +
                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
            }
        }
     },
      animation: {
        duration: 1000,
        easing: 'easeInCubic' // general animation time
      },
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 20
        },
        pointLabels: {
          fontSize: 12
        }
      },
    };
}

