import { LitElement, html, css } from 'lit';
import { createState } from './logic/game.js';

export class CafGame extends LitElement {
    static get is() {
        return 'caf-game';
    }

    static get properties() {
        return {
            title: { type: String },
            state: { type: Object },
            viewPlayer: { type: Object }
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
        font-size: calc(10px + 2vmin);
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

      .logo {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
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
        this.title = 'My app';
        this.state = createState();
        this.viewPlayer = this.state.players[0];
    }

    get players() {
        return this.state.players;
    }

    _onPlayerTabClick(event) {
        const { playerId } = event.target.dataset;
        this.viewPlayer = this.players.find(player => player.id === playerId);
    }

    _playerTabTemplate(player) {
        return html`
            <caf-tab
                data-player-id="${ player.id }"
                id="${ `${ player.id }-tab` }"
                aria-selected="${ player === this.viewPlayer ? 'true' : 'false' }"
                aria-controls="${ `${ player.id }-view` }"
                color="${ player.color }"
                @click=${ this._onPlayerTabClick }
            >
                ${ player.id }
            </caf-tab>
        `;
    }

    get playerTablistTemplate() {
        return html`
            <div role="tablist">
                ${ this.players.map(this._playerTabTemplate.bind(this)) }
            </div>
        `;
    }

    get playerViewsTemplate() {
        return html`
            ${ this.players.map( 
                player => html`
                    <caf-player-view
                        role="tabpanel"
                        id="${ `${ player.id }-view` }"
                        labelledBy="${ `${ player.id}-tab` }" 
                        .player=${ player }
                        ?hidden=${ player !== this.viewPlayer }
                    ></caf-player-view>
                `
            )}
        `;
    }

    render() {
        return html`
    <main>
        ${ this.playerTablistTemplate }
        ${ this.playerViewsTemplate }
    </main>
    
    <p class="app-footer">
        🚽 Made with love by
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/open-wc">open-wc</a>.
    </p>
    `;
    }
}
