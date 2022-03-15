import { LitElement, html, css } from 'lit';

export class CafPlayerView extends LitElement {
    static get is() {
        return 'caf-player-view';
    }

    static get properties() {
        return {
            player: { type: Object, reflect: false, attribute: false },
        };
    }

    static get styles() {
        return css`
            :host {
                display: flex;
                flex-grow: 1;
                padding: 1rem;
                margin: 1rem;
            }

            :host([hidden]) {
                display: none;
            }

            .board {
                display: flex;
                background-color: darkgray;
                background-image: url('assets/player-board-bg.jpg');
                background-repeat: no-repeat;
                background-position: 50% 65%;
                background-size: 85%;
                height: 360px;
                border: 2px solid var(--_caf-player-view-color);
            }

            .forest {
                margin-right: 10px;
            }

            .mountain {
                margin-left: 10px;
            }
        `;
    }

    get styleTemplate() {
        return html`
            <style>
                :host {
                    --_caf-player-view-color: ${ this.player.color }
                }
            </style>
        `;
    }

    render() {
        if (!this.player) return html``;

        return html`
            ${ this.styleTemplate }
            <h3>${ this.player.id }</h3>
            <div class="board">
                <caf-board class="forest" .cells=${ this.player.forest }></caf-board>
                <caf-board class="mountain" .cells=${ this.player.mountain }></caf-board>
            </div>
        `;
    }
}
