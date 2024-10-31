#!/bin/bash

# Check if the user provided an argument
if [ $# -eq 0 ]; then
    echo "Usage: $0 <folderName>"
    exit 1
fi

FOLDER_NAME=$1

# Check if a container named "adobe-cf" exists
if [ $(docker ps -aq -f name=adobe-cf) ]; then
    # If the container exists, check if it is running
    if [ $(docker ps -q -f name=adobe-cf) ]; then
        echo "Container 'adobe-cf' is already running."
    else
        echo "Starting existing container 'adobe-cf'."
        docker start adobe-cf
    fi
else
    # If the container does not exist, create and run a new one
    echo "Creating and running a new container 'adobe-cf'."
    docker run \
        -it \
        --name adobe-cf \
        -e acceptEULA=YES -e password=admin \
        -p 8500:8500 \
        --cpus=2 \
        --memory=512m \
        -v /home/nahid/Documents/${FOLDER_NAME}:/project \
        adobecoldfusion/coldfusion:latest
fi

# Optionally attach to the container if you want to interact with it
docker attach adobe-cf

