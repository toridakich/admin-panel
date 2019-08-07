import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../service-provider.model';
import { ServiceProviderService } from '../services/service-provider.service';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {

  serviceProviders: Array<any>;

  constructor( ) {
    this.serviceProviders = [
      {
        name: 'Joe',
        lastName: 'Soap',
        email: 'joe@mail.com',
        cellPhone: 828073593,
        numberOfListings: 5
      },
      {
        name: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        cellPhone: 828073545,
        numberOfListings: 15
      }
    ];
  }

  ngOnInit() {
  }

}
