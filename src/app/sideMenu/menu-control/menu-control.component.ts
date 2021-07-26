import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../service/data.service'

@Component({
  selector: 'app-menu-control',
  templateUrl: './menu-control.component.html',
  styleUrls: ['./menu-control.component.css']
})
export class MenuControlComponent implements OnInit {

  // Url: string = "../../service/data.json";
  @Input() bMenuButtonPressed : boolean ;
  aWcNames : Array<Object>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWorkCenterNames().subscribe(
      result => {
        debugger;
        console.log(result);
        this.aWcNames = result;
      },
      error => {
        debugger;
      }
    );

  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    if(changes.bMenuButtonPressed.currentValue){

    } else{

    }
  }

  applyWidthClass():Object{
    if(this.bMenuButtonPressed){
      return {
        'menu-width-removed': false,
        'menu-width-added': true
      }
    } else{
      return {
        'menu-width-removed': true,
        'menu-width-added': false
      }
    }

  }


}
