import { LitElement, html, css } from 'lit';

export const BOARD_COLS = 4;
export const BOARD_ROWS = 6;
export class CafBoard extends LitElement {
    static get is() {
        return 'caf-board';
    }
    
    static get styles() {
        return css`
            :host {
                display: flex;
                flex-flow: row wrap;
                place-content: center;
                align-items: center;
                width: 240px; /* 50 * 4 */
            }
        `;
    }

    static get properties() {
        return {
            cells: {
                type: Array,
                reflect: false,
                attribute: false
            }
        };
    }

    constructor() {
        super();
        this.cells = [];
        for (let i = 0; i < BOARD_COLS * BOARD_ROWS; i += 1) {
            this.cells.push('');
        }
    }

    render() {
        return html`
            ${ this.cells.map(
                cell =>html`<caf-board-cell kind=${ cell.trim() }></caf-board-cell>`
            )}
        `;
    }
}