import {Component} from '@angular/core';

@Component({
    selector:'authors',
    template:`
        <h2>Authors</h2>
        {{title}}
        <ul>
            <li *ngFor="let author of authors">
                {{author}}
            </li>
        </ul>
    `
})
export class AuthorsComponent {
    title: string = 'Title for the authors page';
    authors: Array<string> = ['Author 1', 'Author 2', 'Author 3'];
}