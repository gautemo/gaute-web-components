import './github.js'
import './twitter.js'
import './homepage.js'

const html = `
<div>
  <p>Created by <i>Gaute Meek Olsen</i></p>
  <github-link></github-link>
  <twitter-link></twitter-link>
  <homepage-link></homepage-link>
</div>

<style>
div{
  display: flex;
  align-items: center;
  height: 26px;
}

p{
  margin: 0 5px 0 0;
}
</style>
`

class CreatedByMe extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.innerHTML = html
  }
}

customElements.define('created-by-me', CreatedByMe);