// En src/app/posts/post-list/post-list.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts = [
    { id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet.' },
    { id: 2, title: 'Post 2', content: 'Consectetur adipiscing elit.' },
    { id: 3, title: 'Post 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  selectedPost: any;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(post: any): void {
    console.log('Clic en post:', post);
    this.selectedPost = post;
    console.log('selectedPost actualizado:', this.selectedPost);
  }
}
