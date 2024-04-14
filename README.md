# Barcode Bridge - Frontend

To address this challenge, I tackled the consumption of server-sent events (SSE) from the backend. The user interface was developed within App.jsx, and a dedicated component file was created for SSE consumption.

In resolving this issue, I relied on two third-party repositories: react-qr-code and uuid. Leveraging the react-qr-code component facilitated the swift generation of QR codes and their associated URLs, saving valuable time without the need for reinvention.

Additionally, the uuid library proved invaluable for simulating a truly unique session ID for each browser tab. While it may have been tempting to utilize the browser tab session ID, the potential for shared sessions in duplicated tabs posed a risk to adhering to chain-of-custody rules. Thus, opting for a unique session ID mitigated this concern.


# Project Setup Instructions

This guide will walk you through setting up the project environment, including installing Ruby, setting up the Rails database, performing Yarn installations, running the Rails server, running Yarn build for front-end updates, performing a bundle install, and setting up a Yarn build watcher for continuous front-end updates.

## Prerequisites

- Ruby 3.2.2
- Node.js and Yarn
- Rails

## Installation Steps

### 1. Install Ruby

Ensure you have Ruby 3.2.2 installed on your system.

### 2. Install Yarn

Ensure you have Yarn installed by running `yarn --version`. If Yarn is not installed, you can install it by following the instructions on the Yarn website.

### 3. Perform a Yarn Install

After installing Yarn, run `yarn install` to install the necessary packages for the project.

### 4. Perform a Bundle Install

After installing Ruby and setting up Rails, run `bundle install` to install the required Ruby gems for the project.

### 5. Perform a Yarn Build with Watch

To continuously monitor and automatically rebuild the front-end assets upon any changes, run `yarn build --watch`. This command will keep running in the background and update the build whenever you make changes to the front-end code.

### 6. Start the Rails Server

Finally, start the Rails server by running `rails server`. This will start the server on the default port, allowing you to access your application in a web browser.
