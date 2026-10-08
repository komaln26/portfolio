import { Service, signal } from '@angular/core';

@Service()
export class Language {

    lang = signal<'en' | 'ja'>('en')

    toggle() {
        this.lang.update(current => current === 'en' ? 'ja' : 'en')
    }
}
