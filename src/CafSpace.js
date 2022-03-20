import { LitElement, html, css, nothing } from 'lit';

export class CafSpace extends LitElement {
    static get is() {
        return 'caf-space';
    }

    static get properties() {
        return {
            space: { type: Object },
            options: { type: Array },
        };
    }

    static get styles() {
        return css`
            :host {
                border: 6px solid whitesmoke;
                border-radius: 0.4rem;
            }
            div {
                height: 100%;
            }
            .space {
                background: radial-gradient(bisque, #f69d3c);
            }
            .empty {
                background: radial-gradient(lightgray, gray );
            }
            label {
                display: flex;
                flex-wrap: nowrap;
                flex-direction: row;
                align-content: center;
                align-items: center;
                justify-content: space-between;

                margin: 0.1rem;
                padding: 0.1rem;

                font-size: 0.6rem;
                font-weight: 400;

                background-color: antiquewhite;
                border-radius: 2px;
                border: 1px solid brown;
            }
        `;
    }

    static actionTemplate(space) {
        return html`
            <div class="space">
                <h4>${ space.name }</h4>
                <span>${ space.dwarf }</span>
            </div>
        `;
    }

    render() {
        if (!this.space) {
            return html`
                <div class="empty"></div>
            `;
        }
        return html`
            <div class="space">
                <label>
                    ${this.space.name}
                    <input
                        type="radio"
                        name="space"
                        id="${this.space.id}"
                    />
                </label>
                <span>${this.space.dwarf}</span>
            </div>
        `;
    }
}
