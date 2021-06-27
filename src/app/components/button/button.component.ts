import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input() text ="";
  @Input() color="";
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
    console.log("click");

  } 
}
