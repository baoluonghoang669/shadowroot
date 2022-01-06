import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaginateComponent } from './page-paginate.component';

describe('PagePaginateComponent', () => {
  let component: PagePaginateComponent;
  let fixture: ComponentFixture<PagePaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePaginateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
