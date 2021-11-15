



const montar_plano = (empresas, tipoCredito, valorCredito, prazo) => {

    tipoCredito = Number(tipoCredito);
    valorCredito = Number(valorCredito);
    prazo = Number(prazo);

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
            
    console.log(array_planos + "OIIIIIII")

    return array_planos
}



const montar_oferta = (planos) => {
   
    let menor_parcela = 999999999999
    let contador = 0

    for (let plano of planos){
        let empresa = plano.Empresa;
        let credito = plano.Valor_do_crédito_R$;
        let objetivo = plano.Tipo_Crédito;
        let prazo = plano.Prazo;
        let parcela = plano.Parcela_R$;
        let taxa_adm = plano.Taxa_Administrativa
        let valorTotal = plano.Valor_Total_c_taxa;
        let descricao = plano.Descricao;
        contador++

        console.log("Plano: " + contador + "- O plano de R$" + credito + ", para " + objetivo + " na empresa " + empresa + ": \n" + 
        "Prazo:" + prazo + " meses\n" + "Parcelas de: " + parcela + " mensais \n" + "Taxa total de: " + taxa_adm + "\n" + "Valor total a pagar: " + valorTotal)
        console.log ("\n")
        console.log("A vantagem do plano é: " + descricao)
        console.log ("________________________________________________________")
        console.log ("\n")
        

    //Aproveitando para Localizar qual a menor parcela de todas)
        if (parcela <= menor_parcela) {
            menor_parcela = parcela;
        }
    }
    

    //Montar a oferta com MENOR Parcela
    for (let plano of planos){
        
        if (plano.Parcela_R$ == menor_parcela) {
            let empresa = plano.Empresa;
            let credito = plano.Valor_do_crédito_R$;
            let objetivo = plano.Tipo_Crédito;
            let prazo = plano.Prazo;
            let parcela = plano.Parcela_R$;
            let taxa_adm = plano.Taxa_Administrativa;
            let valorTotal = plano.Valor_Total_c_taxa;
            let descricao = plano.Descricao;

                console.log ("_______________________________________________________");
                console.log ("\n");
                console.log ("O plano com menor parcela foi:");
                console.log("\nO plano de " + credito + ", para " + objetivo + ", na empresa " + empresa + " tem: \n" + 
                "Prazo:" + prazo + " meses\n" + "Parcelas de: " + parcela + " mensais \n" + "Taxa total de: " + taxa_adm + "\n" + "Valor total a pagar: " + valorTotal);
                console.log ("\n");
                console.log("A vantagem do plano é: " + descricao);
                console.log ("_______________________________________________________")
        }
    }
}

const apresentar_oferta = (ofertas) =>{

}

export {montar_plano, montar_oferta};