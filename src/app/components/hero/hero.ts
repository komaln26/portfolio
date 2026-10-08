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
    en: { line1: 'Frontend developer', line2: 'building careful interfaces', view: 'View work', resume: 'Resume', sub: 'Open to opportunities in Japan' },
    ja: { line1: 'フロントエンド開発者', line2: '丁寧なインターフェースを作る', view: '作品を見る', resume: '履歴書', sub: '日本での就職を目指しています' }
  }

  t = computed(() => this.text[this.language.lang()])
}
