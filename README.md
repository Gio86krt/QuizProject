# QuizProject

- Made a template in HTML to display the initial elements;

- Used bootstrap to import components and some of the styling;

- The script waits for the click event on the button to start a timer and display the first question;

- The questions are selected randomly from an Array of objects, the function checks for the "status" property of the object, that is initially
  set to "true", the property gets changed to "false" once the question is displayed;

- Using the createElement and appendChild methods I created a new card to display the question and the answers;

- Every "li" element has its own click event, that reads the id of the target element and compares it to the right answer;

- If a wrong answer is selected an alert is shown and 10 seconds are subtracted from the time;

- If the correct answer is selected the current time (in seconds) gets added to the score, and an alert is shown;

- After all the questions have been shown a final card is displayed, showing the total score;

- A button in the last card calls for the newGame function, that resets all the variables to the initial values, and starts a new game;

[Repository-Link](https://github.com/Gio86krt/QuizProject)
[Quiz-Link](https://gio86krt.github.io/QuizProject/)

![Screenshot1](/assets/home.png)
![Screenshot2](/assets/first.png)
![Screenshot3](/assets/second.png)
![Screenshot4](/assets/correct.png)
![Screenshot5](/assets/wrong.png)
![Screenshot6](/assets/final.png)
