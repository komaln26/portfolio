import { Component, signal } from '@angular/core';
import { Nav } from './components/nav/nav';
import { RailLine } from './components/rail-line/rail-line';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';

@Component({
  imports: [
    Nav,
    RailLine,
    Hero,
    About,
    Projects,
    Skills,
    Contact,
    Experience
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');
}
