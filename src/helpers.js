function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, index) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        if(duplicadas){
            textoFinal += `Palavras duplicadas no parágrafo ${index + 1}: ${duplicadas} \n`;
        }
    });
    return textoFinal;
}

function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

export { montaSaidaArquivo };