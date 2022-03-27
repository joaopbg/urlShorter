import { Component, OnInit } from '@angular/core';
import { BitlyService } from 'src/app/services/bitly.service';

@Component({
  selector: 'app-shorter-form',
  templateUrl: './shorter-form.component.html',
  styleUrls: ['./shorter-form.component.scss']
})
export class ShorterFormComponent implements OnInit {

  constructor(private bitlyService: BitlyService) { }

  ngOnInit(): void {
  }

}
