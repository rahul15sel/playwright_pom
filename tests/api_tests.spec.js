import { test, expect } from '@playwright/test';

test('API GET REquest', async ({ request }) => {

    const response = await request.post('http://192.168.12.1:8080/TMI/v1/auth/login', {
        headers: {
            'Content-Type': 'application/json'

        },
        data: {
            "username": "admin",
            "password": "scvzt28d9kh573"

        },
    });
    // Validate the response status
    expect(response.status()).toBe(200);
    console.log(response);
}
);