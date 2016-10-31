## Website Performance Optimization portfolio project

### Achievements required

#### PageSpeed score (dist/index.html)

* Critical rendering path

PageSpeed gives a [97/100 score](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fmepto.github.io%2Fdist%2Findex.html) for mobile and 98 for desktop to [http://mepto.github.io/dist/index.html](http://mepto.github.io/dist/index.html)


#### Getting rid of jank (dist/pizza.html)

* Frame rate
Little green bars in Google's timeline tool seem high enough for [Cam's pizzeria page](http://mepto.github.io/dist/views/pizza.html)

* Computational efficiency
The time to [resize pizza](http://mepto.github.io/dist/views/pizza.html?#locations) is between 0.45ms and 2.5ms

#### ReadMe file

* File available
Indeed!

### Where's what

This github repo contains the following:

* ReadMe and processing files (.gitignore, package.json and gulpfile.js)

* src folder which contains my working files with a structure and content relatively similar to the initial folder

* dist folder which contains the optimised images and the html files resulting from the gulp tasks

### Gulp tasks file

In order to run the task file, you will need to:

1.have [node.js](https://nodejs.org/en/) installed

2.make sure you install the following npm packages used by gulp:

- [gulp](http://gulpjs.com/), obviously :)
- [jshint](https://github.com/jshint/jshint)
- [uglify](https://www.npmjs.com/package/gulp-uglify)
- [rename](https://www.npmjs.com/package/gulp-rename)
- [inline](https://www.npmjs.com/package/gulp-inline)
- [cleanCSS](https://www.npmjs.com/package/gulp-clean-css)
- [htmlclean](https://www.npmjs.com/package/gulp-htmlclean)

3.launch gulp in your git shell to modify and start watching the files

4.hit ctrl+C to stop the gulp task - you're done!
