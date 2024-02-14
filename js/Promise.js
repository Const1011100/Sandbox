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