var mode = prompt(
  "Отправьте 1, если вы играете в одиночку. Отправьте 2, если играете с другом. Или нажмите Отмена для выхода из игры.",
  "1"
);
while (mode !== null) {
  //для режима 2
  if (mode === "2") {
    var word = prompt("Загадайте слово из пяти букв:", "пятка");
    //если слово не из 5 букв
    if (word.length !== 5) {
      alert("Игра называется ПЯТЬ букв!");
    } else {
      var answerArray = [];
      for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }
      while (word !== guess) {
        alert(answerArray.join(" "));
        var guess1 = prompt(
          "Угадайте слово или нажмите Отмена для выхода из игры."
        );
        var guess = guess1.toLowerCase();
        if (guess === null) {
          //если нажали Отмена
          break;
        } else if (guess.length !== 5) {
          alert("Игра называется ПЯТЬ букв!");
        } else {
          //играем!
          if (guess.slice(0, 1) == word.slice(0, 1)) {
            answerArray[0] = guess.slice(0, 1);
            if (guess.slice(1, 2) == word.slice(1, 2)) {
              answerArray[1] = guess.slice(1, 2);
              if (guess.slice(2, 3) == word.slice(2, 3)) {
                answerArray[2] = guess.slice(2, 3);
                if (guess.slice(3, 4) == word.slice(3, 4)) {
                  answerArray[3] = guess.slice(3, 4);
                  if (guess.slice(4, 5) == word.slice(4, 5)) {
                    answerArray[4] = guess.slice(4, 5);
                    if (guess.slice(5, 6) == word.slice(5, 6)) {
                      alert("А-А-А-А-А-А-А! Вы угадали слово!");
                      answerArray[5] = guess.slice(5, 6);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } //для режима 1
  } else if (mode === "1") {
    var words = [
      "ручка",
      "кошка",
      "шесть",
      "вязка",
      "аниме",
      "губка",
      "автор",
      "башня",
      "вафля",
      "глист",
      "добро",
      "егерь",
      "жабры",
      "зевок",
      "изыск",
      "козни",
      "лепет",
      "мышка",
      "немец",
      "обряд",
      "петух",
      "рачок",
      "стриж",
      "тальк",
      "устав",
      "фишка",
      "хмель",
      "цокот",
      "чужой",
      "шизик",
      "щегол",
      "эмаль",
      "юрист",
      "яичко",
      "ябеда",
    ];
    word = words[Math.floor(Math.random() * words.length)];
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    while (word !== guess) {
      alert(answerArray.join(" "));
      guess1 = prompt("Угадайте слово или нажмите Отмена для выхода из игры.");
      guess = guess1.toLowerCase();
      if (guess === null) {
        //если нажали Отмена
        break;
      } else if (guess.length !== 5) {
        alert("Игра называется ПЯТЬ букв!");
      } else {
        //играем!
        if (guess.slice(0, 1) == word.slice(0, 1)) {
          answerArray[0] = guess.slice(0, 1);
          if (guess.slice(1, 2) == word.slice(1, 2)) {
            answerArray[1] = guess.slice(1, 2);
            if (guess.slice(2, 3) == word.slice(2, 3)) {
              answerArray[2] = guess.slice(2, 3);
              if (guess.slice(3, 4) == word.slice(3, 4)) {
                answerArray[3] = guess.slice(3, 4);
                if (guess.slice(4, 5) == word.slice(4, 5)) {
                  answerArray[4] = guess.slice(4, 5);
                  if (guess.slice(5, 6) == word.slice(5, 6)) {
                    alert("А-А-А-А-А-А-А! Вы угадали слово!");
                    answerArray[5] = guess.slice(5, 6);
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    alert(
      "Отправьте 1, если вы играете в одиночку. Отправьте 2, если играете с другом. Или нажмите Отмена для выхода из игры.",
      "1"
    );
  }
}
alert(answerArray.join(" "));
alert("Отлично! Было загадано слово " + word);
