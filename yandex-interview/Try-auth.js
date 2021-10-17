/**
 * Есть долгий асинхронный метод.
 * Написать функцию auth, которая возвращает обертку в промис этого долгого асинхронного метода.
 * Написать tryAuth(n), который может n раз пытаться вызвать auth при фэйле,
 * при успешном выполнении просто возвращает auth().
 */
async function tryAuth(n = 5) {
  let error;
  for (let i = 0; i < n; i++) {
    try {
      return await auth();
    } catch (err) {
      error = err;
    }
  }
  throw error;
}

function tryAuth1(n = 5) {
  auth()
    .then((result) => result)
    .catch((error) => {
      console.log(n, error);
      if (n > 1) {
        return tryAuth1(n - 1);
      }

      throw error;
    });
}

function auth() {
  return new Promise((_, reject) => {
    setTimeout(reject, 1000, 'error by timeout');
  });
}

console.time('time');
tryAuth();
console.timeEnd('time');
