import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngb-progressbar-labeled',
  template: `<p><ngb-progressbar type="info" [value]="50">Progress <b>2 of 4</b>...</ngb-progressbar></p>`,
  styles: [`
    ngb-progressbar {
      margin-top: 5rem;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class NgbProgressbarLabeledComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
