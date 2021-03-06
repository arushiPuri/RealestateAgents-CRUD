import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentExtrasComponent } from './agent-extras/agent-extras.component';

@NgModule({
  declarations: [
    AppComponent,
    AgentsComponent,
    AgentDetailComponent,
    AgentExtrasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
