import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PollPartyComponent } from './pollparty.component';

describe('PollPartyComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PollPartyComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PollPartyComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'poll-party'`, () => {
    const fixture = TestBed.createComponent(PollPartyComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('poll-party');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PollPartyComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('poll-party app is running!');
  });
});
