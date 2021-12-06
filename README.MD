# __TRIHUB__
 
Trihub is a family friendly general knowledge quiz which is score based. Players can enjoy a range of randomised questions which will offer the player 10 questions to answer.
 
![Responsive Mockup](/assets/images/website-responsive.png)
 
## Features<hr>
 
### Existing Features
 
- __Play Buttons__
 - Featured at the start of the game, the player is welcomed with the home screen, where the Trihub white logo is presented against the teal background.
 - Below the Trihub logo the user is presented with a play button in the center of the screen __GO!__ which links to the main game page where the  player can begin playing the quiz.
 - The other navigation links are the social pages, which are, Instagram, Discord, and Twitter which links to the different social platforms page opening up a new window when doing so.
 - The logo, play button and social links are all in a font that is congruent with the rest of the pages and a color that contrasts well with the background.
 
![GAME HOME PAGE](/assets/images/home-page.png)
 
- __Game Page__
 - The game page is displayed right after the home page and is identical in style and appearance as the home page.
 
![Game Page](/assets/images/game.png)
 
- __Hud Section__
 - The hud section gives the user  information  which question they are on as well as how many questions they have left.
 - The questions tracker, all has a bar which fills as the player answers the questions, to be able to give the player a more visual representation of their progression through the game.
 - On the right hand side is the title score and score tracker, this section keeps a track of the amount of the answered questions that are correct.
 
![Services](/assets/images/hud.png)
 
- __Questions Section__
 - The question section is displayed right above the four possible answers below.
 - This area changes when the player answers each time, and is congruent with both font and colour.
 
 ![Question Section](/assets/images/questions.png)
 
- __Answer Section__
 - The answer section displays four labeled tabs which have each possible answers to the questions presented above it.
 - The tabs display A-D labels on the left side to indicate the answer for the player.
 - Over in the middle of the tabs is the actual answers for the player to choose from.
 - The tabs have animation on them which allow them to glow and raise to indicate the answer that the player is planning on picking before they click on it, which provides more indication to the player of the answer they are picking.
 
 ![Answers Section](/assets/images/answers.png)
 
__Correct Answer__
 - The game gives indication by showing a pop up which says "Good Job" to indicate to the player that they have successfully answered the question correctly.
 - The pop up is timed and only lasts a few seconds before disappearing and revealing the next question.
 
![Footer](/assets/images/correct-answer.png)
 
__Incorrect Answer__
- The game gives indication by showing a pop up which says "SORRY NOT RIGHT! THE CORRECT ANSWER IS" to indicate to the player that they have successfully answered the question correctly.
- This also indicates to the player what the correct answers for that specific question that had answered.
- The pop up is also timed and disappears after a few seconds and then displays the following question.
 
![Footer](/assets/images/incorrect-answer.png)
 
__End Game Page__
- The game gives indication by showing a pop up which says "SORRY NOT RIGHT! THE CORRECT ANSWER IS" to indicate to the player that they have successfully answered the question correctly.
- This also indicates to the player what the correct answers for that specific question that had answered.
- The pop up is also timed and disappears after a few seconds and then displays the following question.
 
![Footer](/assets/images/endGame-page.png)
 
### Features Left to Implement
- A High Scores page which enables players to keep track of their high scores when playing the game. <br>
This  will require them to log their name once finished the game and this will store both their score and name in a separate page which allows them to look back at,, at a later date to bring more of a competitive feel to the game.
 
## Testing<hr>
  - I tested this page works on different browsers: Chrome, Firefox, Safari.
  - I confirmed that this project is responsive, looks good and functions on all standard screen sizing, using devtools device toolbar.
  - I confirmed that the navigation, header, Home, About Us, Explore, Sign up form & footer text are all readable and easy to understand.
  - I have confirmed that the form works: requires entries in every field, will only accept an email in the email field and the submit and cancel button works.
 
### Validator Testing
- HTML
 - No errors were returned when passing through the official W3C validator.
[WS3 Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
 
 ![](/assets/images/html-validation.png)
 
- CSS
 - No errors were found when passing through the official (Jigsaw) Validator [(Jigsaw) validator](https://validator.w3.org/#validate_by_input)
 
 ![](/assets/images/css-validation.png)
 
- JavaScript
- No warning errors were returned when passing through the official JS Hint validator [JS Hint Validator](https://jshint.com)
 
![](/assets/images/js-hint.png)
 
- Accessibility
 - I confirmed that the colours and fonts chosen are easy to read and accessible by running it through Lighthouse in devtools.
![Accessibility](/assets/images/accessibility.png)
 
## Unfixed Bugs
 
## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the pages provides the link to the completed website.
 
The live link can be found here - https://swilliamssw.github.io/TRIHUB/
 
## Credits<hr>
 
### Content
- The code to make the social media icon links was taken from [Social links](https://www.w3schools.com/howto/howto_css_social_media_buttons.asp)
 
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/))
 
- The instruction for horizontally aligning my images and text was from [W3C How TO](https://www.w3schools.com/howto/howto_css_images_side_by_side.asp)
 
- The pop up alerts which indicate the player of getting the answer correct or incorrect were taken from [SweetAlerts2](https://sweetalert2.github.io/)
 
- All instructions on how to position and change things aesthetically were all taken from [W3C School Tutorials](https://www.w3schools.com/css/default.asp)
 
- Main breakdown of how to approach this project structure wise were taken from [YouTube](https://www.youtube.com/watch?v=f4fB9Xg2JEY&ab_channel=BrianDesign)
 
- corrections for errors like the jshint esversion: 6 i used information from [Stack Overflow](https://stackoverflow.com/)