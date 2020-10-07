import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCollectionComponent } from './best-collection.component';

describe('BestCollectionComponent', () => {
  let component: BestCollectionComponent;
  let fixture: ComponentFixture<BestCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
