// replace with
// <input class="value" data-value="api.HTMLCanvasElement.__compat.support.chrome.version_added" value="4" style="width: 2em;background: transparent;border: none;text-align: center;" data-com.agilebits.onepassword.user-edited="yes" type="text">
// for inline editing

fetch('browser-compat.data.json').then(r => r.json()).then(r => window.browser_compat_data = r).then(_ => {
  // update if selected property changes
  document.querySelector('header>input').addEventListener('change', e => editCompat(e.target.value))
  // blur (and thus, update) on [Enter]
  document.querySelector('header>input').addEventListener('keydown', e=>{ if(e.key==='Enter') e.target.blur() })

  // initial
  let path = document.querySelector('header>input').value||'api.HTMLCanvasElement';
  editCompat(path)
})

function editCompat(path) {
  window.$path = path;

  initJsonEditor(objectPath(window.browser_compat_data, path))
  renderCompat(path)
}

function renderCompat(path) {
  const obj = objectPath(window.browser_compat_data, path);
  const ct = obj && render_compat_table(obj, window.renderer, { 'query': path, 'depth': 1 });

  document.querySelector('main').innerHTML = ct || 'not found';
}

function objectPath(object, path) {
  try {
    path.split(/\.|\//).forEach(key => object = object[key])
    return object
  }
  catch(e) {
    return null;
  }
}

function initJsonEditor(data) {
  let container = document.querySelector('.jsoneditor');
  let options = {
      mode: 'tree',
      onChange: () => {
        let newdata = window.json_editor.get();
        //document.querySelector('[data-value="api.HTMLCanvasElement.__compat.support.chrome.version_added"]').textContent = newdata.api.HTMLCanvasElement.__compat.support.chrome.version_added;
        //clobber all properties with the current data on the old "data" object (data should be referencing our global data object here)
        Object.assign(data, newdata);
        renderCompat(window.$path)
      }
  };

  document.querySelector('main').addEventListener('click', e => {
    let c = identifyCell(e.target)
    let path = (c.feature === '.' ? '' : '.' + c.feature) + (c.browser ? `.__compat.support.${c.browser}` : '');
    console.log(c, path);
    let node = window.json_editor.node.findNode(path);
    //node.expandTo();
    node.expand(); //node.parent.expand();
    node.scrollTo();
    if (window.$highlightedNode) window.$highlightedNode.setHighlight(false);
    setTimeout(_ => node.setHighlight(true), 100);

    window.$highlightedNode = node;
  })

  if (window.json_editor) window.json_editor.destroy();
  window.json_editor = new JSONEditor(container, options);

  window.json_editor.set(data);
}

function identifyCell(e) {
  let pathInfo = {}
  while (e.parentNode.tagName !== 'MAIN') {
    if (e.dataset.feature) pathInfo.feature = e.dataset.feature;
    if (e.dataset.browser) pathInfo.browser = e.dataset.browser;
    e = e.parentNode
  }
  return pathInfo
}
