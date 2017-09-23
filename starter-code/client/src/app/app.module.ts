import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { EntryFormComponent } from './entry-form/entry-form.component';

const routes: Routes = [
  { path: '', component: EntryListComponent},
  { path: 'journal-entries/:id', component: ViewDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    ViewDetailsComponent,
    EntryFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
