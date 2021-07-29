var JSConfetti = (function () {
  "use strict";

  function t(t, i) {
    if (!(t instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }

  function i(t, i) {
    for (var e = 0; e < i.length; e++) {
      var n = i[e];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }

  function e(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function n(t) {
    return +t.replace(/px/, "");
  }

  function o(t, i) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      n = Math.random() * (i - t) + t;
    return Math.floor(n * Math.pow(10, e)) / Math.pow(10, e);
  }

  function s(t) {
    return t[o(0, t.length)];
  }
  var a = [
    "#fcf403",
    "#62fc03",
    "#f4fc03",
    "#03e7fc",
    "#03fca5",
    "#a503fc",
    "#fc03ad",
    "#fc03c2",
  ];

  function r() {
    return Math.log(window.innerWidth) / Math.log(1920);
  }
  var h = (function () {
    function i(e) {
      t(this, i);
      var n = e.initialPosition,
        a = e.direction,
        h = e.confettiRadius,
        c = e.confettiColors,
        d = e.emojies,
        l = e.emojiSize,
        u = o(0.9, 1.7, 3) * r();
      (this.confettiSpeed = {
        x: u,
        y: u,
      }),
        (this.finalConfettiSpeedX = o(0.2, 0.6, 3)),
        (this.rotationSpeed = d.length ? 0.01 : o(0.03, 0.07, 3) * r()),
        (this.dragForceCoefficient = o(5e-4, 9e-4, 6)),
        (this.radius = {
          x: h,
          y: h,
        }),
        (this.initialRadius = h),
        (this.rotationAngle = "left" === a ? o(0, 0.2, 3) : o(-0.2, 0, 3)),
        (this.emojiSize = l),
        (this.emojiRotationAngle = o(0, 2 * Math.PI)),
        (this.radiusYUpdateDirection = "down");
      var f =
        "left" === a
          ? (o(82, 15) * Math.PI) / 180
          : (o(-15, -82) * Math.PI) / 180;
      (this.absCos = Math.abs(Math.cos(f))),
        (this.absSin = Math.abs(Math.sin(f)));
      var p = o(-150, 0),
        v = {
          x: n.x + ("left" === a ? -p : p) * this.absCos,
          y: n.y - p * this.absSin,
        };
      (this.currentPosition = Object.assign({}, v)),
        (this.initialPosition = Object.assign({}, v)),
        (this.color = d.length ? null : s(c)),
        (this.emoji = d.length ? s(d) : null),
        (this.createdAt = new Date().getTime()),
        (this.direction = a);
    }
    return (
      e(i, [
        {
          key: "draw",
          value: function (t) {
            var i = this.currentPosition,
              e = this.radius,
              n = this.color,
              o = this.emoji,
              s = this.rotationAngle,
              a = this.emojiRotationAngle,
              r = this.emojiSize,
              h = window.devicePixelRatio;
            n
              ? ((t.fillStyle = n),
                t.beginPath(),
                t.ellipse(
                  i.x * h,
                  i.y * h,
                  e.x * h,
                  e.y * h,
                  s,
                  0,
                  2 * Math.PI
                ),
                t.fill())
              : o &&
                ((t.font = "".concat(r, "px serif")),
                t.save(),
                t.translate(h * i.x, h * i.y),
                t.rotate(a),
                (t.textAlign = "center"),
                t.fillText(o, 0, 0),
                t.restore());
          },
        },
        {
          key: "updatePosition",
          value: function (t, i) {
            var e = this.confettiSpeed,
              n = this.dragForceCoefficient,
              o = this.finalConfettiSpeedX,
              s = this.radiusYUpdateDirection,
              a = this.rotationSpeed,
              r = this.createdAt,
              h = this.direction,
              c = i - r;
            e.x > o && (this.confettiSpeed.x -= n * t),
              (this.currentPosition.x +=
                e.x * ("left" === h ? -this.absCos : this.absCos) * t),
              (this.currentPosition.y =
                this.initialPosition.y -
                e.y * this.absSin * c +
                (0.00125 * Math.pow(c, 2)) / 2),
              (this.rotationSpeed -= this.emoji ? 1e-4 : 1e-5 * t),
              this.rotationSpeed < 0 && (this.rotationSpeed = 0),
              this.emoji
                ? (this.emojiRotationAngle +=
                    (this.rotationSpeed * t) % (2 * Math.PI))
                : "down" === s
                ? ((this.radius.y -= t * a),
                  this.radius.y <= 0 &&
                    ((this.radius.y = 0), (this.radiusYUpdateDirection = "up")))
                : ((this.radius.y += t * a),
                  this.radius.y >= this.initialRadius &&
                    ((this.radius.y = this.initialRadius),
                    (this.radiusYUpdateDirection = "down")));
          },
        },
        {
          key: "getIsVisibleOnCanvas",
          value: function (t) {
            return this.currentPosition.y < t + 100;
          },
        },
      ]),
      i
    );
  })();

  function c(t) {
    var i = t.confettiRadius,
      e = void 0 === i ? 6 : i,
      n = t.confettiesNumber,
      o = void 0 === n ? (t.emojies ? 80 : 250) : n,
      s = t.confettiColors,
      r = void 0 === s ? a : s,
      h = t.emojies,
      c = void 0 === h ? [] : h,
      d = t.emojiSize;
    return {
      confettiRadius: e,
      confettiesNumber: o,
      confettiColors: r,
      emojies: c,
      emojiSize: void 0 === d ? 80 : d,
    };
  }
  return (function () {
    function i() {
      var e;
      t(this, i),
        (this.canvas =
          (((e = document.createElement("canvas")).style.position = "fixed"),
          (e.style.width = "100%"),
          (e.style.height = "100%"),
          (e.style.top = "0"),
          (e.style.left = "0"),
          (e.style.zIndex = "1000"),
          (e.style.pointerEvents = "none"),
          document.body.appendChild(e),
          e)),
        (this.canvasContext = this.canvas.getContext("2d")),
        (this.shapes = []),
        (this.lastUpdated = new Date().getTime()),
        (this.iterationIndex = 0),
        (this.loop = this.loop.bind(this)),
        requestAnimationFrame(this.loop);
    }
    return (
      e(i, [
        {
          key: "loop",
          value: function () {
            var t,
              i,
              e,
              o,
              s,
              a = this;
            (t = this.canvas),
              (i = window.devicePixelRatio),
              (e = getComputedStyle(t)),
              (o = n(e.getPropertyValue("width"))),
              (s = n(e.getPropertyValue("height"))),
              t.setAttribute("width", (o * i).toString()),
              t.setAttribute("height", (s * i).toString());
            var r = new Date().getTime(),
              h = r - this.lastUpdated,
              c = this.canvas.offsetHeight;
            this.shapes.forEach(function (t) {
              t.updatePosition(h, r), t.draw(a.canvasContext);
            }),
              this.iterationIndex % 100 == 0 &&
                (this.shapes = this.shapes.filter(function (t) {
                  return t.getIsVisibleOnCanvas(c);
                })),
              (this.lastUpdated = r),
              this.iterationIndex++,
              requestAnimationFrame(this.loop);
          },
        },
        {
          key: "addConfetti",
          value: function () {
            for (
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = c(t),
                e = i.confettiRadius,
                n = i.confettiesNumber,
                o = i.confettiColors,
                s = i.emojies,
                a = i.emojiSize,
                r = (5 * window.innerHeight) / 7,
                d = {
                  x: 0,
                  y: r,
                },
                l = {
                  x: window.innerWidth,
                  y: r,
                },
                u = 0;
              u < n / 2;
              u++
            )
              this.shapes.push(
                new h({
                  initialPosition: d,
                  direction: "right",
                  confettiRadius: e,
                  confettiColors: o,
                  confettiesNumber: n,
                  emojies: s,
                  emojiSize: a,
                })
              ),
                this.shapes.push(
                  new h({
                    initialPosition: l,
                    direction: "left",
                    confettiRadius: e,
                    confettiColors: o,
                    confettiesNumber: n,
                    emojies: s,
                    emojiSize: a,
                  })
                );
          },
        },
      ]),
      i
    );
  })();
})();
