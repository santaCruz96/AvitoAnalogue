# SkyVito

## Описание проекта:

Cайт онлайн объявлений, аналог "Авито".

## Структура и функционал приложения

### Главная страница приложения

- [x] Пока пользователь не авторизован, он имеет доступ только к Главной странице, на которой отображаются товары, которые размещены на площадке.
- [x] Пользователь может осуществлять поиск по объявлениям с помощью строки поиска товара.
- [x] Пользователь имеет возможность авторизации и регистрации на сайте.

### Страница профиля

- [x] В личном кабинете отображается: приветствие пользователя, имя и фамилия, аватарка и телефон.
- [x] Все поля могут редактироваться.
- [x] Если пользователь не редактировал эти поля, то кнопка “Сохранить” неактивна. 
- [x] Ниже в профиле отображаются “Мои товары”.
- [x] По клику на товар открывается карточка товара.

### Страница товара

- [x] Указаны цена, наименование и описание товара, телефон и имя продавца. Также представлены отзывы пользователей о товаре. 
- [x] Если эту карточку открывает продавец, он имеет возможность редактировать цену, наименование и описание товара.
- [x] Есть возможность снять объявление с публикации.
- [x] По клику на кнопку “Разместить объявление” открывается модальное окно и у продавца есть возможность добавить цену, наименование и описание товара, и его картинку. В конце окна кнопка “Опубликовать”.

### Страница продавца

- [x] Информация о продавце: аватарка, имя, фамилия, город, дата размещения первого объявления.
- [x] Кнопка для отображения телефона продавца.
- [x] Список всех товаров продавца.

### Страница / модальное окно отзывов

- [x] Список всех отзывов о товаре с указанием имени продавца, его аватарки и даты размещения отзыва.

### Страница / модальное окно создания нового объявления

- [x] Пользователь имеет возможность указать название, описание, цену товара, а также загрузить до 5 фотографий.

### Страница / модальное окно редактирования объявления

- [x] Пользователь имеет возможность изменить название, описание, цену товара, а также удалить / загрузить до 5 фотографий.

## Запуск приложения

Склонируйте репозиторий:

```
git clone https://github.com/santaCruz96/AvitoAnalogue.git
```

### Backend

Для запуска бэкенда потребуется docker и docker-compose.
Перейдите в директорию проекта и запустите бэкенд командой:

```
docker compose -f 'back-skyVito/docker-compose-backend.yaml' up -d
```

Бэкенд и документация в Swagger GUI будут доступны по адресу: `http://localhost:8090/`

Остановить работу бэкенда можно командой:

```
docker compose -f 'back-skyVito/docker-compose-backend.yaml' down
```

### Технический стек приложения

- [x] React
- [x] Redux + Redux Toolkit + RTK Query
- [x] React Router DOM, реализация routing
- [x] js-cookie, react-responsive, react-hook-form
