import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ListDataService } from '../list-data.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  data$ = this.listDataService.getList();
  currentRoute$ = this.route.params.pipe(map((params) => {
    return params['route'] || 'No Route';
  }));

  constructor(private listDataService: ListDataService, private route: ActivatedRoute) { }

}