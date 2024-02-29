import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-audio-to-text',
  standalone: true,
  imports: [],
  templateUrl: './audio-to-text.component.html',
  styleUrl: './audio-to-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AudioToTextComponent {

}
