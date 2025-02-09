import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import { Command } from 'commander';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'Caminho do texto a ser processado')
    .option('-d --destino <string>', 'Caminho da pasta onde salva arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;
        
        if (!texto || !destino) {
            console.error(chalk.red("erro: favor inserir caminho de origem e destino"));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
        } catch (err) {
            console.log(chalk.red("Ocorreu um erro no processamento", err));
        }
    })

program.parse();

function processaArquivo(texto, caminho){
    fs.readFile(texto, 'utf8', (err, data) => {
        try {
            if (err) throw err;
            const resultado = contaPalavras(data);
            criaESalvaArquivo(resultado, caminho);
        } catch (err) {
            console.log(trataErros(err));
        }
    });
    
}

async function criaESalvaArquivo(listaPalavras, caminho) {
    const arquivoNovo = `${caminho}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try {
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log(chalk.green('Arquivo criado'));
    } catch (err) {
        throw err;
    }
}

