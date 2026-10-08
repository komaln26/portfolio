import { Component, computed, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  language = inject(Language)
  title = {
    en: { title: 'Projects' },
    ja: { title: '作品' }
  }
  t = computed(() => this.title[this.language.lang()])
  projects = [
    {
      id: 'travel-planner',
      name: 'Japan travel planner',
      stack: 'React · TypeScript',
      github: 'https://github.com/komaln26/japan-trip-planner',
      status: { en: 'In progress', ja: '開発中' },
      desc: {
        en: 'A responsive React app for exploring 24 attractions across Shizuoka, Hiroshima, and Nagoya. Users can filter attractions by city and category, search by name, and save favourites that persist across refreshes. The app includes keyboard-accessible controls and original illustrations for each category. An itinerary builder and trip cost calculator are currently in progress.',
        ja: '静岡・広島・名古屋の観光スポット24か所を探せる、レスポンシブなReactアプリです。都市やカテゴリで絞り込んだり、名前で検索したり、お気に入りを保存したりできます。お気に入りはページを更新しても残ります。キーボード操作に対応しており、カテゴリごとにオリジナルのイラストを用意しました。旅程作成機能と旅行費用の計算機能は現在開発中です。',
      },
    }
  ]
}
