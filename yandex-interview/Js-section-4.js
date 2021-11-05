const fetch = require('node-fetch');

async function solution() {
  let users = fetch('https://jsonplaceholder.typicode.com/users').then((res) =>
    res.json()
  );
  let posts = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
    res.json()
  );
  let comments = fetch(
    'https://jsonplaceholder.typicode.com/posts'
  ).then((res) => res.json());

  let [usr, psts, cmnts] = await Promise.all([users, posts, comments]);

  const res1 = [];
  const res2 = [];

  for (let i = 0; i < usr.length; i++) {
    const user = usr[i];

    for (let j = 0; j < psts.length; j++) {
      const post = psts[j];

      if (user.id === post.userId) {
        res1.push({
          id: post.id,
          title: post.title,
          userName: user.name
        });
      }
    }
  }

  for (let i = 0; i < psts.length; i++) {
    const post = psts[i];
    const obj = {
      id: post.id,
      commentsCount: 0
    };
    for (let j = 0; j < cmnts.length; j++) {
      const comment = cmnts[j];
      if (post.id === comment.id) {
        obj.commentsCount += 1;
      }
    }

    res2.push(obj);
  }

  const res3 = [];
  for (let i = 0; i < res1.length; i++) {
    let post = res1[i];

    for (let j = 0; j < res2.length; j++) {
      let postWithComment = res2[j];

      if (post.id === postWithComment.id) {
        res3.push({
          ...post,
          commentsCount: postWithComment.commentsCount
        });
      }
    }
  }

  return res3;
}

solution().then(console.log);
