import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMenusComponent } from './settings-menus.component';

describe('SettingsMenusComponent', () => {
  let component: SettingsMenusComponent;
  let fixture: ComponentFixture<SettingsMenusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsMenusComponent]
    });
    fixture = TestBed.createComponent(SettingsMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
