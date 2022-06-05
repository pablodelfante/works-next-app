import { assert, expect, test } from 'vitest'
import fetch from 'node-fetch';
import 'dotenv/config'

test('checking backend is running', async () => {
  console.log(process.env.HOST_BACKEND)
  expect(true).toBe(true);

})