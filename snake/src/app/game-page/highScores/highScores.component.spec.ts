import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoresComponent } from './highScores.component';

describe('HighscoresComponent', () => {
  let component: HighScoresComponent;
  let fixture: ComponentFixture<HighScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
