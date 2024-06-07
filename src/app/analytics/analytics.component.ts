import {Component, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import { Chart, registerables } from 'chart.js';



@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})


export class AnalyticsComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any
) {    Chart.register(...registerables);
}

  public userGrowthLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  public userGrowthData: any[] = [
    { data: [100, 200, 300, 400, 500, 600], label: 'User Growth' }
  ];

  public signupSourcesLabels: string[] = ['Organic', 'Referral', 'Social Media'];
  public signupSourcesData: any[] = [
    { data: [150, 200, 100], label: 'Signups' }
  ];

  public userDemographicsLabels: string[] = ['18-24', '25-34', '35-44', '45-54'];
  public userDemographicsData: any[] = [
    { data: [300, 500, 200, 100], label: 'User Demographics' }
  ];

  public chartOptions: any = {
    responsive: true
  };

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
}
}
