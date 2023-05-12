import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ListComponent } from './components/list/list.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { ChildComponent } from './components/child/child.component';
import { CondicionaisComponent } from './components/condicionais/condicionais.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventsComponent } from './components/events/events.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';


const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'list', component: ListComponent },
  { path: 'change-number', component: ChangeNumberComponent },
  { path: 'child', component: ChildComponent },
  { path: 'condicionais', component: CondicionaisComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'emitter', component: EmitterComponent },
  { path: 'events', component: EventsComponent },
  { path: '', component: ParentComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'list/:id', component: ItemDetailComponent },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


