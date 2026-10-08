import { Component, computed, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {

  language = inject(Language)
  title = {
    en: { title: 'Skills' },
    ja: { title: 'スキル' }
  }

  groups = [
    {
      id: 'frontend',
      label: { en: 'Frontend', ja: 'フロントエンド' },
      items: [
        { en: 'Angular', ja: 'Angular' },
        { en: 'React', ja: 'React' },
        { en: 'TypeScript', ja: 'TypeScript' },
        { en: 'JavaScript', ja: 'JavaScript' },
        { en: 'HTML', ja: 'HTML' },
        { en: 'CSS', ja: 'CSS' },
        { en: 'Git', ja: 'Git' },

      ]
    },
    {
      id: 'accessibility',
      label: { en: 'Accessibility', ja: 'アクセシビリティ' },
      items: [
        { en: 'WCAG 2.1', ja: 'WCAG 2.1' },
        { en: 'NVDA', ja: 'NVDA' },
        { en: 'ANDI', ja: 'ANDI' },
      ],
    },
    {
      id: 'learning',
      label: { en: 'Currently learning', ja: '勉強中' },
      items: [
        { en: 'Backend development', ja: 'バックエンド開発' },
        { en: 'Japanese', ja: '日本語 (JLPT N3)' },
      ],
    },
  ]
  t = computed(() => this.title[this.language.lang()])
}

