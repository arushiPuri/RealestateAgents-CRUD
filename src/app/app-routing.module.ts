import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from '../app/agents/agents.component';
import { AgentExtrasComponent } from '../app/agent-extras/agent-extras.component';
import { AgentDetailComponent } from '../app/agent-detail/agent-detail.component';

const routes: Routes = [
  { path: '', component: AgentsComponent },
  { path: 'agent-extras/:id', component: AgentExtrasComponent },
  // { path: 'edit', component: AgentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }