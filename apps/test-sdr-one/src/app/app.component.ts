import { Component } from '@angular/core';

@Component({
  selector: 'test-sdr-one-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-sdr-one';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
