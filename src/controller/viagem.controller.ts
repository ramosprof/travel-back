import { Request, Response } from "express";
import { ViagemService } from "../services/viagem.service";
import { AuthPayload } from "../tipos/auth-payload";

const viagemService = new ViagemService();

export class ViagemController{

    async create(req: Request,res: Response)
    {

        const user =
            res.locals.user as AuthPayload;

        const dados = req.body;
        await viagemService.create(dados,user.id);
        res.status(200).send();
    }

    async delete(req: Request, res: Response)
    {
           const user =
            res.locals.user as AuthPayload;

        const id = Number(req.params.id);
        await viagemService.delete(id,user.id);
        res.status(200).send();
    }

    async update(req:Request, res:Response)
    {

        const user =
            res.locals.user as AuthPayload;

        const id = Number(req.params.id);
        const dados = req.body;
        await viagemService.update(id,user.id,dados);
        res.status(200).send();
    }

    async findAll(req:Request, res:Response)
    {
        const user =
            res.locals.user as AuthPayload;

        const viagens = await viagemService.findAll(user.id);
        res.status(200).json(viagens);
    }

    async findById(req:Request, res:Response)
    {
        
        const user =
            res.locals.user as AuthPayload;
        const id = Number(req.params.id);
        const viagem = await viagemService.findById(id,user.id);
        res.status(200).json(viagem);
    }


    

}