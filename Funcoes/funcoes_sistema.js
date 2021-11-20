
import {retorno} from "../Dados/elementos-html.js"
import empresas from "../Dados/dados_administradoras.js"
import {inputTipoCredito, inputValorCredito, inputPrazo} from "../Dados/dados.js"


let menor_parcela = 999999999999

let div = document.createElement(`div`)
    div.classList.add("dinamico")


const apresentar_oferta = (planos) => {  
    
    for (let plano of planos){
        let empresa = plano.Empresa;
        let credito = plano.Valor_do_crédito_R$;
        let tipoCredito = plano.Tipo_Crédito;
        let prazo = plano.Prazo;
        let parcela = plano.Parcela_R$;
        let taxa_adm = plano.Taxa_Administrativa
        let valorTotal = plano.Valor_Total_c_taxa;
        let descricao = plano.Descricao;
        
        
        switch (tipoCredito){
            case "1": tipoCredito = "Automóvel";
                break;
            case "2": tipoCredito = "Moto";
                break;
            case "3": tipoCredito = "Imóvel";
                break;
        }
       
        div.innerHTML += `
            <div id="plano">
                    <ul>
                        <li>Empresa: ${empresa}</li>
                        <li>Crédito: ${credito}</li>
                        <li>Tipo de uso: ${tipoCredito}</li>
                        <li>Parcela: ${Number(parcela).toFixed(2)}</li>
                        <li>Prazo: ${prazo}</li>
                        <li>Valor total a pagar: ${valorTotal}</li>
                        <li>Taxa administrativa total: ${taxa_adm}</li>
                        <li>Pontos positivos do plano: ${descricao}</li>
                    </ul>
            </div>
            `
        retorno.appendChild(div)

        //Aproveitando para Localizar qual a menor parcela de todas)    
        if (parcela <= menor_parcela) {
            menor_parcela = parcela;
        }
    }

        melhor_oferta(planos)
}
    
function melhor_oferta (planos) {
    //Montar a oferta com MENOR Parcela

    for (let plano of planos){
        
        if (plano.Parcela_R$ == menor_parcela) {
            let empresa = plano.Empresa;
            let credito = plano.Valor_do_crédito_R$;
            let tipoCredito = plano.Tipo_Crédito;
            let prazo = plano.Prazo;
            let parcela = plano.Parcela_R$;
            let taxa_adm = plano.Taxa_Administrativa;
            let valorTotal = plano.Valor_Total_c_taxa;
            let descricao = plano.Descricao;

            
            switch (tipoCredito){
                case "1": tipoCredito = "Automóvel";
                    break;
                case "2": tipoCredito = "Moto";
                    break;
                case "3": tipoCredito = "Imóvel";
                    break;
            }

            div.innerHTML += `
                <div id="melhor_plano">
                    <h3> Melhor oferta </h3>
                    <ul>
                        <li>Empresa: ${empresa}</li>
                        <li>Crédito: ${credito}</li>
                        <li>Tipo de uso: ${tipoCredito}</li>
                        <li>Parcela: ${Number(parcela).toFixed(2)}</li>
                        <li>Prazo: ${prazo}</li>
                        <li>Valor total a pagar: ${valorTotal}</li>
                        <li>Taxa administrativa total: ${taxa_adm}</li>
                        <li>Pontos positivos do plano: ${descricao}</li>
                    </ul>
                </div>
                `
            retorno.appendChild(div)
        }
    }
}

const montar_plano = (empresas, tipoCredito, valorCredito, prazo) => {

    const array_planos = []

    for (const empresa of empresas) {

        if (tipoCredito == "1" && empresa.auto == true){
           
            let taxa = empresa.taxacarro;
            let valorCalculo = valorCredito
       
            let VtotalCredito = valorCalculo += valorCalculo * (taxa / 100)
            let parcela =  VtotalCredito / prazo;
        
            var plano = {
                Empresa: empresa.nome, 
                Parcela_R$: parcela, 
                Valor_do_crédito_R$: valorCredito, 
                Prazo: prazo,
                Taxa_Administrativa: (taxa + "%"),
                Valor_Total_c_taxa: VtotalCredito,
                Tipo_Crédito: tipoCredito,
                Descricao: empresa.descricao
            }
            
            array_planos.push(plano);
            
        } else if (tipoCredito == "2" && empresa.moto == true){
            
            let taxa = empresa.taxamoto;
            let valorCalculo = valorCredito
       
            let VtotalCredito = valorCalculo += valorCalculo * (taxa / 100)
            let parcela =  VtotalCredito / prazo;
            
            var plano = {
                Empresa: empresa.nome, 
                Parcela_R$: parcela, 
                Valor_do_crédito_R$: valorCredito, 
                Prazo: prazo,
                Taxa_Administrativa: (taxa + "%"),
                Valor_Total_c_taxa: VtotalCredito,
                Tipo_Crédito: tipoCredito,
                Descricao: empresa.descricao
            }
            
            array_planos.push(plano);

    
        } else if (tipoCredito == "3" && empresa.imovel == true){
            let taxa = empresa.taxaimovel;
            let valorCalculo = valorCredito
        
            let VtotalCredito = valorCalculo += valorCalculo * (taxa / 100)
            let parcela =  VtotalCredito / prazo;
                
            var plano = {
                Empresa: empresa.nome, 
                Parcela_R$: parcela, 
                Valor_do_crédito_R$: valorCredito, 
                Prazo: prazo,
                Taxa_Administrativa: (taxa + "%"),
                Valor_Total_c_taxa: VtotalCredito,
                Tipo_Crédito: tipoCredito,
                Descricao: empresa.descricao
            }
            
            array_planos.push(plano);
            }
    }

    return array_planos
}

function calcular (e){

    let tipoCredito = inputTipoCredito.value
    let valorCredito = Number(inputValorCredito.value)
    let prazo = Number(inputPrazo.value)

    let planos = montar_plano(empresas, tipoCredito, valorCredito, prazo);
    
    apresentar_oferta(planos)
}

export
{   
    calcular
}