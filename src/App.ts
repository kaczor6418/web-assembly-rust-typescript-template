import { KKMath } from '../kk-math/pkg/kk_math';

const template: string = `
<h1>WebAssembly - Rust + Typescript</h1>
<span></span>
<button>Calculate expression</button>
<p></p>
`;

export class App extends HTMLElement {
    public static TAG: string = `kk-app`;

    public readonly shadowRoot!: ShadowRoot;
    public readonly expression: HTMLSpanElement;
    public readonly evaluatorButton: HTMLButtonElement;
    public readonly score: HTMLParagraphElement;

    private valueA: number = 11.5;
    private valueB: number = 13.5;
    private kkMath: KKMath;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = template;
        this.evaluatorButton = this.shadowRoot.querySelector('button')!
        this.expression = this.shadowRoot.querySelector('span')!;
        this.score = this.shadowRoot.querySelector('p')!;
        this.kkMath = KKMath.new(this.valueA, this.valueB);
        this.expression.textContent = `${this.valueA} + ${this.valueB}`
        this.evaluatorButton.addEventListener('click', () => this.score.textContent = this.kkMath.add().toString());
    }
}
customElements.define(App.TAG, App);