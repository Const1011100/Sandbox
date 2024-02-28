// fetch('https://jsonplaceholder.typicode.com/users55646461616161665165')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error))

// fetch('https://jsonplaceholder.typicode.com/users55646461616161665165')
//     .then(response => response.json())
//     .then(json => {
//         if (Object.keys(json).length === 0) {
//             throw new Error('Пользователь не найден');
//         }
//         console.log(json.name);
//     })
//     .catch(error => console.error(error));

/*
function fetchData() {
    return new Promise((resolve, reject) => {
        // const randomNumber = Math.random();
        const randomNumber = 0.1;
        if (randomNumber <= 0.3) {
            reject(new Error('Ошибка: промис не сработал.'));
        } else {
            setTimeout(() => {
                const data = { id: 1, name: 'Leanne Graham' };
                console.log('Данные получены');
                resolve(data);
            }, Math.random() * 5000 + 1000); // Случайная задержка от 1 до 6 секунд
        }
    });
}

// Пример использования промиса
fetchData()
    .then(data => {
        console.log('Значение name:', data.name);
    })
    .catch(error => {
        console.error(error.message);
    });
*/

/*
const alphabet = 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя'.split('');
const collatore = new Intl.Collator('ua-UA');
console.log(alphabet.sort(collatore.compare));
*/
// ================================================================================================
// ================================================================================================
/*
Создайте функцию fetchData, которая принимает URL в качестве аргумента и возвращает Promise.
Promise должен выполняться с данными, полученными из этого URL. Обработайте случай,
когда запрос не удался (например, из-за ошибки сети).
*/
function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    })
}

/*
Напишите функцию delayedResponse, которая принимает число (время задержки в миллисекундах) в качестве
аргумента и возвращает Promise. Этот Promise должен быть выполнен через указанное количество времени.
*/
function delayedResponse(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise выполнен!');
        }, delay)
    })
}

/*
Создайте функцию fetchMultipleData, которая принимает массив URL в качестве аргумента.
Функция должна возвращать Promise, который будет выполнен только после того, как все запросы к URL в
массиве будут завершены. При этом данные должны быть представлены в виде массива в том же порядке,
в котором были переданы URL.
*/
function fetchMultipleData(urlList) {
    return new Promise((resolve, reject) => {
        const result = [];
        let completedRequests = 0;

        for(let i = 0; i < urlList.length; i++) {
            fetch(urlList[i])
                .then(response => response.json())
                .then(json => {
                    result[i] = json;
                    completedRequests++;
                    if (completedRequests === urlList.length) {
                        resolve(result);
                    }
                })
                .catch(error => reject(error))
        }
    });
}
// Решение этой задачи от GPT (использует Promise.all)
function fetchMultipleData_(urlList) {
    const promises = urlList.map(url => fetch(url).then(response => response.json()));
    return Promise.all(promises);
}
// ================================================================================================

// let jsonTest = '';

// fetch("https://api.chucknorris.io/jokes/random")
//     .then(response => response.json())
//     .then(data => jsonTest = data);

// console.log(jsonTest);

async function fetchData() {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    let jsonTest = data;
}
fetchData();
//console.log(jsonTest);
