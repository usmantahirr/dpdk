import {z} from 'zod';

import {createTRPCRouter, publicProcedure} from "~/server/api/trpc";

export const pokemonRouter = createTRPCRouter({
  getOne: publicProcedure
    .input(z.object({
      id: z.string(),
    }))
    .query(({ctx, input}) => {
      return ctx.prisma.pokemon.findUnique({
        where: {
          id: input.id,
        },
        include: {
          type: true,
          category: true,
        }
      });
    }),
  getAll: publicProcedure
    .query(({ctx}) => {
      return ctx.prisma.pokemon.findMany({
        include: {
          type: true,
          category: true,
        }
      });
    }),
});