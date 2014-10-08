======

## Required tools

Node.js - [http://nodejs.org/download/](http://nodejs.org/download/)
Git - [http://msysgit.github.io/](http://msysgit.github.io/) or any other git 

## Instructions

Verify node and git installation by opening a shell and typing:

> git --version
> npm -v

Both commands should display the version number. If any command fails, try opening a new shell (git bash).

1. Install yeoman and other required tools with npm. If any of the commands fails, try again. Sometimes windows installations fail for no reason.

Yeoman
> npm install -g yo

Bower 
> npm install -g bower

Grunt
> npm install -g grunt-cli

Yeoman angular generator
> npm install -g generator-angular

2. Generate application using yo.

> mkdir myapp
> cd myapp
> yo angular

Yeoman will guide us to build our custom app. We can choose use Sass(n), Bootstrap(Y) and wich angular modules include. We can leave all selected, but we will mostly use angular-route.

If yeoman ends with error, we can try reinstalling node modules with:

> npm install

3. If everything has worked fine we can run the build with:
> grunt

If there's an error with imagemin, try commenting out imagemin task on Gruntfile.js (task definition and where it's used). We really don't need it.

4. Now we can start a server with:
> grunt serve