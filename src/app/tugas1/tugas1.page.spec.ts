import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tugas1Page } from './tugas1.page';

describe('Tugas1Page', () => {
  let component: Tugas1Page;
  let fixture: ComponentFixture<Tugas1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Tugas1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
