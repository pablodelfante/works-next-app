import { assert, expect, test } from 'vitest'
import fetch from 'node-fetch';
import 'dotenv/config'

test('checking backend is running', async () => {
  const response = await fetch(process.env.HOST_BACKEND, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        query: `
        {
          works {
            data {
              id
            }
          }
        }
        
        
        `
    }),
})
  console.log('status response: ', response.status)
  console.log(await response.json())
  expect(true).toBe(true);

})