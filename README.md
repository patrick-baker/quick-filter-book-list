# Book Filter

## Description
_Duration: 1-Day_

The Book Filter app allows a user to quick filter through a list of books retrieved from Goodreads through the Goodreads API, as well as search for new books by entering new search mode to search using a new keyword. Quick filter works with titles and author names alike. 

You can find the deployed version [here](https://book-filter.herokuapp.com/).


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)


## Usage

1. After logging in, users will be brought to their ```home``` page, which will list all of their projects.
2. Clicking on the ```create``` button will allow the user to enter the project form, where they will create all of the project metadata and analyze the text of their strategy document.
3. After analysis, a project report will generate, which shows project metadata, data visualization of the analysis findings and suggested experts which match the highest occurences of insensitivities, as well as an option for the user to reanalyze a reiteration of the strategy doc.
4. Back on the ```home``` page, a user can view a past report by clicking the report button on a given project.
5. The ```expert``` view shows all of the experts in the database, including information on their specialties, their contact info, and their bio.
6. Admins can edit and delete experts in the ```expert``` view.
7. Admins can also enter the ```rules``` view to add or delete rules which the rules-based system uses to flag potentially insensitive words or phrases for the report.


## Installation

1. Get to main project directory in command line, assuming node is installed, and type in `npm install` to install required dependencies.


## Built With
- _node.js_
- _Express.js_
- _React_
- _GoodReads API_ 

## Support

If you have any questions, feel free to email me at bakerpj1992@gmail.com

## Acknowledgments

* Shoutout to all of Prime staff for being so supportive and being such great teachers.
