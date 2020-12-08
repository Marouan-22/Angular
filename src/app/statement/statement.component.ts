import { NgContentAst, Statement } from '@angular/compiler';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.scss']
})

export class StatementComponent implements OnInit {

  constructor() { }
@Input() titel:string = 'kolomnaam';
messagList: string[] = [];
  ngOnInit(): void {
  }

  addMessage(messInput: string){
    
    this.messagList.push(messInput);
 }
}
