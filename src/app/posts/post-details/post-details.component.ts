import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {
  @Input() post: any; // Este será el objeto post que se mostrará en los detalles.

  constructor() { }
}
