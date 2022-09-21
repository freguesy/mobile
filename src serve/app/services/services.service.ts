import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private produtos = [
    {id: 1 , nome:'Betoneira', valor: 5000.00, quantidade:10},
    {id: 2 , nome:'Capacete', valor: 50.00, quantidade:10},
    {id: 3 , nome:'Cerrote', valor: 43.00, quantidade:10},
    {id: 4 , nome:'madeira', valor: 5.00, quantidade:10}
  ]
  constructor() { 
    
  }

  enviarTodosDados(){
    return this.produtos
  
  }

  filtrarDados(id: number){
    const produtoSelecionado = this.produtos.filter(produto => produto.id === id)
    return produtoSelecionado [0]
  }

  recebeDados(dadosRecebidos : any){
    dadosRecebidos.id = this.produtos.length + 1
    this.produtos.push(dadosRecebidos)
  }
  
  deletaDados(dadosRecebidos : any){
    this.produtos.splice(this.produtos.indexOf(dadosRecebidos), 1)
  }
}
