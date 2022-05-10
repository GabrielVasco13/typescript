import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes>{

    protected template(model: Negociacoes): string {
        return`
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(Negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(Negociacao.data)}</td>
                            <td>${Negociacao.quantidade}</td>
                            <td>${Negociacao.valor}</td>
                        </tr>
                    `;
                
                }).join('')}
            </tbody>
        </table>
    `;
    }

    private formatar(data: Date): String{
       return new Intl.DateTimeFormat()
            .format(data);
    }
}