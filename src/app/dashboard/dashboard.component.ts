import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { getISOWeek } from 'date-fns';
import * as Enums from '../helper/enum';

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
}

interface DataItem {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  constructor (
    private httpClient: HttpClient
    ) { 
      this.apiLoaded = httpClient.jsonp(this.enum.GMAPS.GMAP_LINK + this.enum.GMAPS.API_KEY, 'callback').pipe(map(() => true), catchError(() => of(false)),);
    }


  // Important Var
  public enum = Enums;
  public apiLoaded: Observable<boolean>;
  public date = null;
  public loaded = false;
  
  // Fake Data
  public listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' }
      ],
      filterFn: (list: string[], item: DataItem) => list.some(name => item.name.indexOf(name) !== -1)
    },
    {
      name: 'Age',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.age - b.age,
      listOfFilter: [],
      filterFn: null
    },
    {
      name: 'Address',
      sortFn: null,
      sortOrder: null,
      listOfFilter: [
        { text: 'London', value: 'London' },
        { text: 'Sidney', value: 'Sidney' }
      ],
      filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    }
  ];
  
  public listOfData: DataItem[] = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ];


  ngOnInit(): void {
    this.spinnerTimeout();
  }

  // Start End Date on Change
  onSelectedDate(result: Date[]): void {
    console.log('onChange: ', result);
  }

  spinnerTimeout() {
    setTimeout(() => {
      this.loaded = true;
    }, 500);
  }

  filter_fulltime() {

  }

  filter_locum() {

  }

  filter_need_fulltime() {

  }

  filter_need_locum() {

  }

  filter_location() {

  }

  filter_date() {
    
  }

}
