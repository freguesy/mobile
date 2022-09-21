import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public produtoSelecionado : any
  public modoDeEdicao = false
  constructor(
    private route:ActivatedRoute,
    private detalhesProduto: ServicesService
    ) { }

      
  ngOnInit() {
    const id : number = Number(this.route.snapshot.paramMap.get('id'))
    if (id > 0){
      this.produtoSelecionado = this.detalhesProduto.filtrarDados(id)
    } else{
      this.produtoSelecionado = {id, nome: "", valor: 0.0}
      this.modoDeEdicao = true
  }
  }
  
  iniciarEdicao(){
    this.modoDeEdicao = true
  }

  encerrarEdicao(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'))

    if(id > 0){
      this.modoDeEdicao = false
    }
    else{
      this.detalhesProduto.recebeDados(this.produtoSelecionado)
      this.modoDeEdicao = false
    }
  }

  deletarServico(){
    this.detalhesProduto.deletaDados(this.produtoSelecionado)
  }


}
