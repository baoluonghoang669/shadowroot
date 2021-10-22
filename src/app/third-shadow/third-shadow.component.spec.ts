import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdShadowComponent } from './third-shadow.component';

describe('ThirdShadowComponent', () => {
  let component: ThirdShadowComponent;
  let fixture: ComponentFixture<ThirdShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdShadowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
