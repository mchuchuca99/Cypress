@plan-de-pruebas-reto-tcs-signup
Feature: Certificar end point "https://api.demoblaze.com/"

  Background:
    * url urlBase
    * def body = call read ('classpath:resources/json/auth/bodyLogin.json')
    * header 'Content-Type' = "application/json"


  Scenario Outline: TEST- <numCaso>- Certificar WS SIGNUP - Registro usuario nuevo Exitoso.
    Given path  '/signup'
    And  request body
    When method POST
    Then status 200
    * print response
    Examples:
      |read('classpath:resources/csv/auth/dataregistro.csv')|


  Scenario Outline: TEST- <numCaso>- Certificar WS SIGNUP - Registro existente.
    Given path  '/signup'
    And  request body
    When method POST
    Then status 200
    And match response.errorMessage == "This user already exist."
    * print response
    Examples:
      |read('classpath:resources/csv/auth/dataLogin2.csv')|