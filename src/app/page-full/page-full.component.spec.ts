import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFullComponent } from './page-full.component';

describe('PageFullComponent', () => {
  let component: PageFullComponent;
  let fixture: ComponentFixture<PageFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
