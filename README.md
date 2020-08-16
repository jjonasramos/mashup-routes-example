# Qlik Mashup & [Navigo](https://github.com/krasimir/navigo/)

When you are developing a Qlik mashup with more than one page, if you don't implementing a system of routes, you'll have a problem, that is loading the Qlik dependencies (focus on require.js) every time the page is load.

So, to solve this problem and loading the Qlik dependencies just once, this solution implements a simple system of routes using Navigo, integrating with Qlik.
