import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondShadowComponent } from './second-shadow.component';

describe('SecondShadowComponent', () => {
  let component: SecondShadowComponent;
  let fixture: ComponentFixture<SecondShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
