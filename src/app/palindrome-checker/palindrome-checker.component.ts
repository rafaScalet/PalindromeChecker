import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome-checker',
  templateUrl: './palindrome-checker.component.html',
  styleUrl: './palindrome-checker.component.css',
})
export class PalindromeCheckerComponent {
  word: string = '';
  result: boolean = false;

  check() {
    if (this.word.length >= 3) {
      const cleanWord = this.word.toLowerCase();
      const invertedWord = cleanWord.split('').reverse().join('');
      return this.result = cleanWord === invertedWord;
    }else{
      this.result = false
      return this.result
    }
  }
}
