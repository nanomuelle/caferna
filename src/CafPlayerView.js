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

    render() {
        if (!this.player) return html``;

        return html`
            ${this.styleTemplate}
            <div class="info">
                <h3>${this.player.id}</h3>
                <table>
                    <tr>
                        <td>Initial Player</td>
                        <td>${this.player.isInitial ? 'Yes' : 'No'}</td>
                    </tr>
                    <tr>
                        <td>Wood</td>
                        <td>${this.player.wood}</td>
                    </tr>
                    <tr>
                        <td>Stone</td>
                        <td>${this.player.stone}</td>
                    </tr>
                    <tr>
                        <td>Ore</td>
                        <td>${this.player.ore}</td>
                    </tr>
                    <tr>
                        <td>Ruby</td>
                        <td>${this.player.ruby}</td>
                    </tr>
                    <tr>
                        <td>Grain</td>
                        <td>${this.player.grain}</td>
                    </tr>
                    <tr>
                        <td>Veggy</td>
                        <td>${this.player.veggy}</td>
                    </tr>
                    <tr>
                        <td>Food</td>
                        <td>${this.player.food}</td>
                    </tr>
                    <tr>
                        <td>Gold</td>
                        <td>${this.player.gold}</td>
                    </tr>
                    <tr>
                        <td>Sheep</td>
                        <td>${this.player.sheep}</td>
                    </tr>
                    <tr>
                        <td>Boar</td>
                        <td>${this.player.boar}</td>
                    </tr>
                    <tr>
                        <td>Donkey</td>
                        <td>${this.player.donkey}</td>
                    </tr>
                    <tr>
                        <td>Cow</td>
                        <td>${this.player.cow}</td>
                    </tr>
                </table>
                <button @click=${this._onEndTurnClick}>End Turn</button>
            </div>
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
}
