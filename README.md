# mongodb-js-test

created a cloud mongodb atlas account and server, import the cvs files to three collections- person, post, library
added mongodb url to the js files

added npm init -y ,  that created package.json
added required libraries
npm install mongodb --save
npm i co --save
npm i mocha --save-dev

manuel testing by cosnsole.log and node  not working because missing req and res
node
> const posts=require('./get_posts.js')
> posts.getPosts()

Created test folder and added test class with mocha

on get_library converting to ObjectId is not working with latest mongo driver while finding
on posts find the bookmarked objectids and check if content_id exists in that list.