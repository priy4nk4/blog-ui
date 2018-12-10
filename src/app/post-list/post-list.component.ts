import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts:any = [];

  constructor(private postService: PostService) { }


  ngOnInit() {
    this.postService.getAllPosts().subscribe(data=>{
      this.posts = data.posts;
    })
  }

  updateVote(id,action){
    const data = {
    '_id':id,
    'action':action
    }
    this.postService.updateVote(data).subscribe( resp => {
      console.log(resp);
    })

  }

}
