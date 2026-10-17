import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { inject } from '@vercel/analytics';

inject({
  beforeSend: (event) => {
    if (localStorage.getItem('skip-analytics') === 'true') {
      return null;
    }
    return event;
  },
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
