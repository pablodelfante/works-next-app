import { assert, describe, expect, test } from 'vitest';
import fetch from 'node-fetch';
import 'dotenv/config';

describe('checking if backend is running', async () => {
	const response = await fetch(process.env.HOST_BACKEND, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
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
		})
	});

	test('checking server status', async () => {
		console.log('Entire response: ', response);
		expect(response.status).toEqual(200);
	});
	test('checking data on response', async () => {
		const jsonResponse = await response.json();
		const { data: { works: { data: works } } } = jsonResponse;
		expect(works.length).toBeGreaterThan(0);
	});
	test('fake test', () => {
		expect(3).toEqual(3);
	});
});
