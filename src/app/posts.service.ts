import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }
  getAllPosts(){
    // return this.http.get('/posts').map((posts)=>{
    //   return posts;
    // })
    return   this.http.get('/routes/get/').pipe(map(posts => {
      return posts;  
    }))
     
  }
}
