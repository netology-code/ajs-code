import getData from '../asynchronous';

test('should work with async/await', async() => {
    const data = await getData();
    expect(data).toBe('ok');
});