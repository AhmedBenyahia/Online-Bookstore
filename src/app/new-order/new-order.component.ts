import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  private orderForm: FormGroup;
  private a = 0;
  constructor(private formBuilder: FormBuilder) {
    this.orderForm = this.createForm(formBuilder);
  }

  ngOnInit() {
  }

  createForm(formBuilder: FormBuilder) {
    return formBuilder.group({
      fullAddress: '',
      telephoneNumber: '',
    });
  }

}
