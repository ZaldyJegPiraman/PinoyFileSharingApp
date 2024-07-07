import { Injectable } from '@angular/core';


//import { HttpClient } from '@angular/common/http'
import { EbookDetail } from './ebook-detail.model';
import { response } from 'express';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EbookDetailService {

  constructor(private http: HttpClient) { }
  readonly baseUrl = 'https://localhost:7160/api/ebooks';
  formData: EbookDetail = new EbookDetail();
  list: EbookDetail[] = [];

  postEbookDetail() {

    return this.http.post(this.baseUrl, this.formData);

  }

  refreshList() {
    return this.http.get(this.baseUrl).toPromise()
      .then((response) => (
        this.list = response as EbookDetail[],
        console.log(this.list)
      ));


    //return this.http.get<EbookDetail[]>(this.baseUrl).subscribe(data => this.list = data as EbookDetail[]  );
  }

  putEbookDetail() {
    return this.http.put(this.baseUrl + '/' + this.formData.Id, this.formData);
  }

  deleteEbookDetail(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
