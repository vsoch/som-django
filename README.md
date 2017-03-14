# Stanford Medicine Django Template

This is a [cookiecutter](https://github.com/audreyr/cookiecutter) template for Django, meaning that it is a skeleton to get started with an application. 

* If you have problems with the template, please open [issues](https://www.github.com/vsoch/som-django/issues).


## Usage
The generation of your application base is done via a docker image, and will go into a folder that you map as a volume. Thus, you would want to clone this repo:


      git clone http://www.github.com/vsoch/som-django
      cd som-django



### Build your Application
Then you will want to edit [cookiecutter.json](cookiecutter.json) to fit your application needs.  Then, build the image.


      docker build -t vanessa/som-django .


Once you are ready to generate your application, run the image, make an output folder for your application, and be sure to map the folder that you want to have your application output files to as a volume:


      mkdir /tmp/build
      docker run --volume /tmp/build:/build vanessa/som-django


The resulting application will then be found in `/tmp/build`.
