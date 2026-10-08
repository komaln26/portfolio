import { Component, computed, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.scss',
  templateUrl: './experience.html',
})
export class Experience {
  language = inject(Language)

  text = {
    en: { title: 'Experience', work: 'Work', education: 'Education', certifications: 'Certifications' },
    ja: { title: '経歴', work: '職歴', education: '学歴', certifications: '資格' },
  }
  t = computed(() => this.text[this.language.lang()])

  job = {
    company: 'Innover Digital',
    title: { en: 'Software Developer', ja: 'ソフトウェア開発者' },
    place: { en: 'Bengaluru, India', ja: 'インド・ベンガルール' },
    dates: { en: 'Apr 2022 – Present', ja: '2022年4月〜現在' },
    projects: [
      {
        id: 'parts-ordering',
        kind: { en: 'Client project', ja: 'クライアント案件' },
        name: { en: 'International parts-ordering application', ja: '海外向け部品注文アプリケーション' },
        bullets: {
          en: [
            'Enhanced a customer-facing international parts-ordering application, building and refining 4 UI screens in a 2-person team with one backend developer.',
            'Diagnosed and fixed a performance issue that made the UI unresponsive during filtering, improving responsiveness and load speed.',
            'Provide ongoing production support for multiple customer-facing applications, handling enhancements and issue resolution.',
          ],
          ja: [
            '顧客向けの海外部品注文アプリケーションの改善に携わり、バックエンド担当1名との2人チームで、4つの画面を開発・改善しました。',
            'フィルタリング時にUIが応答しなくなるパフォーマンス問題の原因を調査して修正し、画面の応答性と読み込み速度を改善しました。',
            '顧客向けの複数のアプリケーションで、機能改善や不具合対応を含む本番環境の運用サポートを継続して担当しています。',
          ],
        },
        tags: ['Angular', 'TypeScript'],
      },
      {
        id: 'asp-to-angular',
        kind: { en: 'Client project', ja: 'クライアント案件' },
        name: { en: 'ASP.NET to Angular migration', ja: 'ASP.NETからAngularへの移行' },
        bullets: {
          en: [
            'Migrated multiple legacy ASP.NET pages to Angular using a custom framework, improving page performance by 50%.',
            'Designed scalable, WCAG-compliant front-end components to improve accessibility for users with disabilities.',
            'Wrote and ran 100+ unit and integration tests with Jasmine, increasing test coverage by 35% and reducing bugs by 20%.',
            'Led code reviews and cross-functional collaboration, and mentored 5+ team members on the custom front-end framework, cutting onboarding time by 40%.',
          ],
          ja: [
            '独自フレームワークを使い、複数のレガシーASP.NETページをAngularへ移行し、ページのパフォーマンスを50%向上させました。',
            'WCAGに準拠した、拡張しやすいフロントエンドコンポーネントを設計し、障害のあるユーザーのアクセシビリティを向上させました。',
            'Jasmineで100件以上の単体テスト・結合テストを作成・実行し、テストカバレッジを35%向上、バグを20%削減しました。',
            'コードレビューと部門横断の連携をリードし、5名以上のメンバーに独自フロントエンドフレームワークを指導して、オンボーディング期間を40%短縮しました。',
          ],
        },
        tags: ['Angular', 'ASP.NET', 'Jasmine', 'WCAG 2.1'],
      },
      {
        id: 'timesheet',
        kind: { en: 'Internal project', ja: '社内プロジェクト' },
        name: { en: 'Internal timesheet-tracking tool', ja: '社内タイムシート管理ツール' },
        bullets: {
          en: [
            'Built the frontend of an internal timesheet-tracking tool in React, used to monitor hours spent across projects.',
            'Owned frontend development as the primary contributor in a 4-person team.',
            'Handed the work over mid-development when reassigned to a client project; the tool was completed by another team and is now in active internal use.',
          ],
          ja: [
            'プロジェクトごとの作業時間を管理する社内向けタイムシート管理ツールのフロントエンドを、Reactで開発しました。',
            '4人チームの中心メンバーとして、フロントエンド開発を担当しました。',
            '開発の途中でクライアント案件へ異動したため引き継ぎを行い、その後は別のチームが完成させ、現在も社内で利用されています。',
          ],
        },
        tags: ['React'],
      },
    ],
  }

  education = [
    {
      id: 'reva',
      degree: { en: 'B.Tech in Computer Science and Engineering', ja: 'B.Tech(コンピュータサイエンス工学)' },
      school: { en: 'Reva University', ja: 'REVA大学' },
      dates: { en: '2018 – 2022', ja: '2018年〜2022年' },
      grade: { en: 'CGPA 8.28', ja: 'CGPA 8.28' },
    },
  ]
}