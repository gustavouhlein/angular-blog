import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from './../../data/dataFake';

@Component({
  selector: 'app-card-pequeno',
  templateUrl: './card-pequeno.component.html',
  styleUrls: ['./card-pequeno.component.css', './card-pequeno.responsive.component.css']
})
export class CardPequenoComponent implements OnInit {

	@Input()
	id:string = "0";
	@Input()
	imagem:string = "";
	@Input()
	titulo:string = "";

  constructor(
		private route:ActivatedRoute
	) { }

  ngOnInit(): void {
		this.setValuesToComponent(this.id);
  }

	setValuesToComponent(id:string|null) {
		const result = dataFake.filter(publicacao => publicacao.id == id)[0];
		this.titulo = result.titulo;
		this.imagem = result.imagem;
	}
}
