// api/trpc/[...trpc].ts
import { createRouter } from '@trpc/server';
import { z } from 'zod';

const appRouter = createRouter().query('hello', {
  resolve: () => 'world',
});

export default appRouter;
