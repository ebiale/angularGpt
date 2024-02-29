import {Routes} from '@angular/router';
import {DashboardLayoutComponent} from './presentation/layouts/dashboard-layout/dashboard-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'orthography',
        loadComponent: () =>
          import(
            './presentation/pages/orthography-page/orthography-page.component'
            ),
        data: {
          icon: 'fa-solid fa-spell-check',
          title: 'Orthography',
          description: 'Correct orthography',
        },
      },
      {
        path: 'pros-cons',
        loadComponent: () =>
          import('./presentation/pages/pros-cons-page/pros-cons-page.component'),
        data: {
          icon: 'fa-solid fa-code-compare',
          title: 'Pros & Cons',
          description: 'Compare pros and cons',
        },
      },
      {
        path: 'pros-cons-stream',
        loadComponent: () =>
          import(
            './presentation/pages/pros-cons-stream-page/pros-cons-stream-page.component'
            ),
        data: {
          icon: 'fa-solid fa-water',
          title: 'As stream',
          description: 'With messages streams',
        },
      },
      {
        path: 'translate',
        loadComponent: () =>
          import('./presentation/pages/translate-page/translate-page.component'),
        data: {
          icon: 'fa-solid fa-language',
          title: 'Translate',
          description: 'Texts to other languages',
        },
      },
      {
        path: 'text-to-audio',
        loadComponent: () =>
          import(
            './presentation/pages/text-to-audio-page/text-to-audio-page.component'
            ),
        data: {
          icon: 'fa-solid fa-podcast',
          title: 'Text to audio',
          description: 'Convert text to audio',
        },
      },
      {
        path: 'audio-to-text',
        loadComponent: () =>
          import(
            './presentation/pages/audio-to-text/audio-to-text.component'
            ),
        data: {
          icon: 'fa-solid fa-comment-dots',
          title: 'Audio to text',
          description: 'Convert audio to text',
        },
      },
      {
        path: 'image-generation',
        loadComponent: () =>
          import(
            './presentation/pages/image-generation-page/image-generation-page.component'
            ),
        data: {
          icon: 'fa-solid fa-image',
          title: 'Images',
          description: 'Generate images',
        },
      },
      {
        path: 'image-tuning',
        loadComponent: () =>
          import(
            './presentation/pages/image-tuning-page/image-tuning-page.component'
            ),
        data: {
          icon: 'fa-solid fa-wand-magic',
          title: 'Edit images',
          description: 'Continue generation',
        },
      },

      {
        path: 'assistant',
        loadComponent: () =>
          import('./presentation/pages/assistant-page/assistant-page.component'),
        data: {
          icon: 'fa-solid fa-user',
          title: 'Assistant',
          description: 'Assistant info',
        },
      },
      {
        path: '**',
        redirectTo: 'orthography',
        pathMatch: 'full',
      },
    ],
  },
];
