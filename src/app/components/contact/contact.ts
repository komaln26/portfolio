import { Component, computed, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  language = inject(Language)

  text = {
    en: {
      title: 'Contact',
      intro: "Interested in working together, or just want to say hi? Feel free to reach out. I'm looking for web engineering roles in Japan.",
    },
    ja: {
      title: '連絡',
      intro: 'ご興味をお持ちいただけましたら、お気軽にご連絡ください。日本でのWebエンジニアのお仕事を探しています。',
    },
  }

  t = computed(() => this.text[this.language.lang()])

  links = [
    { id: 'email', label: 'Email', href: 'mailto:Komalngowda16@gmail.com' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/komaln26' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/komalngowda/' },
  ]
}