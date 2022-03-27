import { Component, OnInit } from '@angular/core';
import { BitlyService } from 'src/app/services/bitly.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-shorter-form',
  templateUrl: './shorter-form.component.html',
  styleUrls: ['./shorter-form.component.scss']
})
export class ShorterFormComponent implements OnInit {

  form !: FormGroup
  private longLink !: String

  constructor(private bitlyService: BitlyService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
  }

  private formInit(){
    this.form = this.fb.group({
      longLink: ['']
    })
  }

  public getLink(){
    this.bitlyService.getLink(this.form.controls['longLink'].value).subscribe( shortLink => {
      let aux = shortLink
      console.log(shortLink)
    })


  }

}
