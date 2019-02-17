import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsComponent } from './agents.component';

describe('AgentComponent', () => {
  let component: AgentsComponent;
  let fixture: ComponentFixture<AgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // describe('#deleteTodoById(id)', () => {

  //   it('should remove todo with the corresponding id') => {
  //     let agents = [{ id: 11, name: 'Tim Heavyside', contactDetails: 452653245, biography: 'Tim Heavyside is a great Agent' },
  //     { id: 12, name: 'Gregor Slek', contactDetails: 452653225, biography: 'Gregor is a great Agent' }]

  //     controller.deleteAgent(12);

  //     expect(deleteAgent(12)).toEqual([{ id: 11, name: 'Tim Heavyside', contactDetails: 452653245, biography: 'Tim Heavyside is a great Agent' }]);
  //   }));

});
