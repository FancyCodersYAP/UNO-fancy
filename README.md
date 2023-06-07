<div align="center">

# Веб-игра <img src="./packages/client/public/assets/img/colorLogo.png" height="30">

Командный проект курса ["Мидл-фронтенд разработчик"](https://practicum.yandex.ru/middle-frontend/) от [Яндекс Практикум](https://practicum.yandex.ru/)

[<img src="https://github.com/FancyCodersYAP/UNO-fancy/assets/114286265/c364ca4e-789b-4bcf-90d8-c107cfd34e59" height="250">](https://www.figma.com/file/5kzuqt4PbewPnbky7TI3eH/UNO-fancy?type=design&node-id=50-1958&t=SHS23ZV9j4Tcmp7K-0)

</div>

### В проекте используются:

![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)
![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=flat)
![React Hook Form Badge](https://img.shields.io/badge/React%20Hook%20Form-EC5990?logo=reacthookform&logoColor=fff&style=flat)
![Redux Badge](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=flat)
![styled-components Badge](https://img.shields.io/badge/styled--components-DB7093?logo=styledcomponents&logoColor=fff&style=flat)
![Axios Badge](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat)
![Lerna Badge](https://img.shields.io/badge/Lerna-9333EA?logo=lerna&logoColor=fff&style=flat)
![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat)
![Jest Badge](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=fff&style=flat)
![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat)
![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat)

- Canvas API
- Redux Thunk
- Server Side Rendering (SSR)
- OAuth
- Docker-Compose
- Web Audio API
- Fullscreen API
- Service Worker

### Механика игры

[<img src="https://github.com/FancyCodersYAP/UNO-fancy/assets/114286265/2eb36fa3-e6c7-4554-b8c0-8fec1a3766a9" height="250">](https://github.com/FancyCodersYAP/UNO-fancy/blob/main/docs/rules.md)

Игра реализована в двух режимах - для двух и для четырёх игроков. В обоих режимах пользователь играет против ботов.
Задача пользователя первым скинуть все карты с руки, чтобы победить.
Победы игрока суммируются и отображаются на странице рейтинга (лидерборд). Также после каждой победы расчитывается сумма оставшихся на руках карт у проигравших игроков, рекордный результат пользователя отображается на лидерборде.

В [правилах игры](https://github.com/FancyCodersYAP/UNO-fancy/blob/main/docs/rules.md) можно узнать подробнее о картах в игре, возможных ходах и подсчёте очков.

### UI

Макет доступен на\
\
[![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat)](https://www.figma.com/file/5kzuqt4PbewPnbky7TI3eH/UNO-fancy?type=design&node-id=50-1958&t=SHS23ZV9j4Tcmp7K-0)

### Установка и запуск проекта

1. Убедитесь что у вас установлен `node` и `docker`
2. Клонируйте репозиторий `git clone git@github.com:FancyCodersYAP/UNO-fancy.git`
3. Выполните команду `yarn bootstrap` - это обязательный шаг, без него ничего работать не будет :)
4. Выполните команду `yarn dev:server`

Проект запустится на 3000 порту

### Добавление зависимостей

В этом проекте используется `monorepo` на основе [`lerna`](https://github.com/lerna/lerna)

Чтобы добавить зависимость для клиента:

```
yarn lerna add {your_dep} --scope client
```

Для сервера:

```
yarn lerna add {your_dep} --scope server
```

И для клиента и для сервера:

```
yarn lerna add {your_dep}
```

Если вы хотите добавить dev зависимость, проделайте то же самое, но с флагом `dev`:

```
yarn lerna add {your_dep} --dev --scope server
```

### Тесты

Для клиента используется [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/)

```
yarn test
```

### Линтинг

```
yarn lint
```

### Форматирование prettier

```
yarn format
```

### Production build

```
yarn build
```

И чтобы посмотреть что получилось

```
yarn preview
```

### Production окружение в докере

Перед первым запуском выполните `node init.js`

`docker compose up` - запустит три сервиса

1. nginx, раздающий клиентскую статику (client)
2. node, ваш сервер (server)
3. postgres, вашу базу данных (postgres)

Если вам понадобится только один сервис, просто уточните какой в команде
`docker compose up {sevice_name}`, например `docker compose up server`

### Команда

Этот проект существует благодаря всем людям, кто принял участие\
<br>

[![](https://contrib.rocks/image?repo=FancyCodersYAP/UNO-fancy)](https://github.com/FancyCodersYAP/UNO-fancy/graphs/contributors)
