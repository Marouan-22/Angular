import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() tekst:string = 'tekst';
  public counterUp : number = 0;
  public counterDown : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  Up(){
    this.counterUp +=1;
  }
  Down(){
    this.counterDown +=1;
  }

}
