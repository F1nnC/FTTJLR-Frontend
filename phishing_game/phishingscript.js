const emails = [
  {
      text: "Dear Beloved Friend, I know this message will come to you as surprised but permit me of my desire to go into business relationship with you. I am Miss Naomi Surugaba a daughter to late Al-badari Surugaba of Libya whom was murdered during the recent civil war in Libya in March 2011, before his death my late father was a strong supporter and a member of late Moammar Gadhafi Government in Tripoli. Meanwhile before the incident, my late Father came to Cotonou Benin republic with the sum of USD4, 200,000.00 (US$4.2M) which he deposited in a Bank here in Cotonou Benin Republic West Africa for safe keeping. I am here seeking for an avenue to transfer the fund to you in only you're reliable and trustworthy person to Investment the fund. Please I wish to transfer the fund urgently without delay into your account and also wish to relocate to your country due to the poor condition in Benin, as to enable me continue my education as I was a medical student before the sudden death of my parent's. Your immediate response would be appreciated.",
      isLegitimate: false
  },
  {
      text: "Hello user, your recent purchase has been confirmed. If you did not make this purchase, please contact us immediately.",
      isLegitimate: true
  },
  {
      text: "URGENT: Your account will be suspended unless you verify your information. Click the link to proceed: https://fakephishingsite.com/verify",
      isLegitimate: false
  },
  {
      text: "Dear customer, thank you for your recent order. Here is your order confirmation: Order #123456",
      isLegitimate: true
  },
  {
      text: "Thanks for working with us. Your bill for $373.75 was due on 28 Aug 2016. If you've already paid it, please ignore this email and sorry for bothering you. If you've not paid it, please do so as soon as possible. To view your bill visit https://in.xero.com/5LQDhRwfvoQfeDtLDMqkk1JWSqC4Cm.Jt4VVJRsGN. If you've got any questions, or want to arrange alternative payment don't hesitate to get in touch. Thanks, NJW Limited",
      isLegitimate: false
  },
  {
      text: "Congratulations! You've won a prize. Click the link to claim: https://amazon.com/winner",
      isLegitimate: false
  },
  {
      text: "Important update: Your software requires an immediate update. Click the link to download: https://legitsoftwaredownload.com",
      isLegitimate: true
  },
  {
      text: "Account notification: Your account has been logged in from a new device. Verify your identity: https://fakephishingsite.com/verify",
      isLegitimate: false
  },
  {
      text: "Invoice: Your recent payment is successful. Here is your invoice: Invoice #789012",
      isLegitimate: true
  },
  {
      text: "Security Notice: Your password has expired. Click the link to change it: https://fakephishingsite.com/changepassword",
      isLegitimate: false
  }
];

let currentLevel = 0;
let correctAnswers = 0;

// Function to shuffle the emails array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the emails array
shuffle(emails);

document.addEventListener("DOMContentLoaded", () => {
  function startGame() {
      if (currentLevel < 5) {
          document.getElementById("email-text").textContent = emails[currentLevel].text;
      } else {
          endGame();
      }
  }

  function checkAnswer(userResponse) {
      if (emails[currentLevel].isLegitimate === userResponse) {
          correctAnswers++;
      }

      currentLevel++;
      document.getElementById("result").textContent = "";
      startGame();
  }

  function endGame() {
      document.getElementById("game-container").innerHTML = `
          <h1>Game Over!</h1>
          <p>You completed the game with ${correctAnswers} correct answers out of 5 questions.</p>
      `;
  }

  function resetGame() {
    currentLevel = 0;
    correctAnswers = 0;
    shuffle(emails);
    document.getElementById("game-container").innerHTML = `
        <h1>Email Phishing Game</h1>
        <p id="email-text" style="position: relative; bottom: 340px;"></p>
        <button class="legitBtn">Legitimate Email</button>
        <button class="phishingButton">Phishing Email</button>
        <p id="result"></p>
    `;
    attachEventListeners();
    startGame();
}

    function attachEventListeners() {
        document.querySelector(".legitBtn").addEventListener("click", () => checkAnswer(true));
        document.querySelector(".phishingButton").addEventListener("click", () => checkAnswer(false));
    }

    document.getElementById("playAgainBtnP").addEventListener("click", resetGame);

    // Attach event listeners to buttons
    attachEventListeners();

  // Start the game
  startGame();
});
