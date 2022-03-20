import { LitElement, html, css } from 'lit';

export class CafSpaces extends LitElement {
    static get is() {
        return 'caf-spaces';
    }

    static get properties() {
        return {
            game: { type: Object },
            spaces: { type: Array },
        };
    }

    static get styles() {
        return css`
            :host {
                background-color: darkgray;
                border-width: 1rem;
                padding: 1rem;
            }

            h4 {
                font-size: 0.6rem;
                font-weight: 400;
                margin: 0.2rem;
                background-color: antiquewhite;
                border-radius: 2px;
                border: 1px solid brown;
                padding: 0.2rem;
            }
            .spaces {
                display: flex;
                flex-direction: row;
                gap: 0.2rem;
                height: 500px;
            }
            .col {
                display: flex;
                width: 120px;
                flex-direction: column;
                gap: 0.2rem;
            }
            .space {
                border: 6px solid whitesmoke;
                border-radius: 0.4rem;
                flex-grow: 1;
                _background-color: bisque;
                background: radial-gradient(bisque, #f69d3c);
            }
        `;
    }

    static actionTemplate(space, flexGrow = 1) {
        return html`<caf-space .space=${ space } style="flex-grow: ${ flexGrow }"></caf-space>`;
    }

    constructor() {
        super();
        this.spaces = [];
    }

    updated(changedProperties) {
        if (changedProperties.has('game')) {
            this.spaces = [...this.game.spaceManager.spaces];
        }
    }

    render() {
        return html`
            ${this.styleTemplate}
            <div class="spaces">
                <div class="col">
                    ${ this.constructor.actionTemplate(this.spaces[0], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[1], 0.4) }
                    ${ this.constructor.actionTemplate(this.spaces[2], 0.9) }
                    ${ this.constructor.actionTemplate(this.spaces[3], 0.7) }
                </div>
                <div class="col">
                    ${ this.constructor.actionTemplate(this.spaces[4], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[5], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[6], 1) }
                </div>
                <div class="col">
                    ${ this.constructor.actionTemplate(this.spaces[7], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[8], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[9], 1) }
                </div>
                <div class="col">
                    ${ this.constructor.actionTemplate(this.spaces[10], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[11], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[12], 1) }
                </div>
                <div class="col">
                    ${ this.constructor.actionTemplate(this.spaces[13], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[14], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[15], 1) }
                </div>
                <div class="col">
                    ${ this.constructor.actionTemplate(this.spaces[16], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[17], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[18], 1) }
                </div>
                <div class="col">
                    ${ this.constructor.actionTemplate(this.spaces[19], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[20], 1) }
                    ${ this.constructor.actionTemplate(this.spaces[21], 1) }
                </div>
            </div>
        `;
    }
}
