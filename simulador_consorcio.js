import empresas from "./Dados/dados_administradoras.js";
import {montar_plano, montar_oferta} from "./Funcoes/funcoes_sistema.js"

const inputTipoCredito = document.querySelector("#tipo-credito")
const inputValorCredito= document.querySelector("#valor-credito")
const inputPrazo= document.querySelector("#prazo")


const submit = document.querySelector("#submit")
const retorno = document.querySelector("#retorno")
/*-----------------------------------------------------------------*/

submit.addEventListener("click", ( )=>{

    let tipoCredito = inputTipoCredito.value
    let valorCredito = Number(inputValorCredito.value)
    let prazo = Number(inputPrazo.value)

    let planos = montar_plano(empresas, tipoCredito, valorCredito, prazo);

    planos.forEach(() => {
        retorno.innerHTML = 
        `
        <h1> - </h1>
        <p> Empresa: ${planos.Empresa} </p>
        <p> Parcela: ${planos.Parcela_R$} </p>
        <p> Prazo: ${planos.Prazo} </p>
        <p> Taxa: ${planos.Taxa_Administrativa} </p>
        `
    })



   //let ofertas = montar_oferta(planos);

})

 
