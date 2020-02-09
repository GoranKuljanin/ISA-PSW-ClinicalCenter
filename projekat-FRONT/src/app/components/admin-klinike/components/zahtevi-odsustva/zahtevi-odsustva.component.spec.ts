import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahteviOdsustvaComponent } from './zahtevi-odsustva.component';

describe('ZahteviOdsustvaComponent', () => {
  let component: ZahteviOdsustvaComponent;
  let fixture: ComponentFixture<ZahteviOdsustvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZahteviOdsustvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahteviOdsustvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
