import { Component, computed, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  language = inject(Language)
  text = {
    en: { line1: 'Web engineer', line2: 'building accessible, reliable web applications', view: 'View work', projects: 'View projects', sub: 'Open to opportunities in Japan' },
    ja: { line1: 'Webエンジニア', line2: 'アクセシブルで信頼性の高いWebアプリケーションを作る', view: '職務経歴を見る', projects: '作品を見る', sub: '日本での就職を目指しています' }
  }

  t = computed(() => this.text[this.language.lang()])
}
