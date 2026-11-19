(function () {
  "use strict";
  var C = window.CONTENT;
  var $ = function (id) { return document.getElementById(id); };
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (fine) document.documentElement.classList.add("fine");

  var params = new URLSearchParams(location.search);
  var page = location.hash === "#culture" ? "B" : "A";
  var lang = params.get("lang") === "kr" ? "kr" : "en";
  var hold = null, act = null, playing = true, sub = null, pi = 0;
  var tsel = { A: null, B: null };
  var body = document.body, pop = $("pop"), disc = $("disc");

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function v(x) { return x === null || x === undefined || x === "" ? '<span class="tbd">' + C.TBD[lang] + "</span>" : x; }
  function noA(i) { return i < 4 ? "0" + (i + 1) : "+1"; }
  function noB(i) { return i < 6 ? "0" + (i + 1) : "+" + (i - 5); }
  function tap(el, fn) {
    el.addEventListener("click", fn);
    el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } });
  }
  function moveThumb(seg) {
    var b = seg.querySelector(".sb.on"), th = seg.querySelector(".thumb");
    if (!b) { th.style.opacity = 0; return; }
    th.style.opacity = 1; th.style.left = b.offsetLeft + "px"; th.style.width = b.offsetWidth + "px";
  }
  function img(src, cls, ph) {
    return src ? '<div class="' + cls + ' hasimg"><img src="' + esc(src) + '" alt="" loading="lazy"></div>' : '<div class="' + cls + ' ph ' + (page === "A" ? "glass" : "") + '">' + ph + "</div>";
  }

  /* ---------- Disc tiles ---------- */
  var IC = ["ti-video", "ti-video", "ti-video", "ti-video", "ti-music", "ti-microphone-2"], NT = 6, ANG = [], tiles = [], rot = 0;
  for (var a = 0; a < NT; a++) ANG.push(a * 360 / NT);
  ANG.forEach(function (ang, i) {
    var d = document.createElement("div");
    d.className = "tile"; d.setAttribute("role", "button"); d.tabIndex = -1;
    d.innerHTML = '<i class="ti ' + IC[i] + '" aria-hidden="true"></i><span>0' + (i + 1) + "</span>";
    if (fine) { d.onmouseenter = function () { setHold(i); }; d.onmouseleave = function () { setHold(null); }; }
    d.onclick = function () { openSub("proj", i); };
    disc.appendChild(d); tiles.push(d);
  });
  function layoutTiles() {
    var s = disc.offsetWidth; if (!s) return;
    var R = s * 0.392, ts = s * 0.136;
    tiles.forEach(function (d, i) {
      var r = ANG[i] * Math.PI / 180;
      d.style.width = d.style.height = ts + "px";
      d.style.left = (s / 2 + R * Math.cos(r) - ts / 2) + "px";
      d.style.top = (s / 2 + R * Math.sin(r) - ts / 2) + "px";
      d.style.transform = "rotate(" + (ANG[i] + 90) + "deg)";
      d.style.fontSize = (ts * 0.32) + "px";
    });
  }

  /* ---------- Pop-up ---------- */
  var pq = { x: 0, y: 0 }, pt = { x: 0, y: 0 };
  function showPop(html, dark) { if (!fine) return; pop.className = (dark ? "dk" : "lt") + " on"; pop.innerHTML = html; }
  function hidePop() { pop.classList.remove("on"); }

  /* ---------- Tools ---------- */
  function drawTools(id, key) {
    var g = C.TOOLS[lang], el = $(id);
    el.innerHTML = '<div class="tr"><span class="tl">TOOLS</span><span class="seg"><span class="thumb"></span>' +
      g.map(function (c, i) { return '<span class="sb' + (tsel[key] === i ? " on" : "") + '" role="button" tabindex="0" data-t="' + i + '">' + c[0] + "</span>"; }).join("") +
      '</span></div><div class="tp"><div class="chips"></div></div>';
    var seg = el.querySelector(".seg"), tp = el.querySelector(".tp"), ch = el.querySelector(".chips");
    function upd() {
      seg.querySelectorAll(".sb").forEach(function (b, k) { b.classList.toggle("on", k === tsel[key]); });
      moveThumb(seg);
      if (tsel[key] === null) tp.classList.remove("open");
      else { ch.innerHTML = g[tsel[key]][1].map(function (x) { return '<span class="chip">' + x + "</span>"; }).join(""); tp.classList.add("open"); }
    }
    seg.querySelectorAll(".sb").forEach(function (b) { tap(b, function () { var i = +b.dataset.t; tsel[key] = tsel[key] === i ? null : i; upd(); }); });
    requestAnimationFrame(upd);
  }

  /* ---------- Sub pages ---------- */
  function subHTML(kind) {
    var s = C.SUB[lang], d = C.T[lang], dk = page === "B", cls = dk ? "sc dk" : "sc glass lt";
    var back = '<span class="back ' + (dk ? "" : "glass") + '" role="button" tabindex="0" id="bk"><i class="ti ti-arrow-left" aria-hidden="true"></i>' + s.back + "</span>";
    function tl(arr) { return arr.map(function (r) { return '<div class="tl2"><span>' + r[0] + "</span><span>" + r[1] + "</span></div>"; }).join(""); }
    if (kind === "proj") {
      var L = dk ? d.TR : d.C, c = L[pi], n = L.length, pv = (pi - 1 + n) % n, nx = (pi + 1) % n, no = dk ? noB(pi) : noA(pi), f = C.F[lang];
      var IM = (dk ? C.IMAGES.culture : C.IMAGES.beauty)[pi] || { cover: "", imgs: ["", "", ""] };
      var fl = [[f[0], c.ctx], [f[1], c.role], [f[2], c.did], [f[3], c.res], [f[4], c.show]].map(function (p) { return '<div class="f"><b>' + p[0] + "</b><span>" + v(p[1]) + "</span></div>"; }).join("");
      return back + '<p class="kicker" style="margin-top:18px">' + s.proj + " · " + no + '</p><div class="ptitle">' + (dk ? "" : '<span class="dotc" style="background:' + C.SC[pi] + '"></span>') +
        '<h2 class="h sub-title" style="margin:4px 0">' + c.t + '</h2></div><p class="sub-meta">' + (dk ? c.n : c.c + " · " + c.n) + "</p>" +
        img(IM.cover, "cover", s.cover) + '<div class="' + cls + '">' + fl + "</div>" +
        '<div class="imgs">' + [0, 1, 2].map(function (k) { return img(IM.imgs[k], "", s.img); }).join("") + "</div>" +
        '<div class="pn"><span class="pb ' + (dk ? "" : "glass") + '" role="button" tabindex="0" id="pPrev"><i class="ti ti-chevron-left" aria-hidden="true"></i><span>' + L[pv].t + '</span></span><span class="pb ' + (dk ? "" : "glass") + '" role="button" tabindex="0" id="pNext"><span>' + L[nx].t + '</span><i class="ti ti-chevron-right" aria-hidden="true"></i></span></div>';
    }
    if (kind === "about") {
      return back + '<h2 class="h sub-title">' + s.about + '</h2><p class="sub-meta">' + (dk ? "SYENNI ● VOL.1" : "SYENNI ● BEAUTY EDIT") + "</p>" +
        '<div class="' + cls + '"><h4>' + s.bio + "</h4><p>" + v(s.bioV) + "</p></div>" +
        '<div class="two"><div class="' + cls + '"><h4>' + s.lang + "</h4>" + tl(s.langV) + '</div><div class="' + cls + '"><h4>' + s.enj + "</h4><p>" + v(s.enjV) + "</p></div></div>" +
        '<div class="' + cls + '"><h4>' + s.edu + "</h4>" + tl(s.eduV) + "</div>" +
        '<div class="' + cls + '"><h4>' + s.exp + "</h4>" + tl(s.expV) + "</div>" +
        '<div class="' + cls + '"><h4>' + s.tr + "</h4>" + tl(s.trV) + "</div>";
    }
    var K = C.CONTACT;
    function ln(label, val, href, ic) {
      return '<div class="cl"><span><i class="ti ' + ic + '" aria-hidden="true"></i>' + label + "</span><span>" + (val ? '<a href="' + esc(href) + '" target="_blank" rel="noopener">' + esc(val) + "</a>" : v(null)) + "</span></div>";
    }
    return back + '<h2 class="h sub-title">' + s.contact + '</h2><p class="sub-meta" style="font-size:14px;color:#333">' + s.cIntro + "</p>" +
      '<div class="' + cls + '">' + ln(s.em, K.email, "mailto:" + K.email, "ti-mail") + ln(s.li, K.linkedin ? "LinkedIn" : "", K.linkedin, "ti-brand-linkedin") + ln(s.ig, K.instagram ? "Instagram" : "", K.instagram, "ti-brand-instagram") +
      '<div class="cl"><span><i class="ti ti-file-text" aria-hidden="true"></i>' + s.cv + "</span>" + (K.resume ? '<a class="pb ' + (dk ? "" : "glass") + '" href="' + esc(K.resume) + '" download>' + s.dl + ' <i class="ti ti-download" aria-hidden="true"></i></a>' : v(null)) + "</div></div>";
  }
  function markNav() { $("nA").classList.toggle("on", sub === "about"); $("nC").classList.toggle("on", sub === "contact"); moveThumb($("segN")); }
  function fillSub() {
    $("sub").innerHTML = subHTML(sub); tap($("bk"), closeSub);
    if (sub === "proj") {
      var n = (page === "B" ? C.T[lang].TR : C.T[lang].C).length;
      tap($("pPrev"), function () { openSub("proj", (pi - 1 + n) % n); });
      tap($("pNext"), function () { openSub("proj", (pi + 1) % n); });
    }
  }
  function fade(els, out) { els.forEach(function (el) { el.style.opacity = out ? "0" : "1"; el.style.transform = out ? "scale(.98)" : "none"; }); }
  function cur() { return page === "A" ? $("A") : $("B"); }
  function openSub(kind, idx) {
    if (sub === kind && kind !== "proj") { closeSub(); return; }
    hidePop(); setHold(null);
    if (kind === "proj") pi = idx;
    var s = $("sub");
    if (sub) { sub = kind; markNav(); s.style.opacity = "0"; setTimeout(function () { fillSub(); s.style.opacity = "1"; window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }, 200); return; }
    sub = kind; markNav(); fade([cur()], true);
    setTimeout(function () {
      cur().hidden = true; fillSub(); s.hidden = false; s.style.transition = "none"; s.style.opacity = "0"; s.style.transform = "translateY(14px)";
      window.scrollTo({ top: 0 });
      requestAnimationFrame(function () { requestAnimationFrame(function () { s.style.transition = ""; s.style.opacity = "1"; s.style.transform = "none"; }); });
    }, 300);
  }
  function closeSub() {
    sub = null; markNav(); var s = $("sub"); s.style.opacity = "0"; s.style.transform = "translateY(14px)";
    setTimeout(function () { s.hidden = true; show(); var c = cur(); c.style.transition = "none"; fade([c], true); requestAnimationFrame(function () { requestAnimationFrame(function () { c.style.transition = ""; fade([c], false); layoutTiles(); }); }); }, 300);
  }
  tap($("nA"), function () { openSub("about"); });
  tap($("nC"), function () { openSub("contact"); });

  /* ---------- Hover previews ---------- */
  function setHold(i) {
    hold = (i !== null && i < 6) ? i : null;
    var d = C.T[lang];
    tiles.forEach(function (t, k) { t.classList.toggle("act", k === hold); });
    document.querySelectorAll(".trk").forEach(function (r) { r.classList.toggle("act", +r.dataset.i === i); });
    if (i === null) { hidePop(); $("np").textContent = d.np; return; }
    var t = d.TR[i];
    if (i < 6) { $("np").textContent = d.nowp + " · 0" + (i + 1); $("tm").textContent = "0" + (i + 1); }
    showPop('<div class="pt">' + t.t + '</div><p class="k">' + d.wid + '</p><p class="v">' + (t.did === null ? C.TBD[lang] : t.did) + '</p><p class="k">' + d.res + '</p><p class="v">' + (t.res === null ? C.TBD[lang] : t.res) + '</p><p class="k">' + d.note + '</p><p class="v" style="margin:0">' + t.n + "</p>", true);
  }
  function setAct(i) {
    act = i;
    document.querySelectorAll(".row").forEach(function (r) { var k = +r.dataset.i; r.classList.toggle("act", k === i); r.querySelector(".sd").style.background = k === i ? C.SC[k] : "transparent"; });
    if (i === null) { hidePop(); return; }
    var d = C.T[lang], c = d.C[i];
    showPop('<div class="pd"><span style="background:' + C.SC[i] + '"></span><span class="h" style="font-size:10.5px;font-weight:500">' + d.ing + '</span></div><p class="pl2">' + c.lab + '</p><p class="pn2"><span style="font-weight:500;color:#111">' + d.note + "</span> · " + c.n + "</p>", false);
  }

  /* ---------- Render ---------- */
  var p1 = false, p2 = false;
  function mk(id, arr) {
    var h = arr.concat(arr).map(function (i) { return '<span class="it" data-d="' + esc(i[1]) + '">' + i[0] + '</span><span class="dt">·</span>'; }).join("");
    $(id).innerHTML = h + h;
  }
  function rowH(c, k, first) {
    return '<div class="row' + (first ? " first" : "") + '" data-i="' + k + '" role="button" tabindex="0"><span class="h no">' + noA(k) + '</span><span class="tt"><span class="sd"></span><span class="h">' + c.t + '</span></span><span class="cat">' + c.c + '</span><i class="ti ti-arrow-up-right ar" aria-hidden="true"></i></div>';
  }
  function render() {
    var d = C.T[lang], s = C.SUB[lang];
    body.classList.toggle("kr", lang === "kr");
    document.documentElement.lang = lang === "kr" ? "ko" : "en";
    $("tA").textContent = d.tA; $("tB").textContent = d.tB; $("nA").textContent = s.about; $("nC").textContent = s.contact;
    $("brand").innerHTML = 'SYENNI<span class="bd">●</span>' + (page === "A" ? d.bA : d.bB);
    $("kA").textContent = d.kA; $("ingL").textContent = d.ingL; $("ingd").textContent = d.ingd; $("tagA").textContent = d.tagA; $("plh").textContent = d.plh;
    mk("r1", d.ING.slice(0, 6)); mk("r2", d.ING.slice(6));
    document.querySelectorAll(".it").forEach(function (x) {
      var showIng = function () { document.querySelectorAll(".it.on").forEach(function (o) { o.classList.remove("on"); }); x.classList.add("on"); $("ingd").innerHTML = "<b>" + x.textContent + "</b> — " + x.getAttribute("data-d"); if (x.closest("#r1")) p1 = true; else p2 = true; };
      if (fine) { x.onmouseenter = showIng; x.onmouseleave = function () { x.classList.remove("on"); p1 = p2 = false; }; }
      else { x.onclick = function () { showIng(); setTimeout(function () { p1 = p2 = false; }, 2500); }; }
    });
    $("plist").innerHTML = d.C.slice(0, 4).map(function (c, k) { return rowH(c, k, k === 0); }).join("") + '<div class="oth">' + d.oth + "</div>" + rowH(d.C[4], 4, true);
    document.querySelectorAll(".row").forEach(function (r) {
      var i = +r.dataset.i;
      if (fine) { r.onmouseenter = function () { setAct(i); }; r.onmouseleave = function () { setAct(null); }; }
      tap(r, function () { openSub("proj", i); });
    });
    if (page === "A") drawTools("toolsA", "A"); else drawTools("toolsB", "B");
    $("kB").textContent = d.kB; $("tagB").textContent = d.tagB; $("tlT").textContent = d.tl; $("tlh").textContent = d.tlh; $("np").textContent = d.np; $("bnh").textContent = d.bnh; $("onrep").textContent = d.onrep;
    var ar = '<i class="ti ti-arrow-up-right ar" aria-hidden="true"></i>';
    $("tl").innerHTML = d.TR.slice(0, 6).map(function (t, i) { return '<div class="trk" data-i="' + i + '" role="button" tabindex="0"><span class="h no">0' + (i + 1) + "</span><span>" + t.t + "</span>" + ar + "</div>"; }).join("");
    $("bl").innerHTML = d.TR.slice(6).map(function (t, i) { return '<div class="trk oth2" data-i="' + (i + 6) + '" role="button" tabindex="0"><span class="h no">+' + (i + 1) + "</span><span>" + t.t + "</span>" + ar + "</div>"; }).join("");
    document.querySelectorAll(".trk").forEach(function (r) {
      var i = +r.dataset.i;
      if (fine) { r.onmouseenter = function () { setHold(i); }; r.onmouseleave = function () { setHold(null); }; }
      tap(r, function () { openSub("proj", i); });
    });
    var grads = ["linear-gradient(135deg,#E6DDFA,#C9B8F0)", "linear-gradient(135deg,#D3F1EC,#9EE0D6)", "linear-gradient(135deg,#E1EBDA,#B9CFAE)"];
    $("pl").innerHTML = C.PLAYLIST.map(function (p, i) { return '<div class="th" data-p="' + i + '" style="background:' + grads[i % 3] + '">' + (p.cover ? '<img src="' + esc(p.cover) + '" alt="">' : '<i class="ti ti-music" aria-hidden="true"></i>') + "</div>"; }).join("") + '<div class="th add"><i class="ti ti-plus" aria-hidden="true"></i></div>';
    document.querySelectorAll(".th[data-p]").forEach(function (el) {
      var p = C.PLAYLIST[+el.dataset.p];
      el.onmouseenter = function () { showPop('<p class="k">' + d.song + '</p><p class="v">' + (p.song ? esc(p.song) + " — " + esc(p.artist || "") : C.TBD[lang]) + '</p><p class="k">' + d.why + '</p><p class="v" style="margin:0">' + (p.why[lang] ? esc(p.why[lang]) : C.TBD[lang]) + "</p>", true); };
      el.onmouseleave = hidePop;
    });
    if (sub) fillSub();
    requestAnimationFrame(function () { moveThumb($("segP")); moveThumb($("segL")); markNav(); layoutTiles(); });
  }
  function show() {
    $("A").hidden = page !== "A"; $("B").hidden = page !== "B";
    body.classList.toggle("cc", page === "B");
    $("tA").classList.toggle("on", page === "A"); $("tB").classList.toggle("on", page === "B");
  }
  function updateURL() {
    var u = new URL(location.href);
    if (lang === "kr") u.searchParams.set("lang", "kr"); else u.searchParams.delete("lang");
    u.hash = page === "B" ? "culture" : "beauty";
    history.replaceState(null, "", u.toString());
  }
  function setPage(p) {
    if (p === page && !sub) return;
    hidePop();
    $("tA").classList.toggle("on", p === "A"); $("tB").classList.toggle("on", p === "B"); moveThumb($("segP"));
    var wasSub = !!sub;
    if (sub) { sub = null; markNav(); $("sub").hidden = true; }
    var c = cur(); if (!wasSub) fade([c], true);
    setTimeout(function () {
      page = p; setHold(null); act = null; show(); render(); updateURL();
      var n = cur(); n.style.transition = "none"; fade([n], true);
      requestAnimationFrame(function () { requestAnimationFrame(function () { n.style.transition = ""; fade([n], false); layoutTiles(); }); });
    }, wasSub ? 0 : 350);
  }
  tap($("tA"), function () { setPage("A"); });
  tap($("tB"), function () { setPage("B"); });
  tap($("en"), function () { if (lang === "en") return; lang = "en"; $("en").classList.add("on"); $("kr").classList.remove("on"); render(); updateURL(); });
  tap($("kr"), function () { if (lang === "kr") return; lang = "kr"; $("kr").classList.add("on"); $("en").classList.remove("on"); render(); updateURL(); });
  tap($("pp"), function () { playing = !playing; $("pp").innerHTML = '<i class="ti ' + (playing ? "ti-player-pause" : "ti-player-play") + '" aria-hidden="true"></i>'; $("pp").setAttribute("aria-label", playing ? "Pause" : "Play"); });

  /* ---------- Waveform ---------- */
  var wv = $("wv"), NB = 32, bars = [];
  for (var b = 0; b < NB; b++) { var e = document.createElement("div"); wv.appendChild(e); bars.push(e); }

  /* ---------- Pointer ---------- */
  var mx = -1;
  if (fine) {
    document.addEventListener("mousemove", function (e) {
      $("glow").style.left = e.clientX + "px"; $("glow").style.top = e.clientY + "px";
      $("dot").style.left = e.clientX + "px"; $("dot").style.top = e.clientY + "px";
      var wr = wv.getBoundingClientRect();
      mx = (wr.width && e.clientY > wr.top - 60 && e.clientY < wr.bottom + 60) ? (e.clientX - wr.left) / wr.width : -1;
      var px = e.clientX + 20, py = e.clientY - 170;
      if (px + 260 > window.innerWidth) px = e.clientX - 270;
      if (py < 10) py = e.clientY + 20;
      pt = { x: px, y: py }; if (!pop.classList.contains("on")) pq = { x: px, y: py };
    });
    document.addEventListener("mouseleave", function () { $("dot").style.left = "-20px"; $("glow").style.left = "-200px"; mx = -1; });
  }
  window.addEventListener("resize", function () { layoutTiles(); moveThumb($("segP")); moveThumb($("segL")); markNav(); });

  /* ---------- Animation loop ---------- */
  var BL = [[.12, .12, .4, .6], [.8, .18, .55, .35], [.3, .5, .33, .5], [.88, .65, .47, .7], [.18, .88, .38, .45]];
  var t = 0, prog = 0, o1 = 0, o2 = 0, spd = reduce ? 0.12 : 0.5;
  function loop() {
    t += 0.016;
    pq.x += (pt.x - pq.x) * 0.18; pq.y += (pt.y - pq.y) * 0.18; pop.style.left = pq.x.toFixed(1) + "px"; pop.style.top = pq.y.toFixed(1) + "px";
    if (page === "A" && !sub) {
      var W = window.innerWidth, H = window.innerHeight;
      if (!reduce) BL.forEach(function (bb, i) { $("b" + i).style.transform = "translate(" + (W * bb[0] - 170 + 80 * Math.sin(t * bb[2] + i)).toFixed(0) + "px," + (H * bb[1] - 170 + 60 * Math.cos(t * bb[3] + i * 2)).toFixed(0) + "px)"; });
      if (!p1) o1 -= spd; if (!p2) o2 += spd;
      var w1 = $("r1").scrollWidth / 2, w2 = $("r2").scrollWidth / 2;
      if (w1 && -o1 > w1) o1 += w1; if (w2 && o2 > 0) o2 -= w2;
      $("r1").style.transform = "translateX(" + o1.toFixed(1) + "px)"; $("r2").style.transform = "translateX(" + (o2 - w2 / 2).toFixed(1) + "px)";
    } else if (page === "B" && !sub) {
      if (playing) prog = (prog + 0.002) % 1;
      var tt = t * 3;
      bars.forEach(function (bar, i) {
        var p = i / (NB - 1), h = playing && !reduce ? 6 + 9 * Math.abs(Math.sin(tt + i * 0.55)) * Math.abs(Math.sin(tt * 0.7 + i * 0.21)) : 4;
        if (mx >= 0 && mx <= 1) { var dd = Math.abs(p - mx); h += Math.max(0, 16 * (1 - dd * 4)); }
        bar.style.height = Math.round(Math.min(32, h)) + "px";
        bar.style.background = p <= prog ? (i % 3 === 0 ? "#C9B8F0" : i % 3 === 1 ? "#9EE0D6" : "#B9CFAE") : "#555";
      });
      if (hold !== null) { var des = 180 - ANG[hold]; des += 360 * Math.round((rot - des) / 360); rot += (des - rot) * 0.09; }
      else if (playing) rot += reduce ? 0.03 : 0.15;
      disc.style.transform = "rotate(" + rot + "deg)";
    }
    requestAnimationFrame(loop);
  }

  /* ---------- Start ---------- */
  $("en").classList.toggle("on", lang === "en"); $("kr").classList.toggle("on", lang === "kr");
  show(); render(); loop();
  if (document.fonts) document.fonts.ready.then(function () { moveThumb($("segP")); moveThumb($("segL")); markNav(); layoutTiles(); });
})();
