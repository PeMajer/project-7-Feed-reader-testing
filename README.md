# Feed reader testing
This is part of Udacity's Front-end Web Developement nanodegree projects.This project tests knowledge in use a testing suite to validate code. Project starts with a Feed Reader App and goal is write test spec in Jasmine.

## Udacity instruction
In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](https://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

Download the required [project assets](https://github.com/udacity/frontend-nanodegree-feedreader).

## Quickstart
Clone from GIT repository.
```
$ git clone https://github.com/PeMajer/project-7-Feed-reader-testing.git
```
Open `index.html` in your browser.


## Implemented tests
* Tests to make sure that the allFeeds variable has been defined and that it is not empty,
* tests all Feeds have url and that url is not empty,
* tests all Feeds have name and that name is not empty,
* tests that menu element is hidden by default,
* tests that menu changes visibility when the menu icon is clicked,
* tests that the loadFeed function has at least a single '.entry' within the '.feed' container
* tests that when a new feed is loaded by the loadFeed function that the content actually changes.

## External libraries
* [Jasmine](https://jasmine.github.io/)
* [jQuery](http://jquery.com/)
* [Handlebars](https://handlebarsjs.com/)

## Contributing
* Fork the repository.
* Create a branch for the work you’re going to do.
* Make your changes in your branch.
* Send a pull request from your branch to this repository.

## License
It is free software, and may be redistributed under the terms specified in the [license file](LICENSE.md).

