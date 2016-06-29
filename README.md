## Website Performance Optimization portfolio project

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

* To view the project [online](https://yhelenfrontweb.github.io/Website-Performance-Optimization/) for PageSpeed Insights.

* Download or Clone the repository.
* Open a browser and visit localhost:8080
* Download and install [ngrok](https://ngrok.com/) 

	``` bash
  	$> cd /path/to/your-project-folder
	$> ./ngrok http 8080
  	```
* Copy the forwarding URL from ngrok and run it through PageSpeed Insight.

####Optimizing PageSpeed Insights score for index.html

* Removed link to Google Fonts and replaced with @font-face inside css.
* Added `media` attribute to print stylesheet.
* Inline CSS to index.htm.
* Optimized image using Grunt and GraphicMagick.
* Uglifyed Js using Grunt, added `async` attribute, finally moved all JS to bottom.

####Part 2: Optimize Frames per Second in pizza.html

* In the changePizzaSizes function moved variables outside of for loop.
* Changed 'querySelectorAll' to 'getElementsByClassName'
* Moved the pizzaDivs variable outside of the for loop.
* In the updatePositions function moved 'document.body.scrollTop', calculated items.length and declared the phase variable outside of for loop.
* Used the screen size  to calculate the number of background pizzas.
	