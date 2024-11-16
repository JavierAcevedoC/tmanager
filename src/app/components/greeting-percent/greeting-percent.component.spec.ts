import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingPercentComponent } from './greeting-percent.component';

describe('GreetingPercentComponent', () => {
  let component: GreetingPercentComponent;
  let fixture: ComponentFixture<GreetingPercentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingPercentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
