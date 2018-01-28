# Contributing

When contributing to this repository, please first discuss the change you wish to make via **issue**, or with all the team in the Slack **#Italian channel**(reserved only to recipients of the Google Developer Challenge Scholarship).

Please note we have a **code of conduct**, please follow it in all your interactions with the project


## Pull Request Process

* [Install Git](https://git-scm.com/downloads)

Here are some tutorials to help you **install and use Git** ([basic commands](https://try.github.io/levels/1/challenges/1) or [full tutorial](https://www.slideshare.net/IslamSayed18/github-tutorial-83175509))

* **Fork** the project (Here is a [tutorial about Fork](https://help.github.com/articles/fork-a-repo/))
* **Create a new folder** in your computer to welcome the project from GitHub, for example create a "code" folder to host your projects in there
* Open the **Git console** and navigato to your new folder
* **Clone your fork** of the repository in your current folder using this command:

```
git clone https://github.com/<your-github-pseudo>/Memento.git
```

You can find this link following the steps below:

1. Go to your **GitHub profile**
2. Go to your **fork** of the Project
3. Press **"Clone or download"**
4. **Copy the URL** using HTTPs (Not SSH)

* In your terminal, navigate to the new project folder that has been created and type use the command 

```
cd Memento
```

* Set the **remote upstream** to the original repository using this command:

```
git remote add upstream https://github.com/davide2894/Memento.git
```

* Be sure to be **up-to-date** with your version of the repository with the following commands:

```
git checkout master
git pull upstream master
```

For more information about remotes check [this tutorial](https://help.github.com/articles/adding-a-remote/)

* Congratulations, you can start to make your changes!


* When you are ready to submit your work, it's time to open a **Pull Request**. Be sure to propose it into the branch master.

Here is a [tutorial about Pull Requests](https://help.github.com/articles/creating-a-pull-request/)

## Guidelines

For the consistency of this project, please follow the guide lines listed below.

* [HTML Guidelines](https://udacity.github.io/frontend-nanodegree-styleguide/)
* [CSS Guidelines](https://udacity.github.io/frontend-nanodegree-styleguide/css.html)
* [JavaScript Guidelines](https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
* [Git Guidelines](https://udacity.github.io/git-styleguide/)

### If you write SCSS...

Please **compile** your scss code before submitting your pull request. You can use [Prepros](https://prepros.io/) which is really easy to use. You can check the [SASS Tutorial from The Net Ninja](https://www.youtube.com/watch?v=b0d--jixRwg&index=2&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA) to see how Prepros works.

In case you create any new SCSS file:
* be sure to remain in src/sass
* to name your file use this syntax: "_name-of-your-file.scss".
* import your file in main.scss by using this syntax:

```
@import 'name-of-your-file'
```

**DO NOT WRITE CSS DIRECTLY! THE FILE IS GENERATED AUTOMATICALLY**


## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the project or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of a project may be further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [davide.iaiunese@gmail.com](davide.iaiunese@gmail.com). All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances. The project team is obligated to maintain confidentiality with regard to the reporter of an incident. Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions as determined by other members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4