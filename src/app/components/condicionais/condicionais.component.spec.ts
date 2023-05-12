import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionaisComponent } from './condicionais.component';

describe('CondicionaisComponent', () => {
  let component: CondicionaisComponent;
  let fixture: ComponentFixture<CondicionaisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondicionaisComponent]
    });
    fixture = TestBed.createComponent(CondicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
