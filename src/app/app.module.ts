import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Login/login.component';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//https://www.youtube.com/watch?v=MNKVqYMS6E4

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
       {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full'
       },
       {
         path:'login',component:LoginComponent
       },
      // {
      //   path:'posts',component:PostsComponent
      // {
      //        path:'',
      //        redirectTo: 'posts',
      //        pathMatch: 'full'
      //      },
      //      {
      //        path:'posts',component:PostsComponent
      //      }
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
