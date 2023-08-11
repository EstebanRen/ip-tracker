import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ip-form',
  templateUrl: './ip-form.component.html',
  styleUrls: ['./ip-form.component.css']
})
export class IpFormComponent {
  @Input() ipSearch: string = '';
  @Output() ipSearchOut: EventEmitter<any> = new EventEmitter();

  formIp: FormGroup;

  ngOnInit() {
    this.formIp.setValue({
      ip: this.ipSearch
    });
  }

  constructor() {
    this.formIp = new FormGroup({
      ip: new FormControl("", [Validators.required])
    });
  }

  onClickShearchIp() {
    this.ipSearchOut.emit(this.formIp.value['ip'])
  }

}
