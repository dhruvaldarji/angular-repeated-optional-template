import { Component, Input } from '@angular/core';
import { IListItem } from '../list-item.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() item: IListItem;

}