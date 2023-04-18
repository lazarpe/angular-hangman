import {Component} from '@angular/core';

@Component({
  selector: 'app-playing-field',
  templateUrl: './playing-field.component.html',
  styleUrls: ['./playing-field.component.css'],
})
export class PlayingFieldComponent {
  dictionary: string[] = ['BANANA', 'MANGO', 'APPLE', 'PEACH'];
  word: string = this.getRandomWord();
  letters: string[] = this.word.split('');
  gameStarted: boolean = false;

  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  guessed_right_characters: string[] = [];
  guessed_wrong_characters: string[] = [];

  getRandomWord(): string {
    return this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
  }

  resetGame(): void {
    this.gameStarted = true;
    this.word = this.getRandomWord();
    this.letters = this.word.split('');
    this.guessed_right_characters = [];
    this.guessed_wrong_characters = [];

    for (let right_char of this.letters) {
      this.guessed_right_characters.push('_');
    }
  }

  guess(letter: string): void {
    if (this.word.indexOf(letter) > -1) {
      this.letters = this.letters.map((l) => {
        if (l === letter) {
          console.log('letter: ', letter)
          this.letters.forEach((l, i) => {
            if (l === letter) {
              this.guessed_right_characters[i] = letter;
            }
          });
          return letter;
        } else {
          console.log('l: ', l)
          return l;
        }
      });
      if (this.guessed_right_characters.indexOf('_') === -1) {
        this.gameStarted = false;
        alert('You won! The word was: ' + this.word);
      }
    } else {
      if (this.guessed_wrong_characters.indexOf(letter) > -1) {
        return;
      }
      this.guessed_wrong_characters.push(letter);
      if (this.guessed_wrong_characters.length === 10) {
        this.gameStarted = false;
        alert('Game over! The word was: ' + this.word);
      }
    }
  }

  isLetterUsed(letter: string): boolean {
    return this.guessed_right_characters.indexOf(letter) > -1 || this.guessed_wrong_characters.indexOf(letter) > -1;
  }
}
