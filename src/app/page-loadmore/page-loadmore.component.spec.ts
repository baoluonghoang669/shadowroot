import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoadmoreComponent } from './page-loadmore.component';

describe('PageLoadmoreComponent', () => {
  let component: PageLoadmoreComponent;
  let fixture: ComponentFixture<PageLoadmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLoadmoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
