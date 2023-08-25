#!/bin/bash

# Check if both folder path and commit message are provided as command-line arguments
if [ $# -ne 2 ]; then
    echo "Usage: $0 <folder-path> <commit-message>"
    exit 1
fi

folder_path="$1"
commit_message="$2"

# Check if the folder exists
if [ ! -d "$folder_path" ]; then
    echo "Error: The folder '$folder_path' does not exist."
    exit 1
fi

# Remove the node_modules folder
if [ -d "$folder_path/node_modules" ]; then
    echo "Removing node_modules folder from '$folder_path'..."
    rm -rf "$folder_path/node_modules"
    echo "node_modules folder removed."
else
    echo "No node_modules folder found in '$folder_path'."
fi

# Navigate to the folder and perform git operations
cd "$folder_path" || exit 1

# Git operations
git add .
git commit -m "$commit_message"
git push

echo "Git operations completed in '$folder_path'."