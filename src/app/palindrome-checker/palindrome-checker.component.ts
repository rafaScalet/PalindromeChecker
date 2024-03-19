import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome-checker',
  templateUrl: './palindrome-checker.component.html',
  styleUrl: './palindrome-checker.component.css',
})
export class PalindromeCheckerComponent {
  word: string = '';
  result: boolean = false;
  img: string = '';

  check() {
    const cleanWord = this.word.replace(/\s/g, '').toLowerCase();
    const invertedWord = cleanWord.split('').reverse().join('');
    this.result = cleanWord === invertedWord;
  }
}
