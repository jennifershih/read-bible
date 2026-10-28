import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  GoogleSigninButtonDirective,
  SocialAuthService,
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  imports: [GoogleSigninButtonDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly authService = inject(SocialAuthService);

  readonly user = toSignal(this.authService.authState, { initialValue: null });

  signOut(): Promise<void> {
    return this.authService.signOut();
  }
}
