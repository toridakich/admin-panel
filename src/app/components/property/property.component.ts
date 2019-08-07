import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  id: any;
  // propertly: Property= new Property();
  public properties: any;
  public propertly:{};
  
  user: string;
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
    this.propertyService.getListItems().then(res=>{
      console.log(res);
      this.properties=res;
    }).catch(err=>{
      console.log(err);
    })
  }

}
