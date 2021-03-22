# Laravel React Admin Template

This project’s frontend was bootstrapped with [Create React App Laravel](https://github.com/mjsarfatti/create-react-app-laravel) and [Simple React Admin template](https://github.com/delprzemo/react-admin-template).

このプロジェクトのフロントエンドは[Create React App Laravel](https://github.com/mjsarfatti/create-react-app-laravel) と [Simple React Admin template](https://github.com/delprzemo/react-admin-template)を基に作成されました。

## Demo

[Click Here For a Demo](https://react-admin-template.netlify.app/)

[デモはこちら](https://react-admin-template.netlify.app/)

## Features

### backend

- Docker
- Laravel

### frontend

- React (without jQuery etc.)
- React Hooks
- Redux
- React-router-dom
- TypeScript
- ESlint
- Prettier
- Makefile
- Bootstrap 4

### features

- Responsive (adjusted to mobile devices)
- Modern, clean, readable layout
- Authentication
- Clean, easy, ready to start new project

## Quick Start

### clone app and change directory

```
$ git clone https://github.com/KoeInoue/laravel_react_admin_template.git
$ cd laravel_react_admin_template
```

### Initialize and Start Server(nginx, php and mysql)

```
$ make init
```

this executes these commands.  
`docker-compose up -d --build`  
`docker-compose exec app composer install`  
`docker-compose exec app cp .env.example .env`  
`docker-compose exec app php artisan key:generate`  
`docker-compose exec app php artisan storage:link`  
`docker-compose exec app php artisan migrate:fresh --seed`

### Runs the frontend app in development mode.

```
$ yarn start
```

Runs the app in development mode.  
Open http://localhost:3000 to view it in the browser.

### Executes Artisan Commands and Docker Commands

```
$ make migrate
```

see [./Makefile](https://github.com/KoeInoue/laravel_react_admin_template/blob/main/Makefile) to look more commands.

## Production Build

```
$ yarn build
```

⚠️ PLEASE NOTE ⚠️

Running npm run build or yarn build works exactly the same as in the original Create React App, with the only difference that the build folder is set to be Laravel’s public folder.

A consequence of this is that every time you build the React app the public folder is completely wiped out and rebuilt sourcing the contents from resources/react-app/public. If you want files to persist (eg. your custom .htaccess configuration) that’s where you should place them.

For your convenience you will already find .htaccess and index.php in resources/react-app/public.

⚠️ 注意 ⚠️
npm run build また、 yarn build の実行はオリジナルとの Create React App と同様です。
唯一の違いはビルドフォルダーが Laravel の public フォルダー内になることです。
つまり、laravel の public フォルダー内はすべて一度削除され resources/react-app/public を基に再生成されます。
laravel の public に何かを格納する代わりに resources/react-app/public に格納してください。
