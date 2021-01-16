const template: string = `
<h1>WebAssembly - Rust + Typescript</h1>
`;

export class App extends HTMLElement {
    public static TAG: string = `kk-app`;

    public readonly shadowRoot!: ShadowRoot;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        console.log('Test');
    }
}
customElements.define(App.TAG, App);