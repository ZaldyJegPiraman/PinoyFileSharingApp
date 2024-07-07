import { Component, OnInit } from '@angular/core';
import { EbookDetailService } from '../../shared/ebook-detail.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { response } from 'express';
import { EbookDetail } from '../../shared/ebook-detail.model' ;
import { ToastrService } from 'ngx-toastr';
declare var $: any; 

@Component({
  selector: 'app-ebook-detail-form',
  templateUrl: './ebook-detail-form.component.html',
  styleUrl: './ebook-detail-form.component.css'
})
export class EbookDetailFormComponent implements OnInit {
  IsmodelShow: boolean;
  constructor(public service: EbookDetailService, private toastr: ToastrService){
  }

  ngOnInit(): void {
   
  }

  onSubmit(form: NgForm){
      if(this.service.formData.Id == 0){
        this.insertRecord(form);
      }
      else{
        this.updateRecord(form);
      }
  }

  insertRecord(form: NgForm){
    this.service.formData.FileURL = 'www.google.com';
    this.service.formData.ImageUrl = 'www.google.com';
    this.service.formData.ThumbnailUrl = 'www.google.com';
    this.service.formData.Summary = '123';
    this.service.postEbookDetail().subscribe(

      (response) => {
        this.resetForm(form);
        this.service.refreshList();
        $("#signup-modal").modal("hide");
        this.toastr.success('Submitted successfully','Ebook Detail Register');
      },
      (error) => {
        console.log(error);
      }
    )
  }

  updateRecord(form: NgForm){
    this.service.putEbookDetail().subscribe(

      (response) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Updated successfully','Ebook Detail Register');
      },
      (error) => {
        console.log(error);
      }
    )
  }
  resetForm(form: NgForm){
    form.form.reset();
    this.service.formData = new EbookDetail();
  }



}
