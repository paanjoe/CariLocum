import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';
import { CoolTheme } from './CoolTheme';
import { ThemeOption } from 'ngx-echarts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = [1, 2, 3, 4];
  effect = 'scrollx';
  likes = 0;
  dislikes = 0;
  time = formatDistance(new Date(), new Date());
  imageUrl = 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  options: any;
  theme!: string | ThemeOption;
  coolTheme = CoolTheme;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.options = {
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
  }

  like(): void {
    this.likes = 1;
    this.dislikes = 0;
  }

  dislike(): void {
    this.likes = 0;
    this.dislikes = 1;
  }
  
  gotoDashboard() {
    this.router.navigate(['/home']);
  }
}
