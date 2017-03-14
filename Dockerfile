FROM python:3.5.1
ENV PYTHONUNBUFFERED 1
RUN apt-get update && apt-get install -y \
    libopenblas-dev \
    build-essential \
    openssl \
    wget

RUN pip install --upgrade pip
RUN pip install cookiecutter

RUN mkdir /build
RUN mkdir /code
WORKDIR /code
ADD . /code

RUN apt-get autoremove -y
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ADD . /code/
RUN chmod u+x /code/run_build.sh
ENTRYPOINT /bin/bash /code/run_build.sh
