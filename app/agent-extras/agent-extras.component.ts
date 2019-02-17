import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-extras',
  templateUrl: './agent-extras.component.html',
  styleUrls: ['./agent-extras.component.css']
})
export class AgentExtrasComponent implements OnInit {
  @Input() agent: Agent;

  constructor() { }

  ngOnInit() {
  }

}
