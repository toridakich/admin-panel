import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public bookings: any = [];
  public bookling: {};
  constructor(private bookingService: BookingService) { }



  
  ngOnInit() {
    this.bookingService.getAllBookings().then(res=>{
      console.log(res);
      this.bookings=res;
    }).catch(err=>{
      console.log(err);
    })
  }

}
