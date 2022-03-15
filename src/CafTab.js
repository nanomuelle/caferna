import { LitElement, html, css } from 'lit';

export class CafTab extends LitElement {
    static get is() {
        return 'caf-tab';
    }

    static get properties() {
        return {
            label: { type: String },
            color: { type: String },
            ariaSelected: { type: String, attribute: 'aria-selected' }
        };
    }

    static get styles() {
        return css`
            :host {
                border-bottom: 4px solid var(--_caf-tab-color);
                min-width: 200px;
                margin: 0.5rem;
                padding: 0.1rem 1rem;
                color: var(--_caf-tab-color);
                text-align: center;
                cursor: pointer;
            }

            :host([aria-selected="true"]) {
                border-left: 1px solid var(--_caf-tab-color);
                border-right: 1px solid var(--_caf-tab-color);
                border-top: 1px solid var(--_caf-tab-color);
            }
        `;
    }

    _updateAssociatedPanel() {
        if (!this.hasAttribute('aria-controls')) {
            return;
        }
        const ariaControls = this.getAttribute('aria-controls');
        const panel = document.getElementById(ariaControls);
        if (!panel) {
            return;
        }

        if (this.isSelected) {
            panel.removeAttribute('hidden');
        } else {
            panel.setAttribute('hidden', '');
        }
    }

    firstUpdated() {
        this.setAttribute('role', 'tab');
    }

    get isSelected() {
        return this.ariaSelected;
    }

    select() {
        this.ariaSelected = true;
    }

    unselect() {
        this.ariaSelected = false;
    }

    updated(changedProperties) {
        if (changedProperties.has('ariaSelected')) {
            this.tabindex = this.ariaSelected ? 0 : -1;
            this._updateAssociatedPanel();
        }
    }

    get styleTemplate() {
        return html`
            <style>
                :host {
                    --_caf-tab-color: ${ this.color }
                }
            </style>
        `;
    }

    render() {
        return html`
            ${ this.styleTemplate }
            <slot>${ this.label }</slot>
        `;
    }
}