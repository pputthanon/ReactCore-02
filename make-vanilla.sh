#!/bin/bash

# Define the template folder name
template_folder="template-vanilla"

# Check if a new folder name is provided as a command-line argument
if [ $# -eq 0 ]; then
    echo "Usage: $0 <new-folder-name>"
    exit 1
fi

# Get the new folder name from the command-line argument
new_folder="$1"

# Check if the new folder already exists
if [ -d "$new_folder" ]; then
    echo "Error: The folder '$new_folder' already exists."
    exit 1
fi

# Copy files from the template folder to the new folder
cp -r "$template_folder" "$new_folder"

# Navigate to the new folder
cd "$new_folder" || exit 1

# Run npm install
# npm install

echo "Setup complete. Your new React app is ready in the '$new_folder' folder."