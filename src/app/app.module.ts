import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CondicionaisComponent } from './components/condicionais/condicionais.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ListComponent } from './components/list/list.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ParentComponent,
    ChildComponent,
    DirectivesComponent,
    CondicionaisComponent,
    EventsComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListComponent,
    PipesComponent,
    TwoWayBindingComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
