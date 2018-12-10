import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor( private postService :PostService, private router :Router) { 
  }

  ngOnInit() {
  }

  sendMessage(blogTitle, blogText, authorName){

    const _blogText = blogText.value;
    const _authorName = authorName.value;
    const _blogTitle = blogTitle.value;
    const postData = {postData: { authorName: _authorName, post: _blogText, title:_blogTitle }}
    console.log("data",postData);

    this.postService.savePost(postData)
    .subscribe( resp =>{
      this.router.navigate(['/'])
      console.log(resp);
    },
    error => {
      debugger;
      console.log("error happened",error);
    })
  }

}
