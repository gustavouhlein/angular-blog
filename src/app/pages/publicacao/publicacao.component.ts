import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from './../../data/dataFake';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css', './publicacao.responsive.component.css']
})
export class PublicacaoComponent implements OnInit {

	imagem:string = "";
	titulo:string = "";
	texto:string = "";
	private id:string|null = "0";

  constructor(
		private route:ActivatedRoute
	) { }

  ngOnInit(): void {
		this.route.paramMap.subscribe( value =>
			 this.id = value.get("id")
		)

		this.setValuesToComponent(this.id);
  }

	setValuesToComponent(id:string|null) {
		const result = dataFake.filter(publicacao => publicacao.id == id)[0];

		this.titulo = result.titulo;
		this.imagem = result.imagem;
		this.texto = result.texto;
	}

}
