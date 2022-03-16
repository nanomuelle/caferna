import { LitElement, html, css } from 'lit';

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
                flex-grow: 1;
                background: radial-gradient(bisque, #f69d3c);
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
            <div class="space" style="flex-grow: ${space.flexGrow}">
                <h4>${space.action.name}</h4>
                <span>${space.dwarf}</span>
            </div>
        `;
    }

    get styleTemplate() {
        return html`
            <style>
                :host {
                    flex-grow: ${this.flexGrow};
                }
            </style>
        `;
    }

    render() {
        return html`
            ${this.styleTemplate}
            <label
                >${this.space.action.name}<input
                    type="radio"
                    name="space"
                    id="${this.space.action.id}"
            /></label>
            <span>${this.space.dwarf}</span>
        `;
    }
}
