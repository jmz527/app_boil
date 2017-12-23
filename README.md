# tubr
Web scraper for YouTube daily feeds 

# Description

Offshoot of my Spydr application - scrapes youtube and serves the data within a lightweight feed management system

# Technologies Used:

<!-- NodeJS + Cheerio + HTML-Minifier + JS-Beautify + Request + Express + EJS + SQLite3 + jQuery + SpectreCSS + Mocha + Chai + StandardJS -->

NodeJS + React + Redux + Babel + Webpack + SASS


# Installation Instructions:

First, clone this repo to a directory on your local machine and run `yarn`:

```sh
git clone git@github.com:jmz527/tubr.git
cd tubr/
yarn
```

And then

```sh
yarn run setup
```

Which sets up a few bash scripts in the bin

To add a channel follow these steps:

First, find the channel id off YouTube. It should look something like this: `UCsXVk37bltHxD1rDPwtNM8Q`

Easiest way to find this channel id is to visit the channel you want to subscribe to, click on a video, then click the link back to the channel's page below the video. Now the channel id shows up in the url bar.

Once you have that channel id copied, run the `yarn run add` command followed by the id and the name you desire to give it, like so:

```sh
yarn run add UCsXVk37bltHxD1rDPwtNM8Q kurzgesagt
```

Now you're ready to scrape! Run the main routine:

```sh
yarn run tubr
```

Then spin up the server:
```sh
yarn run start
```

or

```sh
node app.js
```

And navigate to [http://localhost:1337](http://localhost:1337), select your channel, and enjoy!


# Commands:

* `yarn run tubr`        :       this will fetch all, match, and merge
* `yarn run start`       :       this will start up the application
* `yarn run fetch`       :       this will fetch all
* `yarn run match`    	 :       this will cross-reference the new w/ the old
* `yarn run beautify`    :       this will minify then beautify the html files
* `yarn run purge`       :       this will delete all feeds & htmls
* `yarn run setup`       :       this will setup the application
* `yarn run test`        :       this will run the mocha testing framework

# Directory Tree:

```sh

```

# Thanks

based on the [node-web-scraper](https://github.com/scotch-io/node-web-scraper)

thanks [scotch.io](https://scotch.io/)!



<!-- That will spin up a local express server. You should be good to browse! Open up [http://localhost:8080](http://localhost:8080) and take a look! -->