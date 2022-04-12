Feature: Televison Search with second higest price

    Scenario: search for second higest price tv with item desciption
     Given Open amazon india shopping application
     When Click on the hamburger menu in the top left corner
     Then Scroll to "shop by department" and click on the "Appliances"
     Then click on "Televisions"
     Then filter the result by Brand "Samsung"
     And Sort the Samsung results with price "High to Low"
     Then click on second higest priced item
     Then verify about this item section