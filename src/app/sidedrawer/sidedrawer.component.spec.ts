/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SidedrawerComponent } from './sidedrawer.component';

describe('SidedrawerComponent', () => {
  let component: SidedrawerComponent;
  let fixture: ComponentFixture<SidedrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidedrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidedrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
