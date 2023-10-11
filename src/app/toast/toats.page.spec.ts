import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToatsPage } from './toast.page';

describe('ToatsPage', () => {
  let component: ToatsPage;
  let fixture: ComponentFixture<ToatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
