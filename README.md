# Getting started

1. Setup your `.env`
2. Install dependecies
    ```sh
    # Install php and laravel dependencies
    composer install

    # Install javascript dependencies
    yarn install
    ```
3. Run db migration and seed
    ```sh
    php artisan migrate:fresh --seed
    ```
4. Build the javascript front-end
    ```sh
    yarn run prod
    ```
5. Serve and enjoy!
    ```sh
    php artisan serve
    ```

Default admin password is:

email: `admin@example.com`

pass: `verysecure`



# Todo
- [ ] Add style 