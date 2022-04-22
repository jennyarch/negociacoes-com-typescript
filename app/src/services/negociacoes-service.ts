import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{

  public obterNegociacoesDoDia(): Promise<Negociacao[]> {
    return fetch('http://localhost:8080/dados')
            .then(res => res.json()) /*  recebeu os dados do backend e converteu pra JSON */
            .then((dados: NegociacoesDoDia[]) => { /*  está recebendo um array do Tipo any */
                return dados.map(dadoDeHoje => { /*  Converte o array , em um novo array onde cada dado de hoje será convertido em negociacao */
                    return new Negociacao(new Date(), dadoDeHoje.vezes, dadoDeHoje.montante)
                })
            })
  }
}