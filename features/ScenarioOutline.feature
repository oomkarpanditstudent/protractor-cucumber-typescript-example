Feature: search for game

@OutlineScenario
Scenario Outline: Searching for game
  
  Given I am on "<search>" page
  When  I type "<search keyword>"
  Then  I click on search button
  And   I type "<game name>"
  Then  I click on search button
  And   I scroll until "MOTO GP 19" is in view
  Then  I am on "plp" page
  And   I click on "MOTO GP 19"
  Then  I should be taken to "MotoGP" screen

  Examples:
    | search | search keyword | game name      | 
    |  game  |    XBOX        | XBox one games |
  