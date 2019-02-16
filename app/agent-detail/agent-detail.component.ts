import { Component, OnInit, Input } from '@angular/core';
import { Agent } from '../agent';

@Component({
  selector: 'app-agent-detail',
  templateUrl: './agent-detail.component.html',
  styleUrls: ['./agent-detail.component.css']
})
export class AgentDetailComponent implements OnInit {
  @Input() agent: Agent;

  constructor() { }

  ngOnInit() {
  }

}
