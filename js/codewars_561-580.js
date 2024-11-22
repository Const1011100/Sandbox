//*-Task №561 The Office I - Outed (7kyu)
/*
Ваші колеги дивилися вам через плече. Коли ви повинні були виконувати свою справжню нудну роботу,
ви використовували робочі комп’ютери, щоб розгромити нескінченні години кодових воєн.

На зборах команди жахлива, жахлива людина заявляє групі, що ви не працюєте. Ви в біді.
Ви повинні швидко оцінити відчуття в кімнаті, щоб вирішити, чи варто вам збирати свої речі та йти.

Враховуючи об’єкт ( зустріч ), ​​який містить імена членів команди як ключі та їх рейтинг щастя з 10
як значення, вам потрібно оцінити загальний рейтинг щастя групи. Якщо <= 5, поверніть «Get Out Now!».
Інакше поверніть «Nice Work Champ!».

Рейтинг щастя буде загальним балом / кількістю людей у ​​кімнаті.

Зверніть увагу, що ваш бос у кімнаті ( бос ). Їхня оцінка вдвічі перевищує номінал (але вони все одно
одна людина!).
*/

// Мій варіант
function outed(meet, boss) {
    // Сума усіх рейтингів
    let totalHappiness = 0;
    // Кількість людей у кімнаті
    let numberOfPeople = 0;

    for (let person in meet) {
        if (person === boss) {
            // Рейтинг боса рахується вдвічі
            totalHappiness += meet[person] * 2;
        } else {
            totalHappiness += meet[person];
        }
        numberOfPeople++;
    }

    // Обчислення середнього рейтингу щастя
    const averageHappiness = totalHappiness / numberOfPeople;

    // Повернення результату на основі середнього рейтингу
    return averageHappiness <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}

// Цікаві варіанти з Codewars
function outed_(meet, boss) {
    let names = Object.keys(meet);
    let score = names.reduce((s, v) => s + meet[v], 0) + meet[boss];
    return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!';
}
// ================================================================================================
// ================================================================================================
//*-залишилось 1813шт
// console.time('timer_1');
// console.timeEnd('timer_1');
