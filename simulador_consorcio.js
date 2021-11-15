import empresas from "./Dados/dados_administradoras.js";
import {montar_plano, montar_oferta} from "./Funcoes/funcoes_sistema.js"


const tipoCredito = document.querySelector("#tipo-credito").value
const valorCredito= document.querySelector("#valor-credito").value
const prazo= document.querySelector("#prazo").value

const submit = document.querySelector("#submit")
const retorno = document.querySelector("#retorno")
/*-----------------------------------------------------------------*/

submit.addEventListener("click", ( )=>{

    let planos = montar_plano(empresas, tipoCredito, valorCredito, prazo);
    let ofertas = montar_oferta(planos);


    console.log(ofertas)
    retorno.innerText = ofertas

})

 
