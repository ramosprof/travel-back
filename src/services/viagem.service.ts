import { prisma } from "../prisma/client";

export class ViagemService{

    async create(dados: {titulo: string; nota: number; imagem: string;}, userId: number)
    {
        await prisma.viagem.create({
            data:{
                ...dados,
                userId,
            },
        });
    }

    async delete(id: number, userId: number)
    {
        await prisma.viagem.delete({
            where: {
                id,
                userId
            },
        });
    }

    async findAll(userId: number)
    {
        return await prisma.viagem.findMany({
            where: {
                userId
            }
        });
    }

    async findById(id: number, userId: number)
    {
        return await prisma.viagem.findUnique({
            where: {
                id,
                userId
            }
        });
    }

    async update(id:number, userId: number, dados: {titulo: string; nota: number; imagem: string; })
    {

        await prisma.viagem.update({
            where:{
                id,
                userId,
            },
            data: dados,
        });
    }

}