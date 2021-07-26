import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-headcontrol',
  templateUrl: './headcontrol.component.html',
  styleUrls: ['./headcontrol.component.css']
})
export class HeadcontrolComponent implements OnInit {

  bMenuIconPressed : boolean = false;

  @Output() outputEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuIconPress(){

    if(!this.bMenuIconPressed){
      this.bMenuIconPressed = true;
    } else{
      this.bMenuIconPressed = false;
    }

    this.outputEvent.emit(this.bMenuIconPressed);
  }
}
