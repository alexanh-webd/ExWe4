1. Fetching data
Create a form with a text input field with an id of "input-show" and a button with an id of "submit-data" and a <div> with a class of "show-container".
Using the form, fetch data from https://api.tvmaze.com/search/shows?q= where the value of the input field is set to the query parameter q (for example, when searching for "friends" the url would look like https://api.tvmaze.com/search/shows?q=friends). The API returns an array of shows that match the search parameter.

3. Desktop environment styling
Let’s add some styling to the webpage to make it look acceptable on a desktop environment. Add the following tag to the head of the document: <meta name="viewport" content="width=device-width, initial-scale=1.0"> to let the browser know how to set the page’s dimensions and scaling. 
The document body should have: 

Background color “#eceff1” 

The show-container class should have:

Padding-left of 10px
Padding-right of 10px
Additionally, the class show-data should have the following style properties: 

Width should be set to 100% 

Background color of “#cfd8dc” 

Margin-top of 10px

Margin-bottom of 10px

Padding of 10px 

Border radius of 6px 

Box shadow to make it look like the elements are floating on the page. Box shadow can look whatever you think is best 

The h1 element in this class should have its text centered 

The image should have display set to block

Show-info class should have the following properties: 

Width should be 100% 

Additionally, using CSS media queries, set the following properties to devices over 800px wide: 

Show-data class should have its display set to flex 

Show-info should have a padding of 10px 

3. Mobile environment styling
Currently, the webpage looks ok on PC but on a mobile environment the webpage looks less-than-ideal. We can fix this by using CSS media queries. Devices less than 800px wide should have the following properties:
The img element should have “margin: auto” 

The p element inside show-info should have its text centered and a padding of 10px 

4. Web fonts
Add the font “Roboto” to your webpage. https://fonts.google.com/selection?selection.family=Roboto. Press the "Get embedded code" to get the import URLs. Make sure to add the CSS rule provided in the website as well.

(Note. You have to import the font via HTML. Otherwise CodeGrade doesn't recognize it.)

5. Bootstrap
Add Bootstrap front-end framework to your website: https://getbootstrap.com/docs/5.2/getting-started/download/#cdn-via-jsdelivr use the hosted version. Add a Bootstrap navbar to your app and move the search form inside of it.
