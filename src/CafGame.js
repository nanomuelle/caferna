import { LitElement, html, css } from 'lit';
// import { createState, endPlayerTurn, findInitialPlayer } from './logic/game.js';

import { GameManager } from './man/game-manager.js';

const playerViewId = player => `${player.id}-view`;
const playerTabId = player => `${player.id}-tab`;

export class CafGame extends LitElement {
    static get is() {
        return 'caf-game';
    }

    static get properties() {
        return {
            title: { type: String },
            viewPlayer: { type: Object },

            game: { type: Object },
            roundNumber: { type: Number },
            selectedPlayerIndex: { type: Number }
        };
    }

    static get styles() {
        return css`
            :host {
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                font-size: calc(10px + 1vmin);
                color: #1a2b42;
                max-width: 960px;
                margin: 0 auto;
                text-align: center;
                background-color: var(--caf-game-background-color);
            }

            main {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
            }

            .app-footer {
                font-size: calc(12px + 0.5vmin);
                align-items: center;
            }

            .app-footer a {
                margin-left: 5px;
            }
        `;
    }

    constructor() {
        super();
        // this.title = 'My app';
        // this.state = createState();
        // this.viewPlayer = findInitialPlayer(this.players);

        this.game = undefined;
        this.roundNumber = undefined;
        this.selectedPlayerIndex = undefined;
    }

    firstUpdated() {
        this.game = new GameManager();
        this.game.init();

        this.roundNumber = this.game.roundNumber;
        // this.selectedPlayerIndex = game.playerTurnIndex;
    
        this.game.discoverPhase();
        this.game.replenishPhase();
        this.requestUpdate();
    }
    
    // get players() {
    //     return this.state.players;
    // }

    _onPlayerTabClick(event) {
        const { playerId } = event.target.dataset;
        this.viewPlayer = this.players.find(player => player.id === playerId);
    }

    // get currentRound() {
    //     return this.state.rounds[this.state.rounds.length - 1];
    // }

    // get playerIdWithTurn() {
    //     return this.currentRound.order[this.currentRound.orderIndex];
    // }

    _playerTabTemplate(player) {
        const { id, color } = player;
        const ariaSelected = player === this.viewPlayer ? 'true' : 'false';
        const label = `${ id }${ this.playerIdWithTurn === player.id ? '*' : '' }`;

        return html`
            <caf-tab
                data-player-id="${id}"
                id="${playerTabId(player)}"
                aria-selected="${ariaSelected}"
                aria-controls="${playerViewId(player)}"
                color="${color}"
                @click=${this._onPlayerTabClick}
                >${ label }</caf-tab
            >
        `;
    }

    get playerTablistTemplate() {
        return html`
            <h3>Round ${ this.roundNumber }</h3>
            <div role="tablist">
                ${this.game.players.map(this._playerTabTemplate.bind(this))}
            </div>
        `;
    }

    // _onPlayerEndTurn() {
    //     this.state = endPlayerTurn(this.state);
    //     const currentTurnPlayerId =
    //         this.currentRound.order[this.currentRound.orderIndex];
    //     this.viewPlayer = this.players.find(
    //         player => player.id === currentTurnPlayerId
    //     );
    // }

    _onePlayerViewTemplate(player) {
        return html`
            <caf-player-view
                role="tabpanel"
                id="${ playerViewId(player) }"
                labelledBy="${ playerTabId(player) }"
                .player=${ player }
                ?hidden=${ player !== this.viewPlayer }
                ?has-turn=${ this.playerIdWithTurn === player.id }
                @caf-player-view-end-turn=${ this._onPlayerEndTurn }
            ></caf-player-view>
        `;
    }

    get playerViewsTemplate() {
        return html`${ 
            this.players.map(
                player => this._onePlayerViewTemplate(player)
            )
        }`;
    }

    render() {
        if (!this.game?.ready) {
            return html`<h4>loading...</h4>`;
        }
        return html`
            <main>
                ${ this.playerTablistTemplate }
                ${ 'this.playerViewsTemplate' }
                <caf-spaces .game=${ this.game }></caf-spaces>
            </main>

            <p class="app-footer">
                🌀 Made with love by
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/open-wc"
                    >F.G.Huerta</a
                >.
            </p>
        `;
    }
}
