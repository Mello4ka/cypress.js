describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароль(через девтулс)
        cy.get ('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

    cy.wait(5000);

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю. что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
   })

   it('логика восстановления пароля', function () {
  cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароль(через девтулс)
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('m8rusya@yandex.ru'); // ввели любой логин
        cy.get('#restoreEmailButton').click(); // нажать отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю. что после отправки мейла вижу текст
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
});


it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароль(через девтулс)
        cy.get ('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // ввели НЕверный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю. что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
   })
   
   it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароль(через девтулс)
        cy.get ('#mail').type('man@dolnikov.ru'); // ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю. что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
   })

   it(' логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароль(через девтулс)
        cy.get ('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю вижу текст
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
   })

   it('логин со строчными буквами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки восст пароль(через девтулс)
        cy.get ('#mail').type('GerMan@Dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю. что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
   })
})



   
       
// =Найти поле логин и ввести правильный логин
// =Найти поле пароль и ввести правильный пароль
// =Найти кнопку Войти и нажать на нее
// Проверить, что авторизация прошла успешно