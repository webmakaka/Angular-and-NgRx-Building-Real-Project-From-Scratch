# [Udemy, Oleksandr Kocherhin] Angular и NgRx - пишем реальный проект с нуля [RUS, 2020]

<br/>

# Разработка по шагам

<br/>

## 01 Подготовка проекта

<br/>

### 001 Подготавливаем проект

<br/>

    $ npm install -g @angular/cli
    $ ng --version

<br/>

```
***
Angular CLI: 10.1.7
Node: 12.18.4
OS: linux x64

Angular:
...
Ivy Workspace:

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1001.7 (cli-only)
@angular-devkit/core         10.1.7 (cli-only)
@angular-devkit/schematics   10.1.7 (cli-only)
@schematics/angular          10.1.7 (cli-only)
@schematics/update           0.1001.7 (cli-only)

```

<br/>

    $ cd app
    $ ng new client

```
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? SCSS
```

<br/>

    $ cd client
    $ npm start

<br/>

### 002 Почему нам нужен NgRx? (Wrapper над Redux для Angular)

<br/>

### 003 Планируем структуру проекта

<br/>

### 004 Prettier - инструмент автоформатирования кода

<br/>

### 005 Зачем нам language server?

<br/>

## 02 Модуль регистрации

<br/>

### 006 Модуль регистрации

http://localhost:4200/register

<br/>

![Application](/img/pic-m02-p01.png?raw=true)

<br/>

### 007 Делаем разметку регистрации

<br/>

![Application](/img/pic-m02-p02.png?raw=true)

<br/>

### 008 Устанавливаем NgRx

https://ngrx.io/

    $ npm install @ngrx/stor

<br/>

### 009 Как дебажить NgRx?

**Установить**

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

<br/>

https://ngrx.io/guide/store-devtools

<br/>

    $ npm install @ngrx/store-devtools

<br/>

![Application](/img/pic-m02-p03.png?raw=true)

<br/>

### 010 Создаем интерфейсы для модуля авторизации

<br/>

### 011 Добавляем редьюсеры для модуля авторизации

<br/>

![Application](/img/pic-m02-p04.png?raw=true)

<br/>

### 012 Создаем селекторы для модуля авторизации

<br/>

![Application](/img/pic-m02-p05.png?raw=true)

<br/>

### 013 Создаем сервис регистрации

<br/>

![Application](/img/pic-m02-p06.png?raw=true)

<br/>

### 014 Добавляем сайд эффекты регистрации

    $ npm install --save @ngrx/effects

<br/>

![Application](/img/pic-m02-p07.png?raw=true)

<br/>

### 015 Обновляем редьюсеры авторизации

<br/>

![Application](/img/pic-m02-p08.png?raw=true)

<br/>

![Application](/img/pic-m02-p09.png?raw=true)

<br/>

### 016 Реализуем модуль для отрисовки ошибок бекенда

<br/>

![Application](/img/pic-m02-p10.png?raw=true)

<br/>

### 017 Создаем persistence сервис

<br/>

![Application](/img/pic-m02-p11.png?raw=true)

<br/>

## 03 Модуль логина

<br/>

### 018 Подготавливаем стор для страницы логина

<br/>

### 019 Отрисовываем страницу логина

<br/>

![Application](/img/pic-m03-p01.png?raw=true)

<br/>

![Application](/img/pic-m03-p02.png?raw=true)

<br/>

### 020 Добавляем модуль верхнего меню

<br/>

![Application](/img/pic-m03-p03.png?raw=true)

<br/>

### 021 Реализуем получение текущего юзера при загрузке страницы

<br/>

![Application](/img/pic-m03-p04.png?raw=true)

<br/>

### 022 Создаем интерсептор для авторизации

<br/>

![Application](/img/pic-m03-p05.png?raw=true)

<br/>

## 04 Модуль фида

<br/>

### 023 Планируем фид модуль

<br/>

### 024 Создаем модуль фида

<br/>

![Application](/img/pic-m04-p01.png?raw=true)

<br/>

### 025 Подготавливаем стор для фида

<br/>

![Application](/img/pic-m04-p02.png?raw=true)

<br/>

### 026 Получаем данные фида для отрисовки

<br/>

![Application](/img/pic-m04-p03.png?raw=true)

<br/>

### 027 Добавляем вспомогательные компоненты

<br/>

![Application](/img/pic-m04-p04.png?raw=true)

<br/>

### 028 Реализуем модуль пагинации. Часть 1

<br/>

### 029 Реализуем модуль пагинации. Часть 2

<br/>

![Application](/img/pic-m04-p05.png?raw=true)

<br/>

### 030 Перефетчиваем данные фида правильно

    $ npm install --save query-string
    $ npm install --save @ngrx/router-store

<br/>

![Application](/img/pic-m04-p06.png?raw=true)

<br/>

## 05 Дополнительные модули

<br/>

### 031 Реализуем модуль списка тегов

<br/>

![Application](/img/pic-m05-p01.png?raw=true)

<br/>

### 032 Реализуем модуль популярных тегов

<br/>

![Application](/img/pic-m05-p02.png?raw=true)

<br/>

### 033 Добавляем переключатель между фидами

<br/>

![Application](/img/pic-m05-p03.png?raw=true)

<br/>

### 034 Создаем другие фиды

<br/>

![Application](/img/pic-m05-p04.png?raw=true)

<br/>

## 06 Модули работы с отдельным постом

<br/>

### 035 Реализуем страницу отдельного поста

<br/>

### 036 Отрисовываем страницу отдельного поста

<br/>

![Application](/img/pic-m06-p01.png?raw=true)

<br/>

### 037 Добавляем удаление отдельного поста

Создаем пост на http://angular.realworld.io/

<br/>

![Application](/img/pic-m06-p02.png?raw=true)

<br/>

![Application](/img/pic-m06-p03.png?raw=true)

<br/>

### 038 Реализуем страницу создания нового поста

<br/>

![Application](/img/pic-m06-p04.png?raw=true)

<br/>

### 039 Создаем форму работы с полями поста

<br/>

![Application](/img/pic-m06-p05.png?raw=true)

<br/>

### 040 Добавляем стор для страницы создания нового поста

<br/>

![Application](/img/pic-m06-p06.png?raw=true)

<br/>

![Application](/img/pic-m06-p07.png?raw=true)

<br/>

![Application](/img/pic-m06-p08.png?raw=true)

<br/>

### 041 Реализуем страницу обновления поста

<br/>

![Application](/img/pic-m06-p09.png?raw=true)

---

<br/>

**Marley**

Any questions in english: <a href="https://jsdev.org/chat/">Telegram Chat</a>  
Любые вопросы на русском: <a href="https://jsdev.ru/chat/">Телеграм чат</a>
