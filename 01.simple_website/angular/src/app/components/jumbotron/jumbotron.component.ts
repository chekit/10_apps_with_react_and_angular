import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  public jbtHeading: string = 'Hello world!';
  public jbtText: string = 'Angular Material buttons are native <button> or <a> elements enhanced with Material Design styling and ink ripples.';
  public jbtButton: string = 'Read More';
  constructor() { }

  ngOnInit() {
  }

}
