@plan-de-pruebas-reto-tcs-login
Feature: Certificar end point "https://api.demoblaze.com/"

  Background:
    * url urlBase
    * def body = call read ('classpath:resources/json/auth/bodyLogin.json')
    * header 'Content-Type' = "application/json"

  @obtenerToken
  Scenario Outline: TEST- <numCaso>- Certificar WS LOGIN - Login Exitoso.
    Given path  '/login'
    And  request body
    When method POST
    * print response
    Then status 200
    * print response
    * def autoken = response.Auth_token
    * print autoken
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