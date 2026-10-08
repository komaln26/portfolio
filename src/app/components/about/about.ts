import { Component, computed, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {

  language = inject(Language)
  text = {
    en: {
      title: 'About',
      body1: "Hi, I'm Komal, a web engineer from India. I earned my bachelor's degree in Computer Science Engineering at Reva University and have spent the last four and a half years building web applications across multiple client projects, primarily using Angular, TypeScript, and JavaScript. I've also worked with React on internal company projects.",
      body2: "Outside of work, you'll usually find me at the gym or playing video games. I'm also learning Japanese and recently passed the JLPT N3. My goal is to work in Japan, and I'm currently expanding into backend development to grow into a full-stack engineer.",
      photoAlt: 'Photo of Komal N'
    },
    ja: {
      title: '概要',
      body1: 'はじめまして、コマルです。インド出身のWebエンジニアです。REVA大学でコンピュータサイエンス工学の学士号を取得し、この4年半、複数のクライアント案件でWebアプリケーションを開発してきました。主にAngular、TypeScript、JavaScriptを使用しており、社内プロジェクトではReactを扱った経験もあります。',
      body2: '休日はジムに行ったり、ゲームをしたりしています。日本語も勉強中で、最近JLPT N3に合格しました。日本で働くことが目標で、現在はバックエンド開発にも学びを広げ、フルスタックエンジニアへの成長を目指しています。',
      photoAlt: 'プロフィール写真'
    }
  }
  t = computed(() => this.text[this.language.lang()])

}
