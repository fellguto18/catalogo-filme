import { inserirFilme } from "../repository/filmeRepository.js";

import { Router } from "express";
const server = Router();



server.post('./filme', async (req,resp) =>{
    try{
        const novoFilme = req.body;

        if(!novoFilme.nome){
            throw new Error('Nome do filme é obrigatorio!');
        }

        if(!novoFilme.sinopse){
            throw new Error('Sinopse do filme é obrigatorio!');
        }

        if(!novoFilme.avaliacao == undefined || novoFilme.avaliacao < 0){
            throw new Error('Avaliacao do filme é obrigatorio!');
        }

        if(!novoFilme.lancamento){
            throw new Error('Lancamento do filme é obrigatorio!');
        }

        if(!novoFilme.disponivel){
            throw new Error('Campo Disponivel é obrigatorio!');
        }

        if(!novoFilme.usuario){
            throw new Error('Usuario nao logado!');
        }





        
        const filmeInserido = await inserirFilme(novoFilme);

        resp.send(filmeInserido)
    }
    catch(err){
        resp.status(400).send({
            erro:err.message 
        })
    }
})




export default server;