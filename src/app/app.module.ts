import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { CreatePostComponent } from './create-post/create-post.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';



const appRoutes: Routes = [
  { path: 'create', component: CreatePostComponent},
  { path: '', component: PostListComponent}]


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CreatePostComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
