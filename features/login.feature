Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with <username> and <password>
    And expect header text on setup page to equal Setup
    And click appLauncher button on setup page
    And set searchbar field as "Sales" on setup page
    And click sales logo on setup page
    And click leads text on setup page
    And click newleads text on setup page
    And set lastname field as "Parker" on setup page
    And set company field as "Marvel" on setup page
    And click save button on setup page
    And expect nameheader text on setup page to equal Parker
    And wait for 5 seconds

    Examples: 
      | username               | password   |
      | saikat@cloudkaptan.com | Welcome123 |