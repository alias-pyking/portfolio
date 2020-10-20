# Portfolio

This is my portfolio. Built with javascript, html, css and Django.

Feel free to clone it and use for yourself. Don't forget to star it.

For using this portfolio for yourself you can follow below guidelines.

## Guidelines:
 - First clone this repo with ```> git clone https://github.com/shubhamsks/portfolio```.
 - ```> cd portfolio```.
 - Make a virtual enviroment ```> python -m venv venv```.
 - Activate it ```> venv/Scripts/activate``` on windows ```$ source venv/bin/activate``` on linux or mac.
 - Install requirements ```> pip install -r requirements.txt```.
 - Now this project uses django_environ for its secret keys and other private stuff, So do this.
    - create a .env file in root of this project ```> touch portfolio/.env```.
    - Add below lines with your secret key and passwords.
     ```
      DEBUG=on
      SECRET_KEY=<YOUR-SECRET-KEY>
      EMAIL=<YOUR EMAIL>
      EMAIL_PASSWORD=<YOUR-EMAIL-PASSWORD>
      AWS_ACCESS_KEY_ID=<YOUR AWS ACCESS KEY ID>
      AWS_SECRET_ACCESS_KEY=<YOUR AWS SECRET ACCESS KEY>
     ```
    - Note that this project uses above file email for sending you the email from this portfolio website. So you have to set up your email for this.
      you can google "django smtp gmail".
  
  Done.
  
  If you encounter any error during set up. You will be able to resolve it if you know django or You can create an issue and I will update the README file
  with the error resolved.
     
