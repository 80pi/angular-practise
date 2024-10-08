import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StaticPageComponent } from './static-page/static-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StaticPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practise angular';
  message = 'parent message';
}
