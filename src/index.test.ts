import { eav } from ".";

test('Resolving promise', async () => {
  const [v, err] = await eav<string>(() => Promise.resolve("value"))

  expect(v).toBe("value");
  expect(err).toBe(null);
});

test('Failing promise', async () => {
  const [v, err] = await eav<string>(() => Promise.reject("Oops"))

  expect(v).toBe(null);
  expect(err).toBe("Oops");
});

test('Non-async function', async () => {
  const [v, err] = await eav<string>(() => "value")

  expect(v).toBe("value");
  expect(err).toBe(null);
});

test('Function that throws an error', async () => {
  const [v, err] = await eav<string>(() => { throw new Error("Oops") })

  expect(v).toBe(null);
  expect(err).toBeInstanceOf(Error)
  expect(err?.message).toBe("Oops");
});

test('Function that throws a non-error', async () => {
  const [v, err] = await eav<string>(() => { throw "Oops" })

  expect(v).toBe(null);
  expect(err).toBe("Oops");
});

