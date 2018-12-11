import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'paragraph-generator';
wordLimit: any = 100;
textContent: String = '';
formatedContent: any = [];
numberOfTimeIteration: Number = 0;
startPosition: Number = 0;
endPosition: Number = 0;
splitedContent: any = [];
str: String = '';

constructor() {
}

onSelectWordLimit(value) {
this.wordLimit = value;
this.endPosition = value;
this.onContentChange(this.textContent);
}

onContentChange(value) {
this.splitedContent = value.trim().split(' ');
this.numberOfTimeIteration = Number((value.trim().split(' ').length / this.wordLimit).toString().charAt(0)) + 1;
this.endPosition = this.splitedContent.length;
for (let i = 1; i <= this.numberOfTimeIteration; i++) {
this.str = '';

this.startPosition = (i - 1) * this.wordLimit;
if (this.startPosition > this.splitedContent.length) {
this.startPosition = 0;
}
this.formatedContent.length = i;

if (this.startPosition === 0 && this.splitedContent.length > this.wordLimit) {
this.formatedContent.length = 0;
this.endPosition = this.wordLimit - 1;
} else if (this.splitedContent.length > (this.wordLimit * i)) {
this.endPosition = this.wordLimit * i - 1;
} else {
this.endPosition = this.splitedContent.length;
}

for (let j = Number(this.startPosition); j <= this.endPosition; j++) {
if (this.splitedContent[j])
this.str += this.splitedContent[j] + ' ';
}

if (this.startPosition === 0 && this.splitedContent.length > this.wordLimit ||
this.formatedContent.length === i - 1) {
this.formatedContent.push(this.str);
} else {
this.formatedContent[this.formatedContent.length - 1] = this.str;
}
}
}
}
