# developer.playcanvas.com

The developer site uses [hyde](http://github.com/hyde) to convert markdown and html files into a static site, which is deployed simple by copying the files onto a web server.

In order to build the site locally you will need to install hyde.

In your python environment run

`pip install hyde`

Then to generate the site (-r to re-generate)

`hyde gen [-r]`
 
and finally server it on localhost:8080

`hyde serve`


