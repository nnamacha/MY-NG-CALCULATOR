import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private API_KEY = "487d5542598940aba0aca76072ae5840";
  private API_ENDPOINT = `https://newsapi.org/v2/everything?q=comics&sortBy=publishedAt&apiKey=${this.API_KEY}`;
  data = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.API_ENDPOINT).subscribe((data) =>{
      console.log(data['articles']);
      this.data = data['articles'];
    });
  }

}