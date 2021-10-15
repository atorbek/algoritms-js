// Что будет в консоли после выполнения фрагмента кода?

var i = 10;
var arr = [];

while (i--) {
    arr.push(function() {
        return i + i;
    });
}

console.log([
    arr[0](), // ??? -2
    arr[1](), // ??? -2
])



var i = 10;
var arr = [];

while (--i) {
    arr.push(function() {
        return i + i;--
    });
}

console.log([
    arr[0](), // ??? 0
    arr[1](), // ??? 0
])


/**
* Дан массив. Необходимо отсортировать нечетные по значению числа по возрастанию,
* а четные оставить на своих местах
*/
function oddSort(arr) {
    let tmp;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            for(let j = arr.length - 1; j > i; j--) {
                if(arr[j] % 2 !== 0) {

                    if(arr[i] > arr[j]) {
                        tmp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = tmp;

                    }
                }
            }

        }

    }

    return arr;
}


console.log(oddSort([ 2, 3, 7, 4, 6, 1, 5, 8, 9 ])); // [ 2, 1, 3, 4, 6, 5, 7, 8, 9 ]

//                        ^           ^
[1, 3, 7, 4, 6, 2, 5, 8, 9]
[2, 3, 7, 4, 6, 1, 5, 8, 9]







/*
Необходимо обработать запросы к внешнему API. Для отрисовки раздела помощи пользователю необходимо получить ряд данных по нему.
При этом часть данных является критичным, а часть дополнительной информацией (обозначено []). Формат ответа и ошибок на усмотрение кандидата.
Если критичные данные не ответили (getAuth), функция должна прекратить работу (не нужно пытаться делать остальных запросов).
Кратко: Получить максимум информации о пользователе, все ошибки кроме ошибки запроса авторизации - игнорируем. Форматы ошибок/ответов на усмотрение кандидата


*/

function getAuth() {} // return Promise with token

function getUser(token) {} // [return Promise with userId]
function getOrder(token, userId) {} // [return Promise with order]
function getPromo(token) {} // [return Promise with promo]

async function getData() {

    let token;
    let user;
    let promo;
    let order;
    try {
        token = await getAuth();

        const user = await getUser(token);
        order = await getOrder(token, user);
        promo = await getPromo(token);


        return {
            token,
            user,
            order,
            promo
        };
    } catch(e) {

        if(token) {
            throw 'error auth';
        }

        promo = await getPromo(token);
    }

    return {token, user, order, promo}


    }


   // return {token, user, order, promo}
}
