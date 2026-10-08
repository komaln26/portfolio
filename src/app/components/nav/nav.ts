import { Component, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  imports: [],
  selector: 'app-nav',
  styleUrl: './nav.scss',
  templateUrl: './nav.html',
})
export class Nav {

  language = inject(Language)


}
