import { Component, OnInit, AfterViewInit, ViewEncapsulation, Inject } from '@angular/core';
import { compile, detach } from '@syncfusion/ej2-base';
// import { cardBook } from './data-source';
// import { MultiSelect, SelectEventArgs, RemoveEventArgs } from '@syncfusion/ej2-dropdowns';
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';
/**
 * Default Card Component
 */
// tslint:disable:max-line-length
interface FilterKey {
    Code: string;
}
// let card: NodeList; let cardEle: HTMLElement; let cardObj: JSON[] = cardBook as JSON[]; let data: Object[] = []; let multiSelectData: Object[] = []; let searchData: Object[] = [];
let searchValCount: number = 0; let filterCategory: { [key: string]: Object; }[] = [{ Name: 'Client-Side', Code: 'client' }, { Name: 'Server-Side', Code: 'server' }, { Name: 'Front-End', Code: 'ui' }];
let emptyData: boolean = true;



@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent {
    public DataList: any = [];
    public ngOnInit(): void {
        // this.DataList = cardBook;  
    }
    
}