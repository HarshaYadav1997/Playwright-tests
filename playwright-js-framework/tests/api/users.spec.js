const { test, expect, request } = require('@playwright/test');

test('API Get Users #1', async () => {
  const apiContext = await request.newContext();
  const res = await apiContext.get('https://reqres.in/api/users?page=2');
  expect(res.ok()).toBeTruthy();
  const data = await res.json();
  expect(data.data.length).toBeGreaterThan(0);
});

test('API Create User #2', async () => {
  const apiContext = await request.newContext();
  const res = await apiContext.post('https://reqres.in/api/users', {
    data: { name: 'morpheus1', job: 'leader1' }
  });
  expect(res.status()).toBe(201);
});

test('GET: Fetch Users List', async () => {
  const api = await request.newContext();
  const res = await api.get('https://reqres.in/api/users?page=1');
  expect(res.status()).toBe(200);
  const data = await res.json();
  expect(data.data.length).toBeGreaterThan(0);
});

test('GET: Single User Not Found', async () => {
  const api = await request.newContext();
  const res = await api.get('https://reqres.in/api/users/9999');
  expect(res.status()).toBe(404);
});

test('POST: Create New User', async () => {
  const api = await request.newContext();
  const res = await api.post('https://reqres.in/api/users', {
    data: {
      name: 'John',
      job: 'Engineer'
    }
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.name).toBe('John');
});

test('PUT: Update User Details', async () => {
  const api = await request.newContext();
  const res = await api.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Jane',
      job: 'Manager'
    }
  });
  expect(res.status()).toBe(200);
});

test('PATCH: Partial Update of User', async () => {
  const api = await request.newContext();
  const res = await api.patch('https://reqres.in/api/users/2', {
    data: {
      job: 'Director'
    }
  });
  expect(res.status()).toBe(200);
});

test('DELETE: Remove a User', async () => {
  const api = await request.newContext();
  const res = await api.delete('https://reqres.in/api/users/2');
  expect(res.status()).toBe(204);
});

test('POST: Register a User (Successful)', async () => {
  const api = await request.newContext();
  const res = await api.post('https://reqres.in/api/register', {
    data: {
      email: 'eve.holt@reqres.in',
      password: 'pistol'
    }
  });
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body).toHaveProperty('token');
});

test('POST: Register a User (Missing Fields)', async () => {
  const api = await request.newContext();
  const res = await api.post('https://reqres.in/api/register', {
    data: {
      email: 'eve.holt@reqres.in'
    }
  });
  expect(res.status()).toBe(400);
  const body = await res.json();
  expect(body.error).toBeDefined();
});

test('GET: Delayed Response', async () => {
  const api = await request.newContext();
  const res = await api.get('https://reqres.in/api/users?delay=3');
  expect(res.status()).toBe(200);
});

test('GET: Check Response Headers', async () => {
  const api = await request.newContext();
  const res = await api.get('https://reqres.in/api/users/2');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('application/json');
});
