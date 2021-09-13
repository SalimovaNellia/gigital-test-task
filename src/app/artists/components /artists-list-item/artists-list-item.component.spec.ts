import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsListItemComponent } from './artists-list-item.component';

describe('ArtistsListItemComponent', () => {
  let component: ArtistsListItemComponent;
  let fixture: ComponentFixture<ArtistsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
