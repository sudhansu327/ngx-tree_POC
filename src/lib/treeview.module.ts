import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TreeviewComponent } from './treeview.component';
import { TreeviewItemComponent } from './treeview-item.component';
import { TreeviewConfig } from './treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './treeview-event-parser';

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        TreeviewComponent,
        TreeviewItemComponent,
        
    ], exports: [
        TreeviewComponent,
    ]
})
export class TreeviewModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    }
}
