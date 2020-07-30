import { Component } from '@angular/core';
import { User } from './user';
import { TicketbookingService } from './ticketbooking.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = ['COMPLETED', 'CANCELLED'];
  cancelstatus = ['ENDUSER', 'OTHERS'];
  reasonHasError=true;
  topicHasError = true;
  submitted = false;
  CancelledReasonvalue = true;
  CancelledOtherDescriptionvalue = true;
  CommentsDisabled = true;
 
  constructor(private _ticketbookingservice : TicketbookingService){}
  userModel = new User('','',0,'','','','');

  validateStatus(value){
        if(value === 'default'){
          this.topicHasError = true;
        }else{
          this.topicHasError = false;
        }
  }

  validateReason(value){
    if(value === 'default'){
      this.reasonHasError = true;
    }else{
      this.reasonHasError = false;
    }
}

  onActiveFields(){
    if( this.userModel.Status.valueOf() === "COMPLETED"){
      this.CommentsDisabled = false;
      this.CancelledReasonvalue = true;
      this.CancelledOtherDescriptionvalue = true;
    }else if(this.userModel.Status.valueOf() === "CANCELLED"){
      this.CancelledReasonvalue = false;
      this.CommentsDisabled = true;
    }
     if(this.userModel.CancelledReason.valueOf() === "OTHERS"){
      this.CancelledOtherDescriptionvalue = false;
      this.CancelledReasonvalue = false;
      this.CommentsDisabled = true;
      }
  }


  onSubmit(){
    this.submitted = true;
    this._ticketbookingservice.enroll(this.userModel)
    .subscribe(
      data => console.log('Success', data),
      error => console.error('Error', error)
      )
      
      if(this.userModel.Status.valueOf() === "COMPLETED"){
        alert('Ticket Booked');
        console.log(this.userModel);
      }else  if(this.userModel.Status.valueOf() === "CANCELLED"){
        alert('Ticket Cancelled');
        console.log(this.userModel);
      }else{
        alert('Ticket not booked');
        console.log("Error", this.userModel);
      }
    }
}
