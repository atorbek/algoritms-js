const user = {
  name: 'John',
  surname: 'Smith'
};

user.name = 'Pete';
delete user.name;

console.log(user);

let schedule = {};
function isEmpty(obj) {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return true;
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
function sum(obj) {
  return Object.values(obj).reduce((acc, cur) => acc + cur, 0);
}

console.log(isEmpty(schedule));

let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

function multiplyNumeric(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] === 'number') {
      obj[prop] = obj[prop] * 2;
    }
  }

  return obj;
}

console.log(multiplyNumeric(menu));
