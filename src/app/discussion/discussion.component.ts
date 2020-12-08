import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Statement } from '@angular/compiler';

interface statement {
  text:string
}

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {

  public parameterValue:string;

  constructor(
    public route: ActivatedRoute,
    private location: Location
  ) { 

  }
  object: statement[] = []; 
  numlist: number[] = [1,2,3];
  goBack(): void {
    this.location.back();
  }
  ngOnInit() {
    this.route.params.subscribe(parameter => {
      this.parameterValue = parameter.id
      //this._router.navigate(['first/4'])
      //this.parameterValue = parameter.parameter
    })

  }

}
