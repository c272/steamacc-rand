# SteamAcc-Rand
*A script that creates a random steam account on every run, requires Node 8+.*

**THIS SCRIPT IS DEPRECATED AS OF 1/2/18! THE STEAM ACCOUNT CREATION ENDPOINT HAS BEEN MODIFIED SO THAT AUTOMATION IS NO LONGER POSSIBLE. THIS PROGRAM NO LONGER FUNCTIONS CORRECTLY.**

SteamAcc-Rand is a program which allows you to automatically create a new Steam account, and output results to file. To configure the program, follow the steps below.

## Setup
**Installing Node:**

First, you'll want to install Node.js. This can be found [here.](https://nodejs.org/en/) This will automatically install all required dependencies for the script. After you've installed node, check that it's fully functional by running the command `node -v`. If it reads back a number or version name, it's installed correctly.

**Getting your "shared_secret" from SMA:**

Before using the program, you need to obtain your "shared_secret" ID from your phone or other device used as an authenticator. If you don't know how to do this, there is a tutorial for Apple devices [here](https://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/), and a tutorial for rooted Android devices [here](https://forums.backpack.tf/index.php?/topic/46354-guide-how-to-find-the-steam-identity_secret-on-an-android-phone/), unrooted [here.](https://www.reddit.com/r/SteamBot/comments/3vzboz/is_it_possible_to_get_shared_secret_from_android/)

After you've done this, go into `config.json`, located in the root directory of the script, and input your shared secret. Also input your Steam username and password.

## Runtime
If you've successfully input your shared secret and installed nodejs, then simply run `run.bat` inside the root folder of the script.

It will connect to Steam, and automatically create a new random account.
Accounts can be read from the .txt output files, which are titled as the username of the new account.

**This will not confirm emails of accounts for obvious reasons, that will have to be done manually.**

## Confirming Emails
To confirm emails, simply go to http://sharklasers.com and enter the email prefix that is listed in the .txt file.
A validation email should appear.
If it does not, simply log in to the account and confirm it.
