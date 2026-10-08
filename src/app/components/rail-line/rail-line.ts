import { afterNextRender, Component, computed, HostListener, inject, signal } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-rail-line',
  styleUrl: './rail-line.scss',
  templateUrl: './rail-line.html',
})
export class RailLine {

  language = inject(Language)
  active = signal('home')

  @HostListener('window:scroll')
  onScroll() {
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
    if (atBottom) {
      const last = [...this.stations].reverse().find(s => document.getElementById(s.id));
      if (last) { this.active.set(last.id); return; }
    }

    const line = 200 + window.innerHeight * 0.25;
    let current = this.stations[0].id;
    for (const s of this.stations) {
      const el = document.getElementById(s.id);
      if (el && el.getBoundingClientRect().top <= line) current = s.id;
    }
    this.active.set(current);
  }

  select(id: string) {
    this.active.set(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  stations = [
    { id: 'home', en: 'Home', ja: 'ホーム' },
    { id: 'about', en: 'About', ja: '概要' },
    { id: 'experience', en: 'Experience', ja: '経歴' },
    { id: 'projects', en: 'Projects', ja: '作品' },
    { id: 'skills', en: 'Skills', ja: '技術' },
    { id: 'contact', en: 'Contact', ja: '連絡' }
  ]

  progress = computed(() =>
    this.stations.findIndex(s => s.id === this.active()) / (this.stations.length - 1))
}
