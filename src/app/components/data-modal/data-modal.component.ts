import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Details} from '../../../core/model';

@Component({
  selector: 'app-data-modal',
  templateUrl: './data-modal.component.html',
  styleUrls: ['./data-modal.component.scss']
})
export class DataModalComponent implements OnInit {
  @Input() loading: boolean;
  @Input() data: Details;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
