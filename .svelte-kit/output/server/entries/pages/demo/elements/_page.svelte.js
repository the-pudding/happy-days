import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
const Demo_Elements_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-p95kjz.svelte-p95kjz{padding:1rem;max-width:60rem;margin:0 auto}article.svelte-p95kjz>h2.svelte-p95kjz{background:var(--color-fg);color:var(--color-bg);padding:0 16px}",
  map: null
};
const Demo_Elements = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-p95kjz"><h1 data-svelte-h="svelte-1fo3fq5">Default Element Styles</h1> <section id="text" data-svelte-h="svelte-dn40j"><article id="text--headings" class="svelte-p95kjz"><h2 class="svelte-p95kjz">Headings</h2> <div><h1>Heading 1</h1> <h2>Heading 2</h2> <h3>Heading 3</h3> <h4>Heading 4</h4> <h5>Heading 5</h5> <h6>Heading 6</h6></div></article> <article id="text--paragraphs" class="svelte-p95kjz"><h2 class="svelte-p95kjz">Paragraphs</h2> <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra
					viverra nisl, vel maximus turpis ornare a. Ut scelerisque lectus sed
					odio dictum scelerisque vitae quis nisi. Nulla facilisi. Phasellus
					vehicula convallis nisl, id suscipit dui semper at. In eu iaculis
					lorem. In vehicula sed mauris et suscipit. Vivamus pellentesque non
					massa sit amet ornare. Integer placerat est vitae nisl molestie, eget
					rhoncus erat vulputate. Proin ornare massa eget bibendum faucibus.</p></div></article> <article id="text--blockquotes" class="svelte-p95kjz"><h2 class="svelte-p95kjz">Blockquotes</h2> <div><blockquote><p>Etiam porttitor egestas elit, at venenatis neque accumsan eu. Nulla
						viverra odio nisi, quis commodo tellus tristique non. Proin ac ante
						at orci euismod eleifend. Quisque nisi sapien, dapibus in venenatis
						sit amet, posuere non purus. In sit amet metus erat. Pellentesque
						nec neque eleifend, luctus ipsum at, ullamcorper nunc. Pellentesque
						sagittis, dolor eu bibendum lacinia, orci ex bibendum risus, at
						tincidunt augue lacus eleifend diam. Nulla facilisis velit ut est
						auctor sollicitudin. Morbi eget lectus a lacus maximus molestie in
						ut lorem.</p> <p>Vestibulum ut erat sapien. Duis eros est, tempus a rutrum eu,
						rhoncus at ante. Vestibulum congue vel nunc et dapibus. Ut tristique
						facilisis orci ac pretium. Nunc et sodales turpis. Nulla pretium
						augue vitae faucibus tempor. Aliquam convallis mollis feugiat. Ut
						non pellentesque sem. Suspendisse interdum, neque at hendrerit
						varius, enim neque imperdiet enim, pellentesque efficitur leo orci
						non erat.</p> <cite>Said no one, ever.</cite></blockquote></div></article> <article id="text--lists" class="svelte-p95kjz"><h2 class="svelte-p95kjz">Lists</h2> <div><h3>Definition list</h3> <dl><dt>Definition List Title</dt><dd>This is a definition list division.</dd></dl> <h3>Ordered List</h3> <ol><li>List Item 1</li> <li>List Item 2</li> <li>List Item 3
						<ol><li>Nested Ordered List Item 3.1</li> <li>Nested Ordered List Item 3.2</li> <li>Nested Ordered List Item 3.3</li></ol></li> <li>List Item 4
						<ul><li>Nested Unordered List Item 4.1</li> <li>Nested Unordered List Item 4.2</li> <li>Nested Unordered List Item 4.3</li></ul></li></ol> <h3>Unordered List</h3> <ul><li>List Item 1</li> <li>List Item 2</li> <li>List Item 3
						<ol><li>Nested Ordered List Item 3.1</li> <li>Nested Ordered List Item 3.2</li> <li>Nested Ordered List Item 3.3</li></ol></li> <li>List Item 4
						<ul><li>Nested Unordered List Item 4.1</li> <li>Nested Unordered List Item 4.2</li> <li>Nested Unordered List Item 4.3</li></ul></li></ul></div></article> <article id="text--hr" class="svelte-p95kjz"><h2 class="svelte-p95kjz">Horizontal rules</h2> <div><hr></div></article> <article id="text--tables" class="svelte-p95kjz"><h2 class="svelte-p95kjz">Tabular data</h2> <table><caption>Table Caption</caption> <thead><tr><th>Table Heading 1</th> <th>Table Heading 2</th> <th>Table Heading 3</th> <th>Table Heading 4</th> <th>Table Heading 5</th></tr></thead> <tbody><tr><td>Table Cell 1</td> <td>Table Cell 2</td> <td>Table Cell 3</td> <td>Table Cell 4</td> <td>Table Cell 5</td></tr> <tr><td>Table Cell 1</td> <td>Table Cell 2</td> <td>Table Cell 3</td> <td>Table Cell 4</td> <td>Table Cell 5</td></tr> <tr><td>Table Cell 1</td> <td>Table Cell 2</td> <td>Table Cell 3</td> <td>Table Cell 4</td> <td>Table Cell 5</td></tr> <tr><td>Table Cell 1</td> <td>Table Cell 2</td> <td>Table Cell 3</td> <td>Table Cell 4</td> <td>Table Cell 5</td></tr></tbody></table></article> <article id="text--inline" class="svelte-p95kjz"><h2 class="svelte-p95kjz">Inline elements</h2> <div><a href="./">This is a text link</a>.<br> <strong>Strong is used to indicate strong importance.</strong><br> <em>This text has added emphasis.</em><br>
				The <b>b element</b> is stylistically different text from normal text,
				without any special importance.<br>
				The <i>i element</i> is text that is offset from the normal text.<br>
				The <u>u element</u> is text with an unarticulated, though explicitly
				rendered, non-textual annotation.<br> <del>This text is deleted</del> and <ins>This text is inserted</ins>.<br> <s>This text has a strikethrough</s>.<br>
				Superscript<sup>®</sup>.<br>
				Subscript for things like H<sub>2</sub>O.<br> <small>This small text is small for for fine print, etc.</small><br>
				Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr><br> <q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">This text is a short inline quotation.</q><br> <cite>This is a citation.</cite><br>
				The <dfn>dfn element</dfn> indicates a definition.<br>
				The <mark>mark element</mark> indicates a highlight.<br>
				The <var>variable element</var>, such as <var>x</var> = <var>y</var>.<br>
				The time element:
				<time datetime="2013-04-06T12:32+00:00">2 weeks ago</time><br></div></article></section> <section id="forms"><h2 data-svelte-h="svelte-kz9iaz">Form elements</h2> <form><fieldset id="forms--input" data-svelte-h="svelte-kenk8p"><legend>Input fields</legend> <p><label for="input--text">Text Input</label> <input id="input--text" type="text" placeholder="Text Input"></p> <p><label for="input--password">Password</label> <input id="input--password" type="password" placeholder="Type your Password"></p> <p><label for="input--webaddress">Web Address</label> <input id="input--webaddress" type="url" placeholder="http://yoursite.com"></p> <p><label for="input--emailaddress">Email Address</label> <input id="input--emailaddress" type="email" placeholder="name@email.com"></p> <p><label for="input--phone">Phone Number</label> <input id="input--phone" type="tel" placeholder="(999) 999-9999"></p> <p><label for="input--search">Search</label> <input id="input--search" type="search" placeholder="Enter Search Term"></p> <p><label for="input--text2">Number Input</label> <input id="input--text2" type="number" placeholder="Enter a Number"></p> <p><label for="input--text3" class="error">Error</label> <input id="input--text3" class="is-error" type="text" placeholder="Text Input"></p> <p><label for="input--text4" class="valid">Valid</label> <input id="input--text4" class="is-valid" type="text" placeholder="Text Input"></p></fieldset> <fieldset id="forms--select"><legend data-svelte-h="svelte-1fu9lso">Select menus</legend> <p><label for="select" data-svelte-h="svelte-r1thhe">Select</label> <select id="select"><optgroup label="Option Group"><option value="Option One" data-svelte-h="svelte-1j6lw4l">Option One</option><option value="Option Two" data-svelte-h="svelte-w9qigz">Option Two</option><option value="Option Three" data-svelte-h="svelte-4r9hc9">Option Three</option></optgroup></select></p></fieldset> <fieldset id="forms--checkbox" data-svelte-h="svelte-1kvyi7v"><legend>Checkboxes</legend> <ul class="list list--bare"><li><label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"> Choice A</label></li> <li><label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice B</label></li> <li><label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice C</label></li></ul></fieldset> <fieldset id="forms--radio" data-svelte-h="svelte-8pf50y"><legend>Radio buttons</legend> <ul class="list list--bare"><li><label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked"> Option 1</label></li> <li><label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"> Option
							2</label></li> <li><label for="radio3"><input id="radio3" name="radio" type="radio" class="radio"> Option
							3</label></li></ul></fieldset> <fieldset id="forms--textareas" data-svelte-h="svelte-1d19v2n"><legend>Textareas</legend> <p><label for="textarea">Textarea</label> <textarea id="textarea" rows="8" cols="48" placeholder="Enter your message here"></textarea></p></fieldset> <fieldset id="forms--html5" data-svelte-h="svelte-1nlncai"><legend>HTML5 inputs</legend> <p><label for="ic">Color input</label> <input type="color" id="ic" value="#000000"></p> <p><label for="in">Number input</label> <input type="number" id="in" min="0" max="10" value="5"></p> <p><label for="ir">Range input</label> <input type="range" id="ir" value="10"></p> <p><label for="idd">Date input</label> <input type="date" id="idd" value="1970-01-01"></p> <p><label for="idm">Month input</label> <input type="month" id="idm" value="1970-01"></p> <p><label for="idw">Week input</label> <input type="week" id="idw" value="1970-W01"></p> <p><label for="idt">Datetime input</label> <input type="datetime" id="idt" value="1970-01-01T00:00:00Z"></p> <p><label for="idtl">Datetime-local input</label> <input type="datetime-local" id="idtl" value="1970-01-01T00:00"></p></fieldset> <fieldset id="forms--action" data-svelte-h="svelte-qmp368"><legend>Action buttons</legend> <p><input type="submit" value="<input type=submit>"> <input type="button" value="<input type=button>"> <input type="reset" value="<input type=reset>"> <input type="submit" value="<input disabled>" disabled="true"></p> <p><button type="submit">&lt;button type=submit&gt;</button> <button type="button">&lt;button type=button&gt;</button> <button type="reset">&lt;button type=reset&gt;</button> <button type="button" disabled="true">&lt;button disabled&gt;</button></p></fieldset></form></section> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Demo_Elements, "DemoElements").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
