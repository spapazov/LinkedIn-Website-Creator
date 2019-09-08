import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteMakerComponent } from './website-maker.component';

describe('WebsiteMakerComponent', () => {
  let component: WebsiteMakerComponent;
  let fixture: ComponentFixture<WebsiteMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
