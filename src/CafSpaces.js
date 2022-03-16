import { LitElement, html, css } from 'lit';

export class CafSpaces extends LitElement {
    static get is() {
        return 'caf-spaces';
    }

    static get properties() {
        return {
            spaces: { type: Object },
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

    static actionTemplate(space) {
        return html`<caf-space .space=${space}></caf-space>`;
    }

    render() {
        return html`
            ${this.styleTemplate}
            <div class="spaces">
                <div class="col">
                    ${this.spaces
                        .filter(space => space.col === 1)
                        .map(this.constructor.actionTemplate)}
                </div>
                <div class="col">
                    ${this.spaces
                        .filter(space => space.col === 2)
                        .map(this.constructor.actionTemplate)}
                </div>
                <div class="col">
                    ${this.spaces
                        .filter(space => space.col === 3)
                        .map(this.constructor.actionTemplate)}
                </div>
                <div class="col">
                    ${this.spaces
                        .filter(space => space.col === 4)
                        .map(this.constructor.actionTemplate)}
                </div>
            </div>
        `;
    }
}
