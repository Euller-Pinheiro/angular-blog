import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOwtmyL2NL5_JyHAJDrpMtxcUMDSBN8DpQ1DqH2vScAr2onfIl010iOZ9_f5SkChq86o&usqp=CAU"
  @Input()
  contentTitle:string = "Capitão América."
  @Input()
  contentDescription:string = "Texto sobre o capitão america"
  private Id:string | null= "0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.Id = value.get("Id")
    )

    this.setValuesToComponent(this.Id)
  }
  setValuesToComponent(Id:string | null ){
    const result = dataFake.filter(article => article.Id == Id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
