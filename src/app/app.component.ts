import { Component, OnInit } from '@angular/core';
import { IPaymentData } from 'src/payment/payment-data';
import { PaymentService } from 'src/payment/payment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'AIBPayment';

  constructor(private payment: PaymentService)
  {}

  model: IPaymentData;

  sendReady:boolean;

  sendTx(): void
  {          
      const form: HTMLFormElement = document.querySelector("#paymentForm");
      var formData = new FormData(form);

      var formObj = {};
      formData.forEach(function (value, key) {
          formObj[key] = value;
      });
      var json = JSON.stringify(formObj);
      
      this.payment.postAmount(json).subscribe(
        (p : IPaymentData) => {                         
            this.model = p;
            this.model.response = JSON.stringify(p, null, 2);
            this.sendReady = true;
        }
      );      
    }

    ngOnInit(): void {
      this.sendReady = false;

      var m = {} as IPaymentData;            
      
      m.chargeTotal = "13.00";
            
      m.txnType = null;
      m.txnDatetime = null;
      m.timezone = null;
      m.storeName = null;
      m.responseSuccessUrl = null;
      m.responseFailUrl = null;
      m.response = null;
      m.paymentForm = null;
      m.mode = null;
      m.hashAlgorithm = null;
      m.hash = null;
      m.currency = null;

      m.response = null;

      this.model = m;      
    }
  }
