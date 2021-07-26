import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { StringToBoolPipe } from '../../pipes/string-to-bool.pipe'

@Component({
  selector: 'app-detail-area',
  templateUrl: './detail-area.component.html',
  styleUrls: ['./detail-area.component.css']
})
export class DetailAreaComponent implements OnInit,  OnDestroy  {

  @Input() bMenuButtonPressed : boolean ;
  serviceData: [] = [];
  bCheckedAll  = false;
  bCheckedAllTwo  = false;

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    console.log("ngonInit called");
    this.dataService.getData().subscribe(
      result => {
        this.serviceData = result.data;
      },
      error => console.log(error)
    );

    window.onbeforeunload = () => this.ngOnDestroy();
  }

  ngDoCheck(){
    console.log("ngDoCheck called");
    debugger;
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    console.log("ngonDestroy called");
  }

  addMarginOnMenuPress(): Object{
    if(this.bMenuButtonPressed){
      return {
          "detailPart-margin-added" : true,
          "detailPart-margin-removed" : false
      }
    } else{
      return {
        "detailPart-margin-added" : false,
        "detailPart-margin-removed" : true
      }
    }
  }

  onSelectAll($event, row, tableControl, oContext){
    let oEvent = {
      currentTarget : {
        checked : false
      }
    };
    if($event.currentTarget.checked){
        var aRows = tableControl.rows;
        if(aRows.length > 1){
          for(var i = 1; i < aRows.length; i++){
            aRows[i].cells[0].firstChild.checked = true;
            oEvent.currentTarget.checked = true;
            this.onSelectRow(oEvent, aRows[i], tableControl);
          }
        }
    } else{
      var aRows = tableControl.rows;
        if(aRows.length > 1){
          for(var i = 1; i < aRows.length; i++){
            aRows[i].cells[0].firstChild.checked = false;
            oEvent.currentTarget.checked = false;
            this.onSelectRow(oEvent, aRows[i], tableControl);
          }
        }
    }
  }

  onSelectRow($event, row, tableControl){
    if($event.currentTarget.checked){
      row.classList.add("rowBackgroundcolor");
    } else{
      row.classList.remove("rowBackgroundcolor");
    }
  }

  onModelChange($event, row){
    debugger;
  }

}
