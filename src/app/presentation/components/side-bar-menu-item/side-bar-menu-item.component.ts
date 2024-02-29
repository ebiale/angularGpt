import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-bar-menu-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-bar-menu-item.component.html',
  styleUrl: './side-bar-menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarMenuItemComponent {
  @Input({required: true}) icon!: string;
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) path!: string;

}
