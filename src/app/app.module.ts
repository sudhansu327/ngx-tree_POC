import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TreeviewModule } from '../lib/treeview.module';
import { departmentComponent } from './department.component';
import { NgbdTypeaheadBasic } from './typeahead.component';

@NgModule({
  declarations: [
    AppComponent,
    departmentComponent,
    NgbdTypeaheadBasic
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreeviewModule.forRoot()
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
