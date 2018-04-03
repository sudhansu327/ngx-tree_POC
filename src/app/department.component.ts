import { Component, OnInit } from '@angular/core';
import { TreeviewConfig } from '../lib/treeview-config';
import { TreeviewItem } from '../lib/treeview-item';
import { departmentService } from './department.service';
declare var $: any;

@Component({
    selector: 'ngx-book',
    templateUrl: './department.component.html',
    providers: [
        departmentService
    ]
})
export class departmentComponent implements OnInit {
    dropdownEnabled = false;
    items: TreeviewItem[];
    values: number[];
    department:string;
    dfr:string;
    config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: false,
        hasCollapseExpand: false,
        decoupleChildFromParent: true,
        maxHeight: 1000
        
    });

    buttonClasses = [
        'btn-outline-primary',
        'btn-outline-secondary',
        'btn-outline-success',
        'btn-outline-danger',
        'btn-outline-warning',
        'btn-outline-info',
        'btn-outline-light',
        'btn-outline-dark'
    ];
    buttonClass = this.buttonClasses[0];

    constructor(
        private service: departmentService
    ) { }

    ngOnInit() {
        this.items = this.service.getBooks();
    }
    editResponsibilityCode(val:any){
        let val1=val;
        $("#myModal").modal('show');
        this.department=val.text;
        this.dfr=val.dfr;

    }

    onCheckedChange(){
        $("#myModal").modal('show');
    }
}
