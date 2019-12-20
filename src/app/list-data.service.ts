import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IListItem } from './list-item.interface';

@Injectable({ providedIn: 'root'})
export class ListDataService {

  data$ = new BehaviorSubject<IListItem[]>(null);

  constructor() { }

  getList() {
    if (!this.data$.value) {
      this.initData();
    }
    return this.data$.asObservable();
  }

  private initData() {
    const list: IListItem[] = [
      {
        id: 'home',
        name: 'Home',
        route: '/'
      },
      {
        id: 'a',
        name: 'Route A',
        route: '/route-a'
      },
      {
        id: 'b',
        name: 'Route B',
        route: '/route-b'
      },
      {
        id: 'c',
        name: 'Route C',
        route: '/route-c'
      },
      {
        id: 'D',
        name: 'Route D',
        route: '/route-d'
      },
      {
        id: 'e',
        name: 'Route E',
        route: '/route-e'
      },
      {
        id: 'f',
        name: 'Route F',
        route: '/route-f'
      },
    ];

    this.data$.next(list);
  }

}