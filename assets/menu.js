/* Draws a menu page from window.MENU (see data/rooftop.js and data/cafe.js). */
(function () {
  var M = window.MENU, el = window.el;
  var mount = document.getElementById("menu");
  if (!M || !mount) return;

  function slug(s) { return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function price(p) {
    if (p === undefined || p === null || p === "") return null;
    return el("span", { class: "price", text: typeof p === "number" ? p.toLocaleString("en-KE") : String(p) });
  }

  function item(i) {
    var head = el("div", { class: "item-head" }, [el("h4", { text: i.name }), price(i.price)]);
    var parts = [head];
    if (i.desc) parts.push(el("p", { class: "desc", text: i.desc }));
    (i.options || []).forEach(function (o) {
      parts.push(el("div", { class: "option" }, [el("span", { text: o.name }), price(o.price)]));
    });
    if (i.note) parts.push(el("p", { class: "item-note", text: i.note }));
    return el("li", { class: "item" }, parts);
  }

  function list(items) { return el("ul", { class: "items" }, items.map(item)); }

  var tabs = el("nav", { class: "tabs", "aria-label": "Menu sections" });
  var sections = el("div", { class: "sections" });

  M.sections.forEach(function (s) {
    var id = slug(s.title);
    tabs.appendChild(el("a", { href: "#" + id, text: s.title }));
    var parts = [];
    if (s.intro) parts.push(el("p", { class: "menu-intro", text: s.intro }));   // short line that belongs to this section
    parts.push(el("h2", { text: s.title }));
    if (s.subtitle) parts.push(el("p", { class: "subtitle", text: s.subtitle }));
    if (s.items) parts.push(list(s.items));
    (s.groups || []).forEach(function (g) {
      parts.push(el("h3", { text: g.title }));
      if (g.subtitle) parts.push(el("p", { class: "subtitle", text: g.subtitle }));
      parts.push(list(g.items));
    });
    sections.appendChild(el("section", { id: id, class: "menu-section" }, parts));
  });

  mount.appendChild(tabs);
  if (M.intro) mount.appendChild(el("p", { class: "menu-intro", text: M.intro }));
  mount.appendChild(sections);
  var notes = [];
  if (M.priceNote) notes.push(el("p", { text: M.priceNote }));
  var venue = window.SITE.venues[document.documentElement.getAttribute("data-venue")];
  if (venue && venue.payment) notes.push(el("p", { text: venue.payment }));
  if (M.updated) notes.push(el("p", { text: "Menu as of " + M.updated }));
  if (notes.length) mount.appendChild(el("div", { class: "menu-notes" }, notes));

  /* One section at a time: the tabs switch between them. A link such as …/rooftop/#wines opens that tab. */
  var links = Array.prototype.slice.call(tabs.children);
  var panels = Array.prototype.slice.call(sections.children);
  tabs.setAttribute("role", "tablist");
  links.forEach(function (a, i) {
    a.setAttribute("role", "tab");
    a.setAttribute("aria-controls", panels[i].id);
    panels[i].setAttribute("role", "tabpanel");
  });

  function show(id, fromClick) {
    var index = 0;
    panels.forEach(function (p, i) { if (p.id === id) index = i; });
    panels.forEach(function (p, i) { p.hidden = i !== index; });
    var general = mount.querySelector(":scope > .menu-intro");
    if (general) general.hidden = index !== 0;      // a general tip (MENU.intro) shows with the first section only
    links.forEach(function (a, i) {
      a.classList.toggle("on", i === index);
      a.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    var a = links[index];
    if (tabs.scrollWidth > tabs.clientWidth) tabs.scrollTo({ left: a.offsetLeft - 20, behavior: fromClick ? "smooth" : "auto" });
    if (fromClick) {
      if (history.replaceState) history.replaceState(null, "", "#" + panels[index].id);
      /* If the reader had scrolled down, bring the new section's start back under the tabs */
      var header = document.querySelector("[data-header]");
      var top = mount.getBoundingClientRect().top + window.pageYOffset - (header ? header.offsetHeight : 0);
      if (window.pageYOffset > top) window.scrollTo(0, top);
    }
  }

  links.forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); show(a.getAttribute("href").slice(1), true); });
  });
  window.addEventListener("hashchange", function () { show(location.hash.slice(1), false); });
  show(location.hash.slice(1), false);
})();
