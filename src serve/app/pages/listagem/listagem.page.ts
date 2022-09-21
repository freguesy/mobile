import { Component, OnInit } from '@angular/core';
import {ServicesService} from 'src/app/services/services.service'

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
 public todosDados : any
  constructor( private todosProdutos: ServicesService) {
    this.todosDados = this.todosProdutos.enviarTodosDados()
    
   }

  ngOnInit() {}

}
