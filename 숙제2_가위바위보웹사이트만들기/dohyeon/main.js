document.addEventListener("DOMContentLoaded", function () {
    // 현재 승리한 판수 저장
    let playerWins = 0;
    let computerWins = 0;
    let roundsPlayed = 0;

    document.getElementById("scissor").addEventListener("click", function () {
        playGame("scissors");
    });

    document.getElementById("rock").addEventListener("click", function () {
        playGame("rock");
    });

    document.getElementById("paper").addEventListener("click", function () {
        playGame("paper");
    });

    document.getElementById("resetButton").addEventListener("click", function () {
        resetGame();
    });

    // 게임 실행
    function playGame(playerChoice) {
        // 컴퓨터 선택 -> 랜덤 생성
        const choices = ["scissors", "rock", "paper"];
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        const imagePath = {
            scissors: "./pics/scissors.svg",
            rock: "./pics/rock.svg",
            paper: "./pics/paper.svg"
        };

        // 결과 계산
        const result = calculateResult(playerChoice, computerChoice);

        // 결과에 따라 점수 및 메시지 갱신
        updateScore(result);

        // 선택 표시
        displayChoice("player", playerChoice, imagePath[playerChoice]);
        displayChoice("computer", computerChoice, imagePath[computerChoice]);

        // 3판 진행 완료시 게임 종료
        if (roundsPlayed === 3) {
            finishGame();
        }
    }

    function displayChoice(player, choice, imagePath) {
        document.querySelector(`.${player}Img`).style.backgroundImage = `url(${imagePath})`;
    }

    // 결과 계산
    function calculateResult(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "tie";
        } else if (
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) {
            return "win";
        } else {
            return "lose";
        }
    }

    // 점수 갱신 
    function updateScore(result) {
        const playerPointElement = document.querySelector(".playerPoint");
        const computerPointElement = document.querySelector(".computerPoint");

        if (result === "win") {
            playerPointElement.textContent = ++playerWins;
        } else if (result === "lose") {
            computerPointElement.textContent = ++computerWins;
        }

        // 3판 진행 완료시 게임 종료
        roundsPlayed++;

        if (roundsPlayed === 3) {
            finishGame();
        }
    }

    // 게임 리셋
    function resetGame() {
        document.querySelector(".playerPoint").textContent = "0";
        document.querySelector(".computerPoint").textContent = "0";
        resetImages();

        playerWins = 0;
        computerWins = 0;
        roundsPlayed = 0;
    }

    function resetImages() {
        document.querySelector(".playerImg").style.backgroundImage = "none";
        document.querySelector(".computerImg").style.backgroundImage = "none";
    }

    // 게임 종료
    function finishGame() {
        let winnerMessage;

        if (playerWins > computerWins) {
            winnerMessage = "이겼다!";
        } else if (playerWins < computerWins) {
            winnerMessage = "졌다,,";
        } else {
            winnerMessage = "비겼는데, 한 판 더?";
        }

        alert(winnerMessage);

        // 초기화
        playerWins = 0;
        computerWins = 0;
        roundsPlayed = 0;
        resetGame();
    }
});
