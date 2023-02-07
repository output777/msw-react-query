import {rest} from 'msw';

export const handlers = [
  rest.get('/login', async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        firstName: 'youngil',
        lastName: 'oh',
      })
    );
  }),
  rest.get(
    'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json',
    async (req, res, ctx) => {
      const id = req.url.searchParams.get('id');
      const originalResponse = await ctx.fetch(req);
      const originalResponseData = await originalResponse.json();
      return res(
        ctx.json({
          data: {
            people: [...originalResponseData.data.people, {name: id, age: 135}],
          },
        })
      );
    }
  ),
];
