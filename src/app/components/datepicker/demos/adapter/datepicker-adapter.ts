import {Component, Injectable} from '@angular/core';
import {NgbDateAdapter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

/**
 * Example of a Native Date adapter
 */
@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {

    fromModel(date: Date): NgbDateStruct {
        return date ? {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() || 1} : null;
    }

    toModel(date: NgbDateStruct): Date {
        return date ? new Date(date.year, date.month - 1, date.day, 0, 0, 0) : null;
    }
}

@Component({
  selector: 'ngbd-datepicker-adapter',
  templateUrl: './datepicker-adapter.html',

  // NOTE: For this example we are only providing current component, but probably
  // NOTE: you will want to provide your main App Module
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class NgbdDatepickerAdapter {

  model: Date;
  date: {year: number, month: number};

  selectToday() {
    this.model = now;
  }
}
