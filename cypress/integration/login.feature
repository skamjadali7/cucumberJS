Feature: Login to Shopping Bank Application

    Scenario: Successfull Login to Shopping Application
    Given Customer navigate to shopping application
    When Customer click on sign-in button
    And Customer enters email and password
        | email        | password |
        | sam@mail.com | sam@123  |

    Scenario: Unsuccessfull Login to Shopping Application
    Given Customer navigate to shopping application
    When Customer click on sign-in button
    And Customer enters email and password
        | email        | password |
        | xyz@gmail    | 123@123  |
    Then Click Sign-In Button