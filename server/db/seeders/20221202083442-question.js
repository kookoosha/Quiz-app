/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      // junior
      // 1
      {
        title: 'Что такое условный оператор?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 2
      {
        title: 'Какая переменная записана неверно?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 3
      {
        title: 'Какие значения можно хранить в переменных?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 4
      {
        title: 'Где можно использовать JavaScript?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 5
      {
        title: 'В чем разница между confirm и prompt?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 6
      {
        title: 'Что будет записано в переменную test? var a = 5; var test = 5 != a ? "Yes" : "No";',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 7
      {
        title: 'В чем разница между confirm и prompt?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 8
      {
        title: 'Что будет выведено в консоль? var b = 10 if (b % 3 == 0) { var i = 10; } console.log(i);',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 9
      {
        title: 'Где верно указано имя переменной?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 10
      {
        title: 'Какие циклы есть в языке JavaScript?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 11
      {
        title: 'Какие функции выполняет Node JS?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 12
      {
        title: 'Где верно указан запуск всплывающего окна?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 13
      {
        title: 'Почему код ниже не будет работать? <script type="javascript/text"> console.log("Hi!") </script>',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 14
      {
        title: 'Где верно указан вывод данных?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 15
      {
        title: 'Какое количество сообщений будет выведено в консоль? for(var i = 10; i < 35; i += 5) { console.log(i); }',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // middle

      // 16
      {
        title: 'JavaScript имеет следующий тип комментариев.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 17
      {
        title: 'Если строка не может быть преобразована в число, будет возвращено _____.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 18
      {
        title: 'Во время сложения двух чисел предположим, что одно из чисел - NaN, какой будет результат?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 19
      {
        title: 'Переменная может одновременно содержать _____ значений.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 20
      {
        title: 'Целочисленная переменная объявляется с использованием следующего синтаксиса в JavaScript.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 21
      {
        title: 'Мы можем объявить _____ за раз. Выберите наиболее подходящий вариант',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 22
      {
        title: 'Атрибут _____ используется для указания кодировки символов, используемой во внешнем файле скрипта.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 23
      {
        title: 'Операторы JavaScript выполняются',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 24
      {
        title: 'Код JavaScript содержит',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 25
      {
        title: 'Код JavaScript можно вызвать с помощью',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 26
      {
        title: 'Оператор += может работать со следующими значениями данных.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 27
      {
        title: 'Несколько операторов JS записываются внутри пары _____, чтобы сформировать блок операторов.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 28
      {
        title: 'Инициализация переменной может быть выполнена путем записи оператора _____ между именем переменной и значением операнда.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 29
      {
        title: 'Для каких из следующих целей предназначен NodeJS',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 30
      {
        title: 'Какое высказывание справедливо для классов при наследовании?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // senior

      // 32
      {
        title: 'На что ссылается this в методе объекта?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 32
      {
        title: 'В каком порядке выполнятся обработчики одного и того же события, установленные с помощью метода addEventListener?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 33
      {
        title: 'Какой дате соответствует инструкция new Date(2015, 0, -1)?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 34
      {
        title: 'Выберите методы, предназначенные для удаления элементов из массива:',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 35
      {
        title: 'Как преобразовать дату в виде строки в объект Date?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 36
      {
        title: 'Какое API предоставляет клиенту функциональность для обмена данными между клиентом и сервером? Данный API предоставляет простой способ получения данных по ссылке без перезагрузки страницы.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 37
      {
        title: 'Какие есть ограничения по количеству элементов массива и их типу?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 38
      {
        title: 'Как можно получить определенный символ в строке?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 39
      {
        title: 'Этот метод разбивает строку на подстроки, используя заданный разделитель, и возвращает их в виде массива.',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 40
      {
        title: 'Что такое замыкание в JavaScript?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 41
      {
        title: 'Какими способами можно создать новый пустой объект?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 42
      {
        title: 'Какова точность хранения даты в объекте Date?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 43
      {
        title: 'Что такое hoisting в JavaScript?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 44
      {
        title: 'Какое значение возвращается, если DOM-элемент не найден при поиске по ID?',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 45
      {
        title: 'Выберите из списка существующие события мыши/клавиатуры:',
        img: 'url',
        code: 'await queryInterface.bulkDelete()',
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
