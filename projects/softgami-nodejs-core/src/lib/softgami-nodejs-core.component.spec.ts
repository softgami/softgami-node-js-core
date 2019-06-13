import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftgamiNodejsCoreComponent } from './softgami-nodejs-core.component';

describe('SoftgamiNodejsCoreComponent', () => {
  let component: SoftgamiNodejsCoreComponent;
  let fixture: ComponentFixture<SoftgamiNodejsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftgamiNodejsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftgamiNodejsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
