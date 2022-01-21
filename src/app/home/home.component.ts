import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
import { CoolTheme } from './CoolTheme';
import { ThemeOption } from 'ngx-echarts';
import { Router } from '@angular/router';
import * as Enums from '../helper/enum';
import { CarilocumAPIService } from '../services/carilocum-api.service';
import { Subject, takeUntil } from 'rxjs';
import { Locum } from '../model/locum.interface';
import { Feedback } from '../model/feedback.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor (
    private router: Router,
    private carilocumAPIService: CarilocumAPIService
    ) { }

  // Important Var
  public enum = Enums;
  public destroy$: Subject<boolean> = new Subject<boolean>();
  public locumList: Locum[] = [];
  public feedbackList: Feedback[] = [];
  public feedbackListAll: Feedback [] = [];
  public commentSize: number = 0;
  public currentPage: number = 1;
  public pageLimit: number = 5;
  public loaded: boolean = false;
  public pageload: boolean = false;

  // Fake Data
  public time = formatDistance(new Date(), new Date());
  public imageUrl = 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  public options: any = {
    title: {
      text: 'Total Locum by State',
      subtext: 'Locum Job',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: ['Perlis', 'Kedah', 'Perak', 'Selangor', 'Kuala Lumpur', 'Negeri Sembilan', 'Melaka', 'Johor', 'Terengganu', 'Pahang', 'Kelantan', 'Sabah', 'Sarawak', 'Pulau Pinang']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'Perlis' },
          { value: 5, name: 'Kedah' },
          { value: 15, name: 'Perak' },
          { value: 25, name: 'Selangor' },
          { value: 20, name: 'Kuala Lumpur' },
          { value: 35, name: 'Negeri Sembilan' },
          { value: 30, name: 'Melaka' },
          { value: 40, name: 'Johor' },
          { value: 15, name: 'Terengganu' },
          { value: 25, name: 'Pahang' },
          { value: 20, name: 'Kelantan' },
          { value: 35, name: 'Sabah' },
          { value: 30, name: 'Sarawak' },
          { value: 40, name: 'Pulau Pinang' }
        ]
      }
    ]
  };
  public theme!: string | ThemeOption;
  public coolTheme = CoolTheme;

  
  ngOnInit(): void {
    this.carilocumAPIService.getCountLocum().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.locumList = data;
      }
    });

    this.carilocumAPIService.getCommentAll().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.feedbackListAll = data;
        this.getCommentSize(this.feedbackListAll);
      }
    });

    this.carilocumAPIService.getCommentPagination(this.currentPage, this.pageLimit).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.feedbackList = data;
        this.getCurrentPage(this.currentPage);
      }
    });

    this.spinnerTimeout();
  }

  changePage(data: number) {
    this.currentPage = data;
    this.carilocumAPIService.getCommentPagination(this.currentPage, this.pageLimit).pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => {
        this.feedbackList = data;
        this.getCurrentPage(this.currentPage);
      }
    });
    return this.currentPage;
  }

  getCurrentPage(data: number) {
    this.currentPage = data;
    return this.currentPage;
  }

  getCommentSize(data: Feedback[]) {
    this.commentSize = data.length;
    return this.commentSize;
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.pageload = true;
    }, 500);

    setTimeout(() => {
      this.loaded = true;
    }, 1500);
  }

  /** 
   * DASHBOARD AREA
  **/

  getTotalLocum() {
    let total: number = this.locumList.length;
    return total;
  }

  getTotalJob() {
    let total: number = this.locumList.length;
    return total;
  }

  getTotalIndJob() {
    let total: number = this.locumList.length;
    return total;
  }

  getTotalIndLocum() {
    let total: number = this.locumList.length;
    return total;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
