### URLS

The [Rave Timetable feed](http://timetablefeed.rave.ac.uk/) produces `.ics` files (iCal format), and their URLs look like this: `timetablefeed.rave.ac.uk/ical/GM1YUJRK414U/schedule.ics`

The issue is that such URLs don't seem to follow a logic/predictable structure. 

In order to use these URLs programmatically, they would use our staff/student ID, like `timetablefeed.rave.ac.uk/ical/mmenapace/schedule.ics` or `timetablefeed.rave.ac.uk/ical/95782112/schedule.ics`. That is, the unique bit in those URLs would be **mmenapace** (or my staff id **95782112**) instead of **GM1YUJRK414U**, which looks like a randomly generated code.

### Formats 

According to [Celcat](http://www.celcat.com/solutions/publication/web-publisher), their software can publish timetables both in `PDF` and `HTML`. 

We prefer `HTML`, unless by `HTML` they mean a page that embeds a `PDF` document (eg [this](http://timetable.rave.ac.uk/g1359.html)).

### Tools we could use

* JS: [ical2json](https://www.npmjs.com/package/ical2json), a node package to convert ical to JSON
* JS: [ical.js](https://github.com/mozilla-comm/ical.js) from Mozilla!
* PHP: [CalFileParser](https://github.com/controlz/CalFileParser)

### Kimono API

Using [Kimono](https://www.kimonolabs.com), I built [this API](https://www.kimonolabs.com/apis/bqslfw3y) which crawls the [Timetable Finder](http://timetable.rave.ac.uk/finder2.html) every week and returns a [JSON file of all Rave's timetable links](https://www.kimonolabs.com/api/bqslfw3y?apikey=70cHLTBzb3rRk8hvkQQJsbb2zBx9EGHQ)

