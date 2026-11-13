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
    var parts = [el("h2", { text: s.title })];
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

  /* A link straight to a section (…/rooftop/#wines) lands there once the menu is drawn */
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }

  /* Highlight the section in view */
  if ("IntersectionObserver" in window) {
    var links = {};
    Array.prototype.forEach.call(tabs.children, function (a) { links[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function (k) { links[k].classList.toggle("on", k === e.target.id); });
        var a = links[e.target.id];
        if (a && tabs.scrollWidth > tabs.clientWidth) {
          tabs.scrollTo({ left: a.offsetLeft - 20, behavior: "smooth" });
        }
      });
    }, { rootMargin: "-25% 0px -65% 0px" });
    Array.prototype.forEach.call(sections.children, function (s) { io.observe(s); });
  }
})();
