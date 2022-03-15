import { LitElement, html, css, nothing } from 'lit';

const goodTemplate = (label, amount) => html`
    <tr>
        <td>${label}</td>
        <td>${amount}</td>
    </tr>
`;

export class CafPlayerView extends LitElement {
    static get is() {
        return 'caf-player-view';
    }

    static get properties() {
        return {
            hasTurn: { type: Boolean, reflect: true, attribute: 'has-turn' },
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

            .info {
                width: 300px;
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
                    --_caf-player-view-color: ${this.player.color};
                }
            </style>
        `;
    }

    _onEndTurnClick() {
        this.dispatchEvent(
            new CustomEvent('caf-player-view-end-turn', {
                detail: { player: this.player },
                bubbles: true,
                composed: true,
            })
        );
    }

    get boardTemplate() {
        return html`
            <div class="board">
                <caf-board
                    class="forest"
                    .cells=${this.player.forest}
                ></caf-board>
                <caf-board
                    class="mountain"
                    .cells=${this.player.mountain}
                ></caf-board>
            </div>
        `;
    }

    get endTurnTemplate() {
        return html`<button @click=${this._onEndTurnClick}>End Turn</button>`;
    }

    get infoTemplate() {
        const goods = [
            'wood',
            'stone',
            'ore',
            'ruby',
            'grain',
            'veggy',
            'food',
            'gold',
            'sheep',
            'boar',
            'donkey',
            'cow',
        ];
        return html`
            <div class="info">
                <h3>${this.player.id}${this.hasTurn ? '*' : ''}</h3>
                <table>
                    <tr>
                        <td>Initial Player</td>
                        <td>${this.player.isInitial ? 'Yes' : 'No'}</td>
                    </tr>
                    ${goods.map(name => goodTemplate(name, this.player[name]))}
                </table>
                ${this.hasTurn ? this.endTurnTemplate : nothing}
            </div>
        `;
    }

    render() {
        if (!this.player) return html``;

        return html`
            ${this.styleTemplate} ${this.infoTemplate} ${this.boardTemplate}
        `;
    }
}
