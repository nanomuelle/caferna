import { LitElement, html, css } from 'lit';

export class CafBoardCell extends LitElement {
    static get is() {
        return 'caf-board-cell';
    }

    static get styles() {
        return css`
            :host {
                width: 60px;
                height: 60px;
                box-sizing: border-box;
                border: 1px dotted lightgray;
            }

            /*
            :host([kind="x"]) {
                background-color: darkgray;
            }
            */
        `;
    }

    static get properties() {
        return {
            kind: {
                type: String
            }
        }
    }

    render() {
        return html`<slot class="${ this.kind }"></slot>`;
    }
}