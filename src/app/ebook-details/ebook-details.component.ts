import { AfterContentInit, Component, OnInit } from '@angular/core';
import { EbookDetailService } from '../shared/ebook-detail.service';
import { EbookDetail } from '../shared/ebook-detail.model';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ebook-details',
  templateUrl: './ebook-details.component.html',
  styleUrl: './ebook-details.component.css'
})
export class EbookDetailsComponent implements OnInit {
  listx : EbookDetail[];

  constructor(public service: EbookDetailService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.service.refreshList();
   
  }


  addNew() {

    this.service.formData = new EbookDetail();
    this.service.formData.Id = 0;
  }

  populateForm(selectedRecord: EbookDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteEbookDetail(id).subscribe(
        (response) => {
          this.service.refreshList();
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
        (error) => {
          console.log(error);
        });
    }
  }
}
