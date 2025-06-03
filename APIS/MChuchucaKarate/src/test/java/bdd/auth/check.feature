@plan-de-pruebas-reto-tcs-login
Feature: Certificar end point "https://api.demoblaze.com/"

  Background:
    * def responselogin = call read('login.feature@obtenerToken')
    * def obtenertoken = responselogin.autoken
    * print obtenertoken
    * url 'https://reqres.in'
    * header Authorization = "Bearer " + obtenertoken


  Scenario Outline: TEST- <numCaso>- Certificar WS LOGIN - Login Exitoso.
    Given path  '/login'
    And  request body
    When method POST
    * print response
    Then status 200
    * print response
    Examples:
      |read('classpath:resources/csv/auth/dataLogin.csv')|


  Scenario Outline: TEST- <numCaso>- Certificar WS LOGIN - Login incorrecto.
    Given path  '/login'
    And  request body
    When method POST
    Then status 200
    And match response.errorMessage == "Wrong password."
    * print response
    Examples:
      |read('classpath:resources/csv/auth/dataLogin2.csv')|