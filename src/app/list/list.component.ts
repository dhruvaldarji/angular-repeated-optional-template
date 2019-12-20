import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { IListItem } from '../list-item.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: IListItem[];
  @ContentChild(TemplateRef, { static: false }) itemRef;
}