import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUri;

@Injectable()
export class PostService {

  uri : string;
  constructor(private http: Http) { 
  }

  // Get all posts from the API
  getAllPosts() {
    console.log("uri",this.uri);
    return this.http.get( API_URL +'/getpost')
      .map(res => res.json());
  }
  savePost(formData) {
    console.log("DATA", formData);
    return this.http.post(API_URL+'/savepost', formData).map(res => res.json());
  }

  updateVote(data) {
    return this.http.post(API_URL+ '/likeDislikepost', data).map(res => res.json());
  }
}
