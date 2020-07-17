import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {
  @Input() title;
  @Input() message;

  constructor() { }

  ngOnInit(): void {
  }

}
