# i-need-space

In this assignment you'll be using TWO APIs to create an application that allows you to find out the next time any satellite will be viewable over any address on earth!

The user of your application will enter some address and some satellite's ID (known as a NORAD), press 'search', then voila! They'll receive information on when that satellite can next be seen!

Check out the starter code for this project here: https://ci-wdi-900.github.io/i-need-space/

## Requirements

* Users can type in an address and a NORAD to receive information on the next time that satellite will be visible

* Your final website is responsive (looks good on mobile and desktop)

* Your project is hosted on GitHub pages

## Steps


## Stretch goals

#### Provide additional satellite viewing information

Provide additional information to the user to better view the satellite:

* Which cardinal direction they should look in to see the satellite
* The duration of the satellite's visibility
* What angle in the sky the satellite will be located at

#### Provide Additional Mapbox Information

When you search for an address with Mapbox, the API does not return a single location that matches the search, it provides an array of matches!

Make it so that anytime a user searches for a place, the application makes a request to the Satellite API for EACH of the first three matched locations in the array provided by Mapbox. Your application should display all three of these locations on the DOM along with the relevant information that tells the user when the satellite next will be visible.
