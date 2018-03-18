const bcd = require('..');


function render(compatData, configuration = defaultConfiguration) {
  let output;


  output =`
<table class="bc-table bc-table-web">
    <thead>
        <tr class="bc-platforms">
            <td></td>
            <th colspan="6" class="bc-platform-desktop"><abbr class="only-icon" title="Desktop"><span>Desktop</span><i class="ic-desktop"></i></abbr></th>
            <th colspan="7" class="bc-platform-mobile"><abbr class="only-icon" title="Mobile"><span>Mobile</span><i class="ic-mobile"></i></abbr></th>
        </tr>
        <tr class="bc-browsers">
            <td></td>
            <th class="bc-browser-chrome"><abbr class="only-icon" title="Chrome"><span>Chrome</span><i class="ic-chrome"></i></abbr></th>
            <th class="bc-browser-edge"><abbr class="only-icon" title="Edge"><span>Edge</span><i class="ic-edge"></i></abbr></th>
            <th class="bc-browser-firefox"><abbr class="only-icon" title="Firefox"><span>Firefox</span><i class="ic-firefox"></i></abbr></th>
            <th class="bc-browser-ie"><abbr class="only-icon" title="Internet Explorer"><span>Internet Explorer</span><i class="ic-ie"></i></abbr></th>
            <th class="bc-browser-opera"><abbr class="only-icon" title="Opera"><span>Opera</span><i class="ic-opera"></i></abbr></th>
            <th class="bc-browser-safari"><abbr class="only-icon" title="Safari"><span>Safari</span><i class="ic-safari"></i></abbr></th>
            <th class="bc-browser-webview_android"><abbr class="only-icon" title="Android webview"><span>Android webview</span><i class="ic-webview_android"></i></abbr></th>
            <th class="bc-browser-chrome_android"><abbr class="only-icon" title="Chrome for Android"><span>Chrome for Android</span><i class="ic-chrome_android"></i></abbr></th>
            <th class="bc-browser-edge_mobile"><abbr class="only-icon" title="Edge Mobile"><span>Edge Mobile</span><i class="ic-edge_mobile"></i></abbr></th>
            <th class="bc-browser-firefox_android"><abbr class="only-icon" title="Firefox for Android"><span>Firefox for Android</span><i class="ic-firefox_android"></i></abbr></th>
            <th class="bc-browser-opera_android"><abbr class="only-icon" title="Opera for Android"><span>Opera for Android</span><i class="ic-opera_android"></i></abbr></th>
            <th class="bc-browser-safari_ios"><abbr class="only-icon" title="iOS Safari"><span>iOS Safari</span><i class="ic-safari_ios"></i></abbr></th>
            <th class="bc-browser-samsunginternet_android"><abbr class="only-icon" title="Samsung Internet"><span>Samsung Internet</span><i class="ic-samsunginternet_android"></i></abbr></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Basic support</th>
            <td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-edge"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.6
            </td>
            <td class="bc-supports-yes bc-browser-ie"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-opera bc-has-history" tabindex="0" aria-expanded="false" aria-controls="bc-history-1"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
                <div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div>
                <button title="Open implementation notes" class="bc-history-link only-icon" tabindex="-1"><span>Open</span><i class="ic-history" aria-hidden="true"></i></button>
                <section id="bc-history-1" class="bc-history">
                    <dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              9<div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div></dt>
                        <dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> Opera Mini 5.0 and later has partial support.</dd>
                    </dl>
                </section>
            </td>
            <td class="bc-supports-yes bc-browser-safari"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.1
            </td>
            <td class="bc-supports-yes bc-browser-webview_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-edge_mobile"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-opera_android bc-has-history" tabindex="0" aria-expanded="false" aria-controls="bc-history-2"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 10
                <div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div>
                <button title="Open implementation notes" class="bc-history-link only-icon" tabindex="-1"><span>Open</span><i class="ic-history" aria-hidden="true"></i></button>
                <section id="bc-history-2" class="bc-history">
                    <dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10<div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div></dt>
                        <dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> Opera Mini 5.0 and later has partial support.</dd>
                    </dl>
                </section>
            </td>
            <td class="bc-supports-yes bc-browser-safari_ios"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.2
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/height"><code>height</code></a></th>
            <td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-edge"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.6
            </td>
            <td class="bc-supports-yes bc-browser-ie"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-opera"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-safari"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.1
            </td>
            <td class="bc-supports-yes bc-browser-webview_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-edge_mobile"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-opera_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-safari_ios"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/mozOpaque"><code>mozOpaque</code></a>
                <div class="bc-icons"><abbr class="only-icon" title="Non-standard. Expect poor cross-browser support."><span>Non-standard</span><i class="ic-non-standard"></i></abbr></div>
            </th>
            <td class="bc-supports-no bc-browser-chrome"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.5
            </td>
            <td class="bc-supports-no bc-browser-ie"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-opera"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-webview_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-chrome_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge_mobile"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-no bc-browser-opera_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari_ios"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/width"><code>width</code></a></th>
            <td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-edge"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.6
            </td>
            <td class="bc-supports-yes bc-browser-ie"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-opera"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-safari"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.1
            </td>
            <td class="bc-supports-yes bc-browser-webview_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-edge_mobile"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-opera_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-safari_ios"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/captureStream"><code>captureStream</code></a>
                <div class="bc-icons"><abbr class="only-icon" title="Experimental. Expect behavior to change in the future."><span>Experimental</span><i class="ic-experimental"></i></abbr><abbr class="only-icon" title="Non-standard. Expect poor cross-browser support."><span>Non-standard</span><i class="ic-non-standard"></i></abbr></div>
            </th>
            <td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 51
            </td>
            <td class="bc-supports-unknown bc-browser-edge"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 43
            </td>
            <td class="bc-supports-no bc-browser-ie"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-opera"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 36
            </td>
            <td class="bc-supports-unknown bc-browser-safari"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
            <td class="bc-supports-yes bc-browser-webview_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 51
            </td>
            <td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 51
            </td>
            <td class="bc-supports-unknown bc-browser-edge_mobile"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 43
            </td>
            <td class="bc-supports-yes bc-browser-opera_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 38
            </td>
            <td class="bc-supports-unknown bc-browser-safari_ios"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/getContext"><code>getContext</code></a></th>
            <td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-edge"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.6
            </td>
            <td class="bc-supports-yes bc-browser-ie"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-opera"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-safari"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.1
            </td>
            <td class="bc-supports-yes bc-browser-webview_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-unknown bc-browser-edge_mobile"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-opera_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-safari_ios"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/mozFetchAsStream"><code>mozFetchAsStream</code></a>
                <div class="bc-icons"><abbr class="only-icon" title="Deprecated. Not for use in new websites."><span>Deprecated</span><i class="ic-deprecated"></i></abbr><abbr class="only-icon" title="Non-standard. Expect poor cross-browser support."><span>Non-standard</span><i class="ic-non-standard"></i></abbr></div>
            </th>
            <td class="bc-supports-no bc-browser-chrome"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-firefox"><abbr class="bc-level-no only-icon" title="No support">
              <span>No support</span>
            </abbr>13&nbsp;— 43</td>
            <td class="bc-supports-no bc-browser-ie"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-opera"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-webview_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-chrome_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge_mobile"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-firefox_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-opera_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari_ios"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/mozGetAsFile"><code>mozGetAsFile</code></a>
                <div class="bc-icons"><abbr class="only-icon" title="Deprecated. Not for use in new websites."><span>Deprecated</span><i class="ic-deprecated"></i></abbr><abbr class="only-icon" title="Non-standard. Expect poor cross-browser support."><span>Non-standard</span><i class="ic-non-standard"></i></abbr></div>
            </th>
            <td class="bc-supports-no bc-browser-chrome"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-no bc-browser-ie"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-opera"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-webview_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-chrome_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge_mobile"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-no bc-browser-opera_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari_ios"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/toBlob"><code>toBlob</code></a></th>
            <td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 50
            </td>
            <td class="bc-supports-no bc-browser-edge"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 19
            </td>
            <td class="bc-supports-yes bc-browser-ie bc-has-history" tabindex="0" aria-expanded="false" aria-controls="bc-history-3"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 10
                <div class="bc-icons"><abbr class="only-icon" title="Requires the vendor prefix: ms"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div>
                <button title="Open implementation notes" class="bc-history-link only-icon" tabindex="-1"><span>Open</span><i class="ic-history" aria-hidden="true"></i></button>
                <section id="bc-history-3" class="bc-history">
                    <dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              10<div class="bc-icons"><abbr class="only-icon" title="Requires the vendor prefix: ms"><span>Prefixed</span><i class="ic-prefix"></i></abbr> </div></dt>
                        <dd><abbr class="only-icon" title="Requires the vendor prefix: ms"><span>Prefixed</span><i class="ic-prefix"></i></abbr> Requires the vendor prefix: ms</dd>
                    </dl>
                </section>
            </td>
            <td class="bc-supports-yes bc-browser-opera"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 37
            </td>
            <td class="bc-supports-yes bc-browser-safari bc-has-history" tabindex="0" aria-expanded="false" aria-controls="bc-history-4"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
                <div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div>
                <button title="Open implementation notes" class="bc-history-link only-icon" tabindex="-1"><span>Open</span><i class="ic-history" aria-hidden="true"></i></button>
                <section id="bc-history-4" class="bc-history">
                    <dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              Yes<div class="bc-icons"><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> </div></dt>
                        <dd><abbr class="only-icon" title="See implementation notes"><span>Notes</span><i class="ic-footnote"></i></abbr> See <a href="https://bugs.webkit.org/show_bug.cgi?id=71270" class="external external-icon" rel="noopener">WebKit bug 71270</a>.</dd>
                    </dl>
                </section>
            </td>
            <td class="bc-supports-yes bc-browser-webview_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 50
            </td>
            <td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 50
            </td>
            <td class="bc-supports-no bc-browser-edge_mobile"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-opera_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 37
            </td>
            <td class="bc-supports-no bc-browser-safari_ios"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/toDataURL"><code>toDataURL</code></a></th>
            <td class="bc-supports-yes bc-browser-chrome"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-edge"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-firefox"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3.6
            </td>
            <td class="bc-supports-yes bc-browser-ie"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-opera"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 9
            </td>
            <td class="bc-supports-yes bc-browser-safari"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-webview_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> Yes
            </td>
            <td class="bc-supports-yes bc-browser-chrome_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 18
            </td>
            <td class="bc-supports-no bc-browser-edge_mobile"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 4
            </td>
            <td class="bc-supports-yes bc-browser-opera_android"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 19
            </td>
            <td class="bc-supports-yes bc-browser-safari_ios"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 3
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
        <tr>
            <th scope="row"><a href="/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen"><code>transferControlToOffscreen</code></a>
                <div class="bc-icons"><abbr class="only-icon" title="Experimental. Expect behavior to change in the future."><span>Experimental</span><i class="ic-experimental"></i></abbr><abbr class="only-icon" title="Non-standard. Expect poor cross-browser support."><span>Non-standard</span><i class="ic-non-standard"></i></abbr></div>
            </th>
            <td class="bc-supports-no bc-browser-chrome"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox bc-has-history" tabindex="0" aria-expanded="false" aria-controls="bc-history-5"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 44
                <div class="bc-icons"><abbr class="only-icon" title="User must explicitly enable this feature."><span>Disabled</span><i class="ic-disabled"></i></abbr> </div>
                <button title="Open implementation notes" class="bc-history-link only-icon" tabindex="-1"><span>Open</span><i class="ic-history" aria-hidden="true"></i></button>
                <section id="bc-history-5" class="bc-history">
                    <dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              44<div class="bc-icons"><abbr class="only-icon" title="User must explicitly enable this feature."><span>Disabled</span><i class="ic-disabled"></i></abbr> </div></dt>
                        <dd><abbr class="only-icon" title="User must explicitly enable this feature."><span>Disabled</span><i class="ic-disabled"></i></abbr> From version 44: this feature is behind the <code>gfx.offscreencanvas.enabled</code> preference. To change preferences in Firefox, visit about:config.</dd>
                    </dl>
                </section>
            </td>
            <td class="bc-supports-no bc-browser-ie"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-opera"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-webview_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-chrome_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-edge_mobile"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-yes bc-browser-firefox_android bc-has-history" tabindex="0" aria-expanded="false" aria-controls="bc-history-6"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr> 44
                <div class="bc-icons"><abbr class="only-icon" title="User must explicitly enable this feature."><span>Disabled</span><i class="ic-disabled"></i></abbr> </div>
                <button title="Open implementation notes" class="bc-history-link only-icon" tabindex="-1"><span>Open</span><i class="ic-history" aria-hidden="true"></i></button>
                <section id="bc-history-6" class="bc-history">
                    <dl><dt class="bc-supports-yes bc-supports"><abbr class="bc-level-yes only-icon" title="Full support">
                <span>Full support</span>
              </abbr>
              44<div class="bc-icons"><abbr class="only-icon" title="User must explicitly enable this feature."><span>Disabled</span><i class="ic-disabled"></i></abbr> </div></dt>
                        <dd><abbr class="only-icon" title="User must explicitly enable this feature."><span>Disabled</span><i class="ic-disabled"></i></abbr> From version 44: this feature is behind the <code>gfx.offscreencanvas.enabled</code> preference. To change preferences in Firefox, visit about:config.</dd>
                    </dl>
                </section>
            </td>
            <td class="bc-supports-no bc-browser-opera_android"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-no bc-browser-safari_ios"><abbr class="bc-level-no only-icon" title="No support">
                <span>No support</span>
              </abbr> No
            </td>
            <td class="bc-supports-unknown bc-browser-samsunginternet_android"><abbr title="Compatibility unknown; please update this.">
                ?
              </abbr></td>
        </tr>
    </tbody>
</table>
<section id="sect7" class="bc-legend">
    <h3 id="Legend" class="offscreen highlight-spanned"><span class="highlight-span">Legend</span></h3>
    <dl><dt><span class="bc-supports-yes bc-supports">
                <abbr class="bc-level bc-level-yes only-icon" title="Full support">
                 <span>Full support</span>
                 &nbsp;
                </abbr></span></dt>
        <dd>Full support</dd><dt><span class="bc-supports-no bc-supports">
                <abbr class="bc-level bc-level-no only-icon" title="No support">
                 <span>No support</span>
                 &nbsp;
                </abbr></span></dt>
        <dd>No support</dd><dt><span class="bc-supports-unknown bc-supports">
                <abbr class="bc-level bc-level-unknown only-icon" title="Compatibility unknown">
                 <span>Compatibility unknown</span>
                 &nbsp;
                </abbr></span></dt>
        <dd>Compatibility unknown</dd><dt><abbr class="only-icon" title="Experimental. Expect behavior to change in the future."><span>Experimental. Expect behavior to change in the future.</span><i class="ic-experimental"></i></abbr></dt>
        <dd>Experimental. Expect behavior to change in the future.</dd><dt><abbr class="only-icon" title="Non-standard. Expect poor cross-browser support."><span>Non-standard. Expect poor cross-browser support.</span><i class="ic-non-standard"></i></abbr></dt>
        <dd>Non-standard. Expect poor cross-browser support.</dd><dt><abbr class="only-icon" title="Deprecated. Not for use in new websites."><span>Deprecated. Not for use in new websites.</span><i class="ic-deprecated"></i></abbr></dt>
        <dd>Deprecated. Not for use in new websites.</dd><dt><abbr class="only-icon" title="See implementation notes."><span>See implementation notes.</span><i class="ic-footnote"></i></abbr></dt>
        <dd>See implementation notes.</dd><dt><abbr class="only-icon" title="User must explicitly enable this feature."><span>User must explicitly enable this feature.</span><i class="ic-disabled"></i></abbr></dt>
        <dd>User must explicitly enable this feature.</dd><dt><abbr class="only-icon" title="Requires a vendor prefix or different name for use."><span>Requires a vendor prefix or different name for use.</span><i class="ic-prefix"></i></abbr></dt>
        <dd>Requires a vendor prefix or different name for use.</dd>
    </dl>
</section>

`

  return output;
}


module.exports = render;
