import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNavigationsComponent } from './carousel-navigations';

describe('CarouselNavigationsComponent', () => {
  let component: CarouselNavigationsComponent;
  let fixture: ComponentFixture<CarouselNavigationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselNavigationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselNavigationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
