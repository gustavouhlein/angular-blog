import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from './../../data/dataFake';

@Component({
  selector: 'app-card-grande',
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css', './card-grande.responsive.component.css']
})
export class CardGrandeComponent implements OnInit {

	@Input()
	imagem:string = "";
	@Input()
	titulo:string = "";
	@Input()
	descricao:string = "";

	@Input()
	id:string|null = "0";

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
		this.descricao = result.descricao;
	}
}
