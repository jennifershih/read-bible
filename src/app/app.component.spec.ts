import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FooterStubComponent } from './footer/footer.component.stub';
import { HeaderStubComponent } from './header/header.component.stub';
import { TabsStubComponent } from './tabs/tabs.component.stub';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let componentHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        HeaderStubComponent,
        TabsStubComponent,
        FooterStubComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    componentHtml = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-header', () => {
    const headerElement = componentHtml.querySelector('app-header');
    expect(headerElement).toBeTruthy();
  });

  it('should render app-tabs', () => {
    const headerElement = componentHtml.querySelector('app-tabs');
    expect(headerElement).toBeTruthy();
  });

  it('should render app-footer', () => {
    const headerElement = componentHtml.querySelector('app-footer');
    expect(headerElement).toBeTruthy();
  });
});
