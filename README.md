== README

This is a dynamic online Health History form created for 
the sole use of the KWmassage therapy office. It never 
went live due to uncertanty of the security and safty of 
sending and reciving sensitive medical information. 

* The static site content stored under /public and is 
generated with jekyll in /kwmassage--master. You 
can .git pull from https://github.com/Jeremykw/kwmassage.git 
to access this code.

* originally buil on rails 4.2 and ruby 2.2 but has been
 upgraded to rails 6.0.2 and ruby 2.7. At the this point 
 in time simple intergration testing shows it is running fine.

* Rails version 6.0.2
* Ruby version = 2.7

Getting Started - Mac OS

* git clone - https://github.com/Jeremykw/kw_hh.git
* cd... into prodject dir.
* brew install ruby 2.7 - optinally us rvm or rbenv to control ruby versions
* gem install bundle
* bundle install
* bin/rails db:migrate - initialize database
* rails serve - Runs the app in the development mode. 
	- http://localhost:3000/hh_forms/new to view it in the browser. 


New Deployment instructions

* install - 'brew tap heroku/brew && brew install heroku'
* create/login - 'heroku login'
* update master branch of git - 'git add .' - 'git ci *m "last commit before heroku deployment" - 'git push'
* 'heroku create'
* deploy - 'git push heroku master'
* migrate db on heroku server - 'heroku run rake db:migrate'
* ensure their is at least on dyno running - 'heroku ps:scale web=1' - 'heroku ps' -
 list running dynos
* run application - 'heroku open'


* create/login - 'heroku login'
* update master branch of git - 'git add .'' - 'git ci -m "last commit before heroku 
deployment"' - 'git push heroku'
* deploy - 'git push heroku master'
* migrate db on heroku server - 'heroku run rake db:migrate' - if their were any db 
changes

Their is an existing version of the live app at Update existing live app: 
https://sleepy-wave-14734.herokuapp.com/hh_forms/new

The 'hh_forms/new' at the end of the url is nessassary to get to the form
