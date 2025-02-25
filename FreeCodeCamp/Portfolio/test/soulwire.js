var h = null;

function k()
{
	return function() {}
}
var r;
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing,
{
	def: "easeOutQuad",
	swing: function(a, b, c, d, e)
	{
		return
		jQuery.easing[jQuery.easing.def]
			(a, b, c, d, e)
	},
	easeInQuad: function(a, b, c, d, e)
	{
		return
		d * (b /= e) * b + c
	},
	easeOutQuad: function(a, b, c, d, e)
	{
		return -d * (b /= e) * (b - 2) + c
	},
	easeInOutQuad: function(a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
	},
	easeInCubic: function(a, b, c, d, e)
	{
		return
		d * (b /= e) * b * b + c
	},
	easeOutCubic: function(a, b, c, d, e)
	{
		return
		d * (
			(b = b / e - 1) * b * b + 1) + c
	},
	easeInOutCubic: function(a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * (
			(b -= 2) * b * b + 2) + c
	},
	easeInQuart: function(a, b, c, d, e)
	{
		return
		d * (b /= e) * b * b * b + c
	},
	easeOutQuart: function(a, b, c, d, e)
	{
		return -d * (
			(b = b / e - 1) * b * b * b - 1) + c
	},
	easeInOutQuart: function(a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * (
			(b -= 2) * b * b * b - 2) + c
	},
	easeInQuint: function(a, b, c, d, e)
	{
		return
		d * (b /= e) * b * b * b * b + c
	},
	easeOutQuint: function(a, b, c, d, e)
	{
		return
		d * (
			(b = b / e - 1) * b * b * b * b + 1) + c
	},
	easeInOutQuint: function(a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * (
			(b -= 2) * b * b * b * b + 2) + c
	},
	easeInSine: function(a, b, c, d, e)
	{
		return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
	},
	easeOutSine: function(a, b, c, d, e)
	{
		return
		d * Math.sin(b / e * (Math.PI / 2)) + c
	},
	easeInOutSine: function(a, b, c, d, e)
	{
		return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
	},
	easeInExpo: function(a, b, c, d, e)
	{
		return
		b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
	},
	easeOutExpo: function(a, b, c, d, e)
	{
		return
		b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
	},
	easeInOutExpo: function(a, b, c, d, e)
	{
		return
		b == 0 ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 *
			--b) + 2) + c
	},
	easeInCirc: function(a, b, c, d, e)
	{
		return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
	},
	easeOutCirc: function(a, b, c, d, e)
	{
		return
		d * Math.sqrt(1 - (b = b / e - 1) * b) + c
	},
	easeInOutCirc: function(a, b, c, d, e)
	{
		return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
	},
	easeInElastic: function(a, b, c, d, e)
	{
		var a = 1.70158,
			f = 0,
			g = d;
		if (b == 0) return
		c;
		if (
			(b /= e) == 1) return
		c + d;
		f || (f = e * 0.3);
		g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g);
		return -(g * Math.pow(2, 10 * (b -= 1)) * Math.sin(
			(b * e - a) * 2 * Math.PI / f)) + c
	},
	easeOutElastic: function(a, b, c, d, e)
	{
		var a = 1.70158,
			f = 0,
			g = d;
		if (b == 0) return
		c;
		if (
			(b /= e) == 1) return
		c + d;
		f || (f = e * 0.3);
		g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g);
		return
		g * Math.pow(2, -10 * b) * Math.sin(
			(b * e - a) * 2 * Math.PI / f) + d + c
	},
	easeInOutElastic: function(a, b, c, d, e)
	{
		var a = 1.70158,
			f = 0,
			g = d;
		if (b == 0) return
		c;
		if (
			(b /= e / 2) == 2) return
		c + d;
		f || (f = e * 0.3 * 1.5);
		g < Math.abs(d) ? (g = d, a = f / 4) : a = f / (2 * Math.PI) * Math.asin(d / g);
		return
		b < 1 ? -0.5 * g * Math.pow(2, 10 * (b -= 1)) * Math.sin(
			(b * e - a) * 2 * Math.PI / f) + c : g * Math.pow(2, -10 * (b -= 1)) * Math.sin(
			(b * e - a) * 2 * Math.PI / f) * 0.5 + d + c
	},
	easeInBack: function(a, b, c, d, e, f)
	{
		f == void 0 && (f = 1.70158);
		return
		d * (b /= e) * b * (
			(f + 1) * b - f) + c
	},
	easeOutBack: function(a, b, c, d, e, f)
	{
		f == void 0 && (f = 1.70158);
		return
		d * (
			(b = b / e - 1) * b * (
				(f + 1) * b + f) + 1) + c
	},
	easeInOutBack: function(a, b, c, d, e, f)
	{
		f == void 0 && (f = 1.70158);
		return (b /= e / 2) < 1 ? d / 2 * b * b * (
			(
				(f *= 1.525) + 1) * b - f) + c : d / 2 * (
			(b -= 2) * b * (
				(
					(f *= 1.525) + 1) * b + f) + 2) + c
	},
	easeInBounce: function(a, b, c, d, e)
	{
		return
		d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
	},
	easeOutBounce: function(a, b, c, d, e)
	{
		return (b /= e) < 1 / 2.75 ? d * 7.5625 * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -=
			2.25 / 2.75) * b + 0.9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
	},
	easeInOutBounce: function(a, b, c, d, e)
	{
		return
		b < e / 2 ? jQuery.easing.easeInBounce(a, b * 2, 0, d, e) * 0.5 + c : jQuery.easing.easeOutBounce(a, b * 2 - e, 0, d, e) * 0.5 + d * 0.5 + c
	}
});
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame || function(a)
	{
		window.setTimeout(a, 1E3 / 60)
	};
(function(a)
{
	a.fn.extend(
	{
		zc: function(b)
		{
			var c = a.extend(
			{
				duration: 1E3,
				easing: "easeOutQuint",
				Sb: 0.555,
				text: ""
			}, b);
			return
			this.each(function()
			{
				var b = a(this),
					e = a("<span>").addClass("old"),
					f = {
						kb: 0
					},
					g = b.text(),
					j = 1 / c.Sb,
					m = c.text.toString(),
					i = "",
					o = "";
				a(f).animate(
				{
					kb: 1
				},
				{
					duration: c.duration,
					step: function()
					{
						i = m.substr(0, Math.round(m.length * f.kb * j));
						o = g.substr(Math.round(g.length * f.kb));
						e.text(o);
						b.text(i).append(e)
					},
					easing: "easeOutQuint"
				})
			})
		}
	})
})(jQuery);
(function(a)
{
	a.fn.ma = function(b)
	{
		function c(a, b, c)
		{
			var d = {},
				e = {};
			d[i ? "height" : "width"] = t;
			d[i ? "width" : "height"] = q;
			d[i ? "top" : "left"] = t * c;
			d.position = "absolute";
			d.overflow = "hidden";
			e[i ? "top" : "left"] = t * -c;
			e.position = "relative";
			a.css(d);
			b.css(e)
		}

		function d(a)
		{
			for (var b = [],
					a = a.concat(); a.length > 0;) b.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]);
			return
			b
		}
		var e = a.extend(
			{
				Jb: !0,
				duration: 500,
				Ub: 3
			}, b),
			f = a(this),
			g = a("<div>"),
			j = f.children(),
			m = j.size(),
			i = e.Jb,
			o = [],
			n = [],
			b = j.height(),
			l = j.width(),
			p = e.Ub,
			t = Math.round(i ? b / p : l / p),
			q = i ? l : b,
			b = {};
		(function()
		{
			var b,
				e,
				m,
				l;
			j.each(function(b)
			{
				m = {};
				m[i ? "left" : "top"] = b * q;
				m.position = "absolute";
				m.display = "block";
				a(this).css(m)
			});
			for (var s = 0; s < p; s++) b = a("<div>").addClass("viewport"),
				e = f.clone(),
				e.find("img").each(function(b)
				{
					a(this).attr("name", b)
				}),
				l = e.children().remove(),
				l = d(l.toArray()),
				c(b, e, s),
				e.append(l),
				b.append(e),
				g.append(b),
				o.push(b),
				n.push(e);
			f.before(g).remove();
			g.addClass("slot")
		})();
		b.lb = function(b)
		{
			typeof b === "number" && b < 1 && (b = Math.floor(b * m));
			for (var c,
					d,
					f,
					g = 0; g < n.length; g++) f = n[g],
				d = typeof b === "number" ? b : Math.floor(Math.random() * m),
				c = {},
				c[i ? "left" : "top"] = -d * q,
				a(f).stop().animate(c,
				{
					duration: e.duration
				})
		};
		b.test = k();
		return b
	}
})(jQuery);
SOULWIRE = {
	p: function(a)
	{
		if (a) this.k = a,
			this.enabled = !1,
			this.Vb = a.data("slug");
		this.init()
	}
};
SOULWIRE.p.extend = function(a)
{
	a.prototype = new SOULWIRE.p;
	a.prototype.K = SOULWIRE.p.prototype
};
SOULWIRE.p.prototype = {
	init: k(),
	enable: function()
	{
		if (!this.enabled) this.k.addClass("enabled"),
			this.enabled = !0
	},
	disable: function()
	{
		if (this.enabled) this.k.removeClass("enabled"),
			this.enabled = !1
	},
	show: k(),
	navigate: function()
	{
		this.enabled || this.enable()
	}
};
SOULWIRE.Introduction = function(a)
{
	this.Db = 2500;
	this.Wa = 1500;
	this.k = a;
	this.ac = a.find("article.introduction");
	this.ub = this.ac.find("dd");
	this.bc = this.ub.find("ul");
	this.v = this.bc.find("li");
	this.$ = this.v.first();
	this.vb = a.find("figure");
	this.Da = a.find("nav a");
	this.fa = a.find("nav");
	this.ma = h;
	this.ya = [];
	this.Za = 1;
	this.V = {
		Qa: h,
		slice: h
	};
	this.f = {
		xa: $.proxy(this.xa, this),
		Pa: $.proxy(this.Pa, this),
		Xa: $.proxy(this.Xa, this)
	};
	SOULWIRE.p.call(this, a)
};
SOULWIRE.Introduction.prototype = new SOULWIRE.p;
r = SOULWIRE.Introduction.prototype;
r.K = SOULWIRE.p.prototype;
r.init = function()
{
	var a = this;
	this.ma = this.k.find("figure ul").ma(
	{
		Jb: !0,
		duration: 600,
		Ub: 2
	});
	this.vb.bind("mouseenter", function()
	{
		a.ma.lb(Math.random());
		clearTimeout(a.V.slice)
	});
	this.vb.bind("mouseleave", function()
	{
		a.V.slice = setTimeout(a.f.xa, a.Wa);
		a.ma.lb()
	});
	this.v.each(function()
	{
		a.ya.push($(this).text())
	});
	this.ya.sort(function()
	{
		return
		Math.round(Math.random()) - 0.5
	});
	this.ub.css(
	{
		opacity: 1,
		left: 0
	});
	this.fa.bind("mouseover", function()
	{
		a.Da.addClass("over")
	}).bind("mouseout", function()
	{
		a.Da.removeClass("over")
	});
	this.v.not(this.$).remove();
	this.$.text(this.ya[0]);
	this.fa.bind("click", this.f.Xa)
};
r.Pa = function()
{
	this.$.zc(
	{
		text: this.ya[this.Za],
		duration: 1E3,
		Sb: 0.5
	});
	this.Za = (this.Za + 1) % this.ya.length;
	clearTimeout(this.V.Qa);
	this.V.Qa = setTimeout(this.f.Pa, this.Db)
};
r.xa = function()
{
	this.ma.lb();
	clearTimeout(this.V.slice);
	this.V.slice = setTimeout(this.f.xa, this.Wa)
};
r.enable = function()
{
	if (!this.enabled) this.V.slice = setTimeout(this.f.xa, this.Wa), this.V.Qa = setTimeout(this.f.Pa, this.Db), this.K.enable.call(this)
};
r.disable = function()
{
	this.enabled && (clearTimeout(this.V.slice), clearTimeout(this.V.Qa), this.K.disable.call(this))
};
r.Xa = function(a)
{
	$(a.currentTarget);
	SOULWIRE.b.navigate(this.Da.attr("href"), this.Da.attr("title"));
	a.preventDefault()
};
SOULWIRE.Experiments = function(a)
{
	this.qc = $("article", a);
	this.Fc = $("#sections");
	this.za = $('<iframe class="content" name="experiment">');
	this.Ec = $(".scroll-x", a);
	this.Ba = $("#header hgroup");
	this.Ra = $("#header a.close");
	this.pa = $(".pagination .prev");
	this.oa = $(".pagination .next");
	this.Jc = $("article", a).width() * 2;
	this.Lb = !1;
	this.C = h;
	this.Mb = {};
	this.f = {
		hb: $.proxy(this.hb, this),
		gb: $.proxy(this.gb, this),
		ib: $.proxy(this.ib, this)
	};
	SOULWIRE.p.call(this, a)
};
SOULWIRE.Experiments.prototype = new SOULWIRE.p;
r = SOULWIRE.Experiments.prototype;
r.K = SOULWIRE.p.prototype;
r.init = function()
{
	if (this.Lb === !1)
	{
		var a, b, c, d = this;
		this.qc.each(function()
		{
			a = $(this);
			if (c = a.data("slug")) d.Mb[c] = a;
			a.data("title", a.find("header h2 a").text());
			a.data("subtitle", a.find("header h3 a").text());
			a.find("a.open, .slideshow").each(function()
			{
				b = $(this);
				b.data("slug", c);
				b.bind("click", d.f.hb)
			})
		});
		$(window).bind("resize", this.f.ib);
		this.Ra.bind("click", this.f.gb);
		this.Lb = !0
	}
};

function u(a, b)
{
	a.C && (b = !!b, SOULWIRE.Q.send("ambienceStop"), a.za.css("background-color", a.C.data("color") || "#222"), a.k.stop().animate(
	{
		scrollTop: a.k.height()
	},
	{
		duration: b ? 10 : 550,
		easing: "easeInOutQuint",
		complete: function()
		{
			a.za.attr("src", a.C.data("content"))
		}
	}), a.Ba.removeClass("hidden"), a.Ba.find("h2").html(a.C.data("title")), a.Ba.find("h3").html(a.C.data("subtitle")), a.k.append(a.za), a.Ra.removeClass(
		"hidden"), a.C.data("comments") && SOULWIRE.Q.send("enableComments"), $("body").addClass("fullscreen"))
}

function A(a)
{
	if (a.C)
	{
		SOULWIRE.Q.send("ambienceStart");
		try
		{
			window.frames.experiment.Hc()
		}
		catch (b)
		{}
		var c = a.za;
		a.Ba.addClass("hidden");
		a.k.stop().delay(150).animate(
		{
			scrollTop: 0
		},
		{
			duration: 550,
			easing: "easeInOutQuint",
			complete: function()
			{
				c.attr("src", "").remove();
				SOULWIRE.Q.send("disableComments")
			}
		});
		a.Ra.addClass("hidden");
		a.C = h;
		$("body").removeClass("fullscreen")
	}
}
r.enable = function()
{
	this.enabled || this.K.enable.call(this)
};
r.disable = function()
{
	this.enabled && (this.K.disable.call(this), A(this))
};
r.navigate = function(a, b)
{
	this.enabled || this.enable();
	if (a !== h)
	{
		var c = this.Mb[a];
		if (c !== this.C) this.C = c, u(this, b)
	}
	else A(this)
};
r.hb = function(a)
{
	a = $(a.currentTarget);
	SOULWIRE.b.navigate("/" + this.Vb + "/" + a.data("slug") + "/");
	return !1
};
r.gb = function()
{
	SOULWIRE.b.wa() && SOULWIRE.b.bb > 0 ? window.history.back() : SOULWIRE.b.navigate("/" + this.Vb + "/");
	return !1
};
r.ib = function()
{
	this.enabled && this.C !== h && this.k.stop().scrollTop(this.k.height())
};
SOULWIRE.Stream = function(a)
{
	this.fc = 20;
	this.Gc = 10;
	this.$a = !0;
	this.Aa = $("section.flickr", a);
	this.$b = $("section.github", a);
	this.Ea = $("section.twitter", a);
	this.Ga = $("section.blog", a);
	this.Ja = {
		ab: h,
		nc: h,
		nb: h,
		sb: h
	};
	this.na = {
		ab: $(".template", this.Aa),
		nc: $(".template", this.$b),
		nb: $(".template", this.Ea),
		sb: $(".template", this.Ga)
	};
	this.Ac = {
		link: /http(s)?:\/\/[^\s]+/gi
	};
	SOULWIRE.p.call(this, a)
};
SOULWIRE.Stream.prototype = new SOULWIRE.p;
r = SOULWIRE.Stream.prototype;
r.K = SOULWIRE.p.prototype;
r.init = function()
{
	for (var a in this.na)
	{
		var b = $(this.na[a]);
		this.Ja[a] = b.parent();
		this.na[a] = b.removeClass("template").remove()
	}
};
r.enable = function()
{
	!this.enabled && this.$a && (this.Aa.addClass("loading"), this.Ea.addClass("loading"), this.Ga.addClass("loading"));
	this.K.enable.call(this)
};
r.show = function()
{
	if (this.$a) SOULWIRE.ca && SOULWIRE.ca.getData($.proxy(this.vc, this)),
		SOULWIRE.da && SOULWIRE.da.getData($.proxy(this.wc, this)),
		SOULWIRE.ba && SOULWIRE.ba.getData($.proxy(this.uc, this)),
		this.$a = !1;
	this.K.show.call(this)
};

function B(a, b)
{
	return b.replace(a.Ac.link, function(a)
	{
		return '<a href="' + a + '" target="_blank">' + a + "</a>"
	})
}
r.truncate = function(a, b)
{
	return a.length <= b ? a : a.substr(0, 60).replace(/\s+$/, "") + "&hellip;"
};

function C(a)
{
	return a.replace(/&#(\d+);/g, function(a, c)
	{
		return
		String.fromCharCode(c)
	})
}
r.la = function(a)
{
	var b = a.q + 1;
	a.k.find(".corner").text(b < 10 ? "0" + b : b)
};
r.vc = function(a)
{
	this.Ea.removeClass("loading");
	for (var b = 0, c = 0,
			d = a.length; b < d; ++b)
	{
		var e = a[b],
			f = e.text,
			g = this.truncate(f, 60);
		if (!/^@/.test(f))
		{
			var f = B(this, f),
				g = B(this, g),
				j = new Date(e.created_at),
				m = "http://twitter.com/" + e.user.screen_name + "/status/" + e.id,
				i = this.na.nb.clone(),
				o = $("<strong>").text(D(j, "d")),
				n = $("<em>").text(D(j, "M")),
				l = e.retweet_count,
				p = l < 10 ? "0" + l : l,
				l = l > 0 ? "Retweeted " + (l > 1 ? l + " times" : "once") : h;
			f += "<time>" + D(j, "M dS, Y - H:iA") + "</time>";
			l && (f += "<span>" + l + "</span>");
			i.data("source", e);
			i.find("blockquote").attr("cite", m).html(f);
			i.find("aside mark").html(g);
			i.find("aside time").attr("datetime", j).append(o).append(n);
			l && (e = $("<a>"), e.addClass("retweets"), e.attr("title", l), e.text(p), i.find("aside").append(e));
			this.Ja.nb.append(i);
			if (++c >= this.fc) break
		}
	}
	var t = this,
		q = new SOULWIRE.Ia($(".scroller", this.Ea));
	q.la(function()
	{
		t.la(q)
	});
	SOULWIRE.b.ea(!1)
};
r.wc = function(a)
{
	this.Ga.removeClass("loading");
	for (var b = 0, c = a.length; b < c; ++b)
	{
		var d = a[b],
			e = new Date(d.date),
			f = $("<div>"),
			g = this.na.sb.clone(),
			j = $("<strong>").text(D(e, "d")),
			m = $("<em>").text(D(e, "M")),
			i = $("<h2>").text(d.title),
			o = $("<div>").addClass("excerpt").text(C(d.excerpt));
		f.append(i);
		f.append(o);
		f.append($("<time>").text(D(e, "M dS, Y - H:iA")));
		i = $("<a>").addClass("link").attr("href", d.permalink).attr("target", "_blank");
		i.html("Read: <strong>" + d.title + "</strong>");
		f.append(i);
		g.find("blockquote").attr("cite", d.permalink).html(f.html());
		g.find("aside mark").html(d.title);
		g.find("aside time").attr("datetime", e).append(j).append(m);
		this.Ja.sb.append(g)
	}
	var n = this,
		l = new SOULWIRE.Ia($(".scroller", this.Ga));
	l.la(function()
	{
		n.la(l)
	});
	SOULWIRE.b.ea(!1)
};
r.uc = function(a)
{
	this.Aa.removeClass("loading");
	for (var a = a.items, b = 0, c = a.length; b < c; ++b)
	{
		var d = a[b],
			e = new Date(d.date_taken),
			f = $("<strong>").text(D(e, "d")),
			g = $("<em>").text(D(e, "M")),
			j = this.na.ab.clone(),
			m = $("<div>").addClass("image-container");
		m.append($("<img>").attr("src", d.media.m.replace(/_m(\.\w+)$/, "_z$1")));
		var i = $("<a>").addClass("link").attr("href", d.link).attr("target", "_blank");
		i.html("<strong>" + d.title + "</strong> on Flickr");
		var o = $("<span>").addClass("tags");
		o.text("Tagged: " + d.tags);
		i.append(o);
		m.append(i);
		j.data("source", d);
		j.find("blockquote").attr("cite", d.link).html(m);
		j.find("aside mark").html(d.title);
		j.find("aside time").attr("datetime", e).append(f).append(g);
		this.Ja.ab.append(j)
	}
	var n = new SOULWIRE.Ia($(".scroller", this.Aa));
	n.la(function()
	{
		n.k.find(".caption strong").text(n.C.data("source").title);
		n.k.find(".caption em").text(n.C.data("source").tags)
	});
	SOULWIRE.b.ea(!1)
};
SOULWIRE.Nodes = function(a)
{
	this.gc = 120;
	this.zb = Math.pow(this.gc, 2);
	this.Cb = 0.02;
	this.xb = 0.95;
	this.k = a;
	this.Ca = a.find(".hub");
	this.wb = this.Ca.find("li a");
	this.ob = !1;
	this.loop = this.fb = this.eb = 0;
	this.ia = [];
	this.f = {
		Oa: $.proxy(this.Oa, this),
		update: $.proxy(this.update, this)
	};
	SOULWIRE.p.call(this, a)
};
SOULWIRE.Nodes.prototype = new SOULWIRE.p;
r = SOULWIRE.Nodes.prototype;
r.K = SOULWIRE.p.prototype;
r.init = function()
{
	var a = this,
		b = Math.PI * -0.5,
		c = Math.PI * 2 / this.wb.length,
		d, e, f;
	this.ob = !1;
	this.wb.each(function()
	{
		d = $(this);
		e = Math.cos(b) * 220;
		f = Math.sin(b) * 220;
		b > Math.PI * 0.5 ? d.parent().addClass("flip") : d.parent().removeClass("flip");
		a.ia.push(new SOULWIRE.jc(e, f, d));
		a.ob && d.css(
		{
			left: 0,
			top: 0
		});
		b += c
	});
	this.k.find(".email a").attr("href", function()
	{
		for (var a = [
					13,
					122,
					110,
					118,
					121,
					129,
					124,
					71,
					119,
					130,
					128,
					129,
					118,
					123,
					77,
					128,
					124,
					130,
					121,
					132,
					118,
					127,
					114,
					59,
					112,
					124,
					59,
					130,
					120
				],
				b = parseInt(a.shift(), 10),
				c = 0; c < a.length; c++) a[c] = String.fromCharCode(a[c] - b);
		return
		a.join("")
	}())
};
r.update = function()
{
	var a = SOULWIRE.ha.Ma.X;
	a.y += (-12 - a.y) * 0.01;
	if (this.enabled)
	{
		var b, c;
		this.loop = (this.loop + 1) % 3;
		switch (this.loop)
		{
			case 0:
			case 1:
				var d,
					e,
					f,
					a = 0;
				for (b = this.ia.length; a < b; a++) c = this.ia[a],
					d = this.eb - c.x,
					e = this.fb - c.y,
					f = d * d + e * e,
					f <= this.zb && (f = 1 - f / this.zb, d = this.eb - c.x, e = this.fb - c.y, d = Math.atan2(e, d), c.fx += Math.cos(d) * f, c.Ka += Math.sin(d) * f),
					c.fx += (c.xc - c.x) * this.Cb,
					c.Ka += (c.yc - c.y) * this.Cb,
					c.qb += c.fx * c.Ob,
					c.rb += c.Ka * c.Ob,
					c.x += c.qb,
					c.y += c.rb,
					c.qb *= this.xb,
					c.rb *= this.xb,
					c.fx = 0,
					c.Ka = 0;
				break;
			case 2:
				a = 0;
				for (b = this.ia.length; a < b; a++) c = this.ia[a],
					this.ob ? c.Qb.css(
					{
						"-webkit-transform": "translate3d(" + Math.round(c.x) + "px," + Math.round(c.y) + "px, 0px)"
					}) : c.Qb.css(
					{
						left: c.x,
						top: c.y
					})
		}
		requestAnimFrame(this.f.update, this)
	}
};
r.enable = function()
{
	if (!this.enabled)
	{
		for (var a, b = 0,
				c = this.ia.length; b < c; b++) a = this.ia[b], a.x += (Math.random() - 0.5) * 100,
			a.y += (Math.random() - 0.5) * 100;
		this.k.bind("mousemove", this.f.Oa);
		this.K.enable.call(this);
		this.update()
	}
};
r.disable = function()
{
	this.enabled && (this.k.unbind("mousemove", this.f.Oa), this.K.disable.call(this))
};
r.Oa = function(a)
{
	var b = this.Ca.offset();
	this.eb = a.clientX - b.left - this.Ca.width() * 0.5;
	this.fb = a.clientY - b.top - this.Ca.height() * 0.5
};
SOULWIRE.jc = function(a, b, c)
{
	this.x = this.xc = a;
	this.y = this.yc = b;
	this.rb = this.qb = this.Ka = this.fx = 0;
	this.Qb = c;
	this.tc = 1;
	this.Ob = 1 / this.tc
};
SOULWIRE.aa = function()
{
	var a = $("#sections"),
		b = $("#discussion");
	b.find(".content");
	var c = b.find(".toggle");
	return {
		refresh: function()
		{
			typeof DISQUS !== "undefined" && DISQUS.reset(
			{
				reload: !0,
				Ic: function()
				{
					this.page.identifier = window.location.pathname;
					this.page.url = window.location.href + "#!" + window.location.pathname
				}
			})
		},
		enable: function()
		{
			b.removeClass("disabled");
			SOULWIRE.aa.refresh()
		},
		disable: function()
		{
			b.addClass("disabled closed");
			a.removeClass("pushed")
		},
		open: function()
		{
			b.removeClass("closed");
			a.addClass("pushed")
		},
		close: function()
		{
			b.addClass("closed");
			a.removeClass("pushed")
		},
		init: function()
		{
			c.bind("click", function()
			{
				b.hasClass("closed") ? SOULWIRE.aa.open() : SOULWIRE.aa.close();
				return !1
			});
			(function()
			{
				var a = document.createElement("script");
				a.type = "text/javascript";
				a.async = !0;
				a.src = "http://soulwire.disqus.com/embed.js";
				(document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(a)
			})
			();
			var a = setInterval(function()
			{
				typeof DISQUS !== "undefined" && (clearInterval(a), b.hasClass("disabled") || SOULWIRE.aa.refresh())
			}, 100);
			SOULWIRE.Q.bind("enableComments", SOULWIRE.aa.enable, SOULWIRE.aa);
			SOULWIRE.Q.bind("disableComments", SOULWIRE.aa.disable, SOULWIRE.aa)
		}
	}
}();
SOULWIRE.ta = function(a)
{
	this.enabled = !0;
	this.k = a;
	this.$ = a.find("ul");
	this.v = a.find("li");
	this.fa = $("<nav>");
	this.pa = $('<a href="#"></a>').addClass("button prev").html("<span>Previous</span>");
	this.oa = $('<a href="#"></a>').addClass("button next").html("<span>Next</span>");
	this.Yb = a.data("direction") === "vertical";
	this.Rb = this.v.length;
	this.position = 0;
	this.f = {
		next: $.proxy(this.next, this),
		prev: $.proxy(this.prev, this)
	};
	this.init()
};
SOULWIRE.ta.prototype.init = function()
{
	this.fa.append(this.pa);
	this.fa.append(this.oa);
	this.k.append(this.fa);
	var a = this.Yb,
		b = a ? this.$.height() : this.$.width();
	this.v.each(function(c)
	{
		$(this).css(a ?
		{
			top: c * b
		} :
		{
			left: c * b
		})
	});
	this.oa.bind("click", this.f.next);
	this.pa.bind("click", this.f.prev)
};
SOULWIRE.ta.prototype.ka = function(a)
{
	if (this.enabled)
	{
		this.position = a < 0 ? this.Rb - 1 : a > this.Rb - 1 ? 0 : a;
		var b = this,
			a = this.Yb ?
			{
				top: this.position * -this.$.height()
			} :
			{
				left: this.position * -this.$.width()
			};
		this.enabled = !1;
		this.$.stop().animate(a,
		{
			duration: 450,
			easing: "easeInOutQuint",
			complete: function()
			{
				b.enabled = !0
			}
		})
	}
};
SOULWIRE.ta.prototype.next = function()
{
	this.ka(this.position + 1);
	return !1
};
SOULWIRE.ta.prototype.prev = function()
{
	this.ka(this.position - 1);
	return !1
};
SOULWIRE.Ia = function(a)
{
	this.enabled = !0;
	this.Sa = h;
	this.k = a;
	this.Fa = a.find("header");
	this.v = a.find("article");
	this.fa = a.find("nav");
	this.pa = a.find("nav a.up");
	this.oa = a.find("nav a.down");
	this.loop = !0;
	this.q = this.jb = 0;
	this.C = h;
	this.Kb = 0;
	this.Xb = parseInt(a.data("above"), 10) || 1;
	this.Wb = parseInt(a.data("below"), 10) || 3;
	this.pc = parseInt(this.v.css("margin-bottom"), 10);
	this.Zb = this.Fa.outerHeight(!0);
	this.pb = this.Fa.position().top;
	this.Dc = this.pb + this.Zb;
	this.cb = this.v.outerHeight(!0);
	this.ua = [];
	this.f = {
		resize: $.proxy(this.resize, this),
		click: $.proxy(this.click, this),
		next: $.proxy(this.next, this),
		prev: $.proxy(this.prev, this)
	};
	this.init()
};
r = SOULWIRE.Ia.prototype;
r.init = function()
{
	var a, b, c = this;
	this.v.each(function(d)
	{
		a = $(this);
		b = a.clone().addClass("expanded");
		c.Fa.append(b);
		a.data("index", d)
	});
	this.v.addClass("preview");
	this.v.bind("click", c.f.click);
	this.Sa = this.Fa.find("article");
	this.oa.bind("click", this.f.next);
	this.pa.bind("click", this.f.prev);
	$(window).bind("resize", this.f.resize);
	this.resize();
	c.sort(!1);
	setTimeout(function()
	{
		for (var a = 0,
				b = c.ua.length; a < b; ++a) c.ua[a]
			()
	}, 1);
	$(this.Sa[0]).css(
	{
		opacity: 0
	}).animate(
	{
		opacity: 1
	},
	{
		duration: 350
	});
	this.v.each(function(b)
	{
		a = $(this);
		a.hasClass("disabled") || a.css(
		{
			opacity: 0
		}).stop().delay(b * 150).animate(
		{
			opacity: 1
		},
		{
			duration: 350
		})
	})
};
r.resize = k();
r.click = function(a)
{
	this.ka(parseInt($(a.currentTarget).data("index"), 10));
	return !1
};
r.Gb = function(a, b)
{
	if (typeof a == "function")
	{
		var c = Array.prototype.slice.call(arguments, 2);
		setTimeout(function()
		{
			a.apply(h, c)
		}, b)
	}
	else setTimeout(a, b)
};
r.sort = function(a)
{
	if (this.q < 0 || this.q > this.v.length - 1) this.q = Math.max(this.q, 0),
		this.q = Math.min(this.q, this.v.length - 1);
	else
	{
		typeof a === "undefined" && (a = !0);
		var b, c, d, e,
			f = this,
			g = this.q > this.jb;
		this.v.each(function(i)
		{
			b = $(this);
			c = i - (f.q - f.Kb);
			e = c > f.Wb || c < -f.Xb;
			d = f.pb + f.cb * (c *= e ? 1.25 : 1);
			i === f.jb && (g ? b.addClass("static").css(
			{
				top: f.pb
			}) : b.addClass("static").css(
			{
				top: f.Dc - f.cb
			}));
			if (i > f.q || i === f.q && g) d += f.Zb - f.cb + f.pc;
			e ? b.addClass("disabled") : b.removeClass("disabled");
			if (i === f.q) f.C = b;
			a ? (e || g && c >= f.Wb || !g && c <= -f.Xb ? b.addClass("offset") : b.removeClass("offset"), f.Gb(f.move, 1, b, d, e)) : b.addClass("static").css(
			{
				opacity: e ? 0 : 1,
				top: d
			})
		});
		this.Sa.each(function(e)
		{
			b = $(this);
			c = e - (f.q - f.Kb);
			d = b.height() * c;
			a ? f.Gb(f.move, 1, b, d, !1) : b.addClass("static").css(
			{
				top: d
			})
		});
		this.jb = this.q;
		for (var j = 0,
				m = this.ua.length; j < m; ++j) this.ua[j]()
	}
};
r.la = function(a)
{
	this.ua.push(a)
};
r.move = function(a, b, c)
{
	a.removeClass("static").css(
	{
		opacity: c ? 0 : 1,
		top: b
	})
};
r.ka = function(a)
{
	this.q = a;
	this.sort()
};
r.next = function()
{
	this.ka(this.q + 1);
	return !1
};
r.prev = function()
{
	this.ka(this.q - 1);
	return !1
};
SOULWIRE.ca = function()
{
	var a = h;
	return {
		sa: "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=soulwire&count=100",
		qa: "jsonp",
		ra: 6E5,
		getData: function(b)
		{
			if (a && (new Date).getTime() - -1 < SOULWIRE.ca.ra) b && b.call(SOULWIRE.ca, a);
			else
			{
				var c = {};
				c.url = SOULWIRE.ca.sa;
				c.dataType = SOULWIRE.ca.qa;
				c.error = k();
				c.success = function(c)
				{
					SOULWIRE.ca.Nb = (new Date).getTime();
					b && (a = c, b.call(SOULWIRE.ca, c))
				};
				$.ajax(c)
			}
		}
	}
}();
SOULWIRE.da = function()
{
	var a = h;
	return {
		sa: "http://blog.soulwire.co.uk/feed/?feed=json&jsonp=?",
		qa: "jsonp",
		ra: 6E5,
		getData: function(b)
		{
			if (a && (new Date).getTime() - -1 < SOULWIRE.da.ra) b && b.call(SOULWIRE.da, a);
			else
			{
				var c = {};
				c.url = SOULWIRE.da.sa;
				c.dataType = SOULWIRE.da.qa;
				c.error = k();
				c.success = function(c)
				{
					SOULWIRE.da.Nb = (new Date).getTime();
					b && (a = c, b.call(SOULWIRE.da, c))
				};
				$.ajax(c)
			}
		}
	}
}();
SOULWIRE.ba = function()
{
	var a = h;
	return {
		sa: "http://flickr.com/services/feeds/photos_public.gne?id=13386131@N08&format=json&jsoncallback=?",
		qa: "jsonp",
		ra: 6E5,
		getData: function(b)
		{
			if (a && (new Date).getTime() - -1 < SOULWIRE.ba.ra) b && b.call(SOULWIRE.ba, a);
			else
			{
				var c = {};
				c.url = SOULWIRE.ba.sa;
				c.dataType = SOULWIRE.ba.qa;
				c.error = k();
				c.success = function(c)
				{
					SOULWIRE.ba.Nb = (new Date).getTime();
					b && (a = c, b.call(SOULWIRE.ba, c))
				};
				$.ajax(c)
			}
		}
	}
}();
SOULWIRE.Va = function(a, b)
{
	this.ga = 24;
	this.hc = 220;
	this.Ha = 4;
	this.Ta = 15;
	this.Ab = 0.5;
	this.ec = 1.5;
	this.yb = Math.pow(this.hc, 2);
	this.ic = 1 / this.yb;
	this.Na = [];
	this.Ib = !1;
	this.width = a || 0;
	this.height = b || 0;
	this.J = [];
	this.Ya = [];
	this.init()
};
SOULWIRE.Va.prototype.init = function()
{
	var a = this;
	SOULWIRE.Q.bind("KONAMI", function()
	{
		for (var b = a.Ta - a.Ha,
				c = a.Ta * 4,
				d = 0; d < b; d++) a.Na[d] = new Image,
			a.Na[d].src = "http://placekitten.com/g/" + c + "/" + (c + d);
		a.Ib = !0;
		SOULWIRE.ha.Ma.X.y = -120
	});
	var b, c, d, e, f, g = [];
	for (b = 0; b < this.ga; b++) g[b] = !1;
	for (b = 0; b < this.ga; b++) c = Math.random(),
		d = Math.random() * this.width, e = Math.random() * this.height, f = this.Ha + c * (this.Ta - this.Ha), c = this.Ab + c * (this.ec - this.Ab), this.J[b] =
		new SOULWIRE.Ua(d, e, c, f),
		this.Ya[b] = g.concat()
};
SOULWIRE.Va.prototype.update = function(a)
{
	var b, c, d, e;
	e = this.width;
	d = this.height;
	for (b = 0; b < this.ga; b++) c = this.J[b],
		c.x += c.Tb * a.x, c.y += c.Tb * a.y, c.x = c.x < -c.R ? e + c.R : c.x > e + c.R ? -c.R : c.x, c.y = c.y < -c.R ? d + c.R : c.y > d + c.R ? -c.R : c.y;
	for (b = 0; b < this.ga; b++)
	{
		c = this.J[b];
		for (a = b + 1; a < this.ga; a++) d = this.J[a],
			e = c.x - d.x, d = c.y - d.y, e = e * e + d * d,
			this.Ya[b][a] = e <= this.yb ? 1 - e * this.ic : !1
	}
};

function E(a, b, c)
{
	var d, e, f, g, j;
	for (d = 0; d < a.ga; d++)
	{
		f = a.J[d];
		for (e = d + 1; e < a.ga; e++)
			if ((j = a.Ya[d]
					[
						e
					]) !== !1) g = a.J[e],
				b.beginPath(),
				b.moveTo(f.x, f.y), b.lineTo(g.x, g.y), b.globalAlpha = j * 1.5 * c, b.strokeStyle = "#FFF",
				b.lineWidth = 1, b.stroke();
		a.Ib ? (e = f.R * 2, b.save(), b.globalAlpha = 1, b.beginPath(), b.arc(f.x, f.y, e, 0, Math.PI * 2, !1), b.closePath(), b.clip(), b.drawImage(a.Na[f.id % a.Na
			.length], f.x - e, f.y - e), b.restore()) : (b.beginPath(), b.arc(f.x, f.y, f.R, 0, Math.PI * 2, !1), b.closePath(), b.strokeStyle = f.Eb, b.globalAlpha =
			0.25 * c, b.lineWidth = f.R * a.Ha * 0.5, b.stroke(), b.globalAlpha = 0.8 * c, b.fillStyle = f.Eb, b.fill())
	}
}
SOULWIRE.Ua = function(a, b, c, d, e)
{
	this.x = a || 0;
	this.y = b || 0;
	this.Tb = c || 1;
	this.R = d || 5;
	this.Eb = e || "#FFF";
	this.id = SOULWIRE.Ua.dc++
};
SOULWIRE.Ua.dc = 0;
SOULWIRE.ha = function()
{
	if (SOULWIRE.ha.Ma) return SOULWIRE.ha.Ma;
	SOULWIRE.ha.Ma = this;
	this.height = this.width = 0;
	this.k = h;
	this.tb = $("<canvas>");
	this.canvas = this.tb[0];
	this.Fb = this.canvas.getContext("2d");
	this.enabled = !1;
	this.J = h;
	this.X = {
		x: 0,
		y: -80
	};
	this.Pb = 12;
	this.alpha = 0;
	this.Hb = 0.8;
	this.loop = 0;
	this.f = {
		resize: $.proxy(this.resize, this),
		update: $.proxy(this.update, this),
		scroll: $.proxy(this.scroll, this),
		start: $.proxy(this.start, this),
		stop: $.proxy(this.stop, this)
	}
};
r = SOULWIRE.ha.prototype;
r.init = function(a)
{
	SOULWIRE.Q.bind("ambienceStop", this.f.stop);
	SOULWIRE.Q.bind("ambienceStart", this.f.start);
	var b;
	this.k = a;
	this.k.append(this.tb);
	this.resize(h);
	this.J = new SOULWIRE.Va(this.width, this.height);
	a = $("#sections, .scroll-x");
	a.bind("scroll", this.f.scroll);
	a.each(function()
	{
		(b = $(this)).data(
		{
			px: b.scrollLeft(),
			py: b.scrollTop()
		})
	});
	$(window).bind("resize", this.f.resize);
	this.start()
};
r.start = function()
{
	if (!this.enabled) this.enabled = !0,
		this.update()
};
r.stop = function()
{
	this.enabled = !1
};
r.update = function()
{
	if (this.enabled)
	{
		if (Math.abs(this.X.x) > 0.01 || Math.abs(this.X.y) > 0.01) switch (this.loop = (this.loop + 1) % 4, this.loop)
		{
			case 0:
				this.J.update(this.X);
				this.X.x *= this.Hb;
				this.X.y *= this.Hb;
				break;
			case 1:
				this.alpha += (1 - this.alpha) * 0.1,
					this.alpha < 0.99 && (this.X.y -= 0.1),
					this.canvas.width = this.canvas.width,
					E(this.J, this.Fb, this.alpha)
		}
		requestAnimFrame(this.f.update, this)
	}
};
r.scroll = function(a)
{
	var a = $(a.target),
		b = a.data("px"),
		c = a.data("py"),
		d = a.scrollLeft(),
		e = a.scrollTop(),
		b = d - b,
		c = e - c;
	this.X.x += (b < -120 ? -120 : b > 120 ? 120 : b) / 120 * -this.Pb;
	this.X.y += (c < -120 ? -120 : c > 120 ? 120 : c) / 120 * -this.Pb;
	a.data(
	{
		px: d,
		py: e
	})
};
r.resize = function()
{
	this.width = this.canvas.width = this.k.width();
	this.height = this.canvas.height = this.k.height();
	if (this.J) this.J.width = this.width,
		this.J.height = this.height,
		this.canvas.width = this.canvas.width,
		E(this.J, this.Fb)
};
Date.va = {
	Cc: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	sc: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	Bc: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	rc: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	d: function(a)
	{
		return (a.getDate() < 10 ? "0" : "") + a.getDate()
	},
	D: function(a)
	{
		return
		Date.va.Bc[a.getDay()]
	},
	j: function(a)
	{
		return a.getDate()
	},
	l: function(a)
	{
		return
		Date.va.rc[a.getDay()]
	},
	N: function(a)
	{
		return a.getDay() + 1
	},
	S: function(a)
	{
		return a.getDate() % 10 == 1 && a.getDate() != 11 ? "st" : a.getDate() % 10 == 2 && a.getDate() != 12 ? "nd" : a.getDate() % 10 == 3 && a.getDate() != 13 ?
			"rd" : "th"
	},
	w: function(a)
	{
		return a.getDay()
	},
	z: function(a)
	{
		return
		Math.ceil(
			(this - new Date(a.getFullYear(), 0, 1)) / 864E5)
	},
	W: function(a)
	{
		a = new Date(a.getFullYear(), 0, 1);
		return
		Math.ceil(
			(
				(this - a) / 864E5 + a.getDay() + 1) / 7)
	},
	F: function(a)
	{
		return
		Date.va.sc[a.getMonth()]
	},
	m: function(a)
	{
		return (a.getMonth() < 9 ? "0" : "") + (a.getMonth() + 1)
	},
	M: function(a)
	{
		return
		Date.va.Cc[a.getMonth()]
	},
	n: function(a)
	{
		return a.getMonth() + 1
	},
	t: function()
	{
		var a = new Date;
		return (new Date(a.getFullYear(), a.getMonth(), 0)).getDate()
	},
	L: function(a)
	{
		a = a.getFullYear();
		return a % 400 == 0 || a % 100 != 0 && a % 4 == 0
	},
	o: function(a)
	{
		var b = new Date(a.valueOf());
		b.setDate(b.getDate() - (a.getDay() + 6) % 7 + 3);
		return b.getFullYear()
	},
	Y: function(a)
	{
		return a.getFullYear()
	},
	y: function(a)
	{
		return ("" + a.getFullYear()).substr(2)
	},
	a: function(a)
	{
		return a.getHours() < 12 ? "am" : "pm"
	},
	A: function(a)
	{
		return a.getHours() < 12 ? "AM" : "PM"
	},
	B: function(a)
	{
		return
		Math.floor(
			(
				(a.getUTCHours() + 1) % 24 + a.getUTCMinutes() / 60 + a.getUTCSeconds() / 3600) * 1E3 / 24)
	},
	g: function(a)
	{
		return a.getHours() % 12 || 12
	},
	G: function(a)
	{
		return a.getHours()
	},
	h: function(a)
	{
		return (
			(a.getHours() % 12 || 12) < 10 ? "0" : "") + (a.getHours() % 12 || 12)
	},
	H: function(a)
	{
		return (a.getHours() < 10 ? "0" : "") + a.getHours()
	},
	i: function(a)
	{
		return (a.getMinutes() < 10 ? "0" : "") + a.getMinutes()
	},
	s: function(a)
	{
		return (a.getSeconds() < 10 ? "0" : "") + a.getSeconds()
	},
	u: function(a)
	{
		a = a.getMilliseconds();
		return (a < 10 ? "00" : a < 100 ? "0" : "") + a
	},
	e: function()
	{
		return "Not Yet Supported"
	},
	I: function()
	{
		return "Not Yet Supported"
	},
	O: function(a)
	{
		return (-a.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(a.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(a.getTimezoneOffset() / 60) + "00"
	},
	P: function(a)
	{
		return (-a.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(a.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(a.getTimezoneOffset() / 60) + ":00"
	},
	T: function(a)
	{
		var b = a.getMonth();
		a.setMonth(0);
		var c = a.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, "$1");
		a.setMonth(b);
		return c
	},
	Z: function(a)
	{
		return -a.getTimezoneOffset() * 60
	},
	c: function(a)
	{
		return D(a, "Y-m-d\\TH:i:sP")
	},
	r: function(a)
	{
		return a.toString()
	},
	U: function(a)
	{
		return a.getTime() / 1E3
	}
};

function D(a, b)
{
	for (var c = "", d = Date.va, e = 0; e < b.length; e++)
	{
		var f = b.charAt(e);
		e - 1 >= 0 && b.charAt(e - 1) == "\\" ? c += f : d[f] ? c += d[f]
			(a) : f != "\\" && (c += f)
	}
	return c
}
SOULWIRE.b = function()
{
	function a()
	{
		SOULWIRE.b.ea(!1)
	}

	function b(a)
	{
		var a = a.keyCode,
			b = l.prev().length === 0;
		if (!o && b && a === m[0]) return m.shift(),
			m.length === 0 && (SOULWIRE.Q.send("KONAMI"), g(), o = !0),
			clearTimeout(i),
			i = setTimeout(function()
			{
				m = j.concat()
			}, 800), !1;
		else m = j.concat();
		switch (a)
		{
			case 38:
			case 40:
				if (x) break;
				b = l[a === 38 ? "prev" : "next"]
					("section");
				b.length > 0 && (a = b.data("slug")) && SOULWIRE.b.navigate("/" + a);
				break;
			case 37:
			case 39:
				b = l.find(".scroll-x");
				if (b.length > 0)
				{
					var c = b.scrollLeft();
					c += (a === 37 ? -1 : 1) * $(window).width() * 0.5;
					b.stop().animate(
					{
						scrollLeft: c
					},
					{
						duration: 500,
						easing: "easeOutQuint"
					})
				}
				return !1
		}
	}

	function c()
	{
		SOULWIRE.b.ea();
		SOULWIRE.b.mb()
	}

	function d()
	{
		clearTimeout(z);
		z = setTimeout(e, 150)
	}

	function e()
	{
		for (var a = v.height() * 0.5,
				b = Number.MAX_VALUE,
				c,
				d,
				e,
				f,
				g = 0,
				j = w.length; g < j; ++g) d = w[g],
			c = $(d),
			f = c.position().top, c = f + c.height(),
			f = Math.abs(a - f), c = Math.abs(a - c), f = Math.min(f, c), f < b && (b = f, e = d);
		a = $(e).data("slug");
		SOULWIRE.b.kc(a)
	}

	function f()
	{
		for (var a = 0; a < w.length; ++a)
		{
			var b = $(w[a]),
				c = b.data("controller"),
				d = b.data("slug");
			if (d)
				if (y[d] = b, c) try
				{
					var e = SOULWIRE.b.lc(c);
					s[d] = new e(b)
				}
			catch (f)
			{}
			else s[d] = new SOULWIRE.p(b)
		}
	}

	function g()
	{
		var a, b, c, d;
		$("img").each(function(e)
		{
			a = $(this);
			b = parseInt(a.attr("name"));
			isNaN(b) || (e = b);
			c = a.width() + e;
			d = a.height() + e;
			a.attr("src", "http://placekitten.com/g/" + c + "/" + d);
			a.attr("width", c).attr("height", d)
		})
	}
	var j = [38, 38, 40, 40,
			37, 39,
			37, 39,
			66, 65,
			13
		],
		m = j.concat(),
		i = h,
		o = !1,
		n = h,
		l = h,
		p = h,
		t = h,
		q = !1,
		x = !1,
		v = $("#sections"),
		w = $("#sections > section"),
		y = {},
		s = {},
		z = h;
	return {
		bb: 0,
		init: function()
		{
			t = SOULWIRE.b.La();
			f();
			if (SOULWIRE.b.wa()) window.addEventListener("popstate", c, !1);
			else if (window.location.hash.length === 0)
			{
				var g = window.location.pathname.replace(/^\/|\/$/g, "");
				g.length > 0 && SOULWIRE.b.navigate(g)
			}
			$(window).bind("resize", a);
			$(window).bind("keydown", b);
			v.bind("scroll", d);
			SOULWIRE.b.ea();
			e();
			setTimeout(function()
			{
				w.css(
				{
					opacity: 1
				})
			}, 500);
			SOULWIRE.b.mb()
		},
		mb: function(a)
		{
			typeof a === "undefined" && (a = SOULWIRE.b.La().join("/"));
			a = a.replace(/^\/+|\/+$/g, "");
			_gaq.push(
				["_setAccount", "UA-323020-1"]);
			_gaq.push(
				["_trackPageview", "/" + a + "/"])
		},
		wa: function()
		{
			return !(!window.history || !history.pushState)
		},
		lc: function(a)
		{
			for (var b = a.split("."),
					c = window || this,
					d = 0,
					e = b.length; d < e; ++d) c = c[b[d]];
			if (typeof c !== "function") throw Error("'" + a + "' is not a valid function definition");
			return
			c
		},
		La: function(a)
		{
			a = SOULWIRE.b.wa() ? a || window.location.pathname : a || window.location.hash;
			return
			a.replace(/^\#?\/|\/$/g, "").split("/")
		},
		navigate: function(a, b, c)
		{
			SOULWIRE.b.wa() ? a !== window.location.pathname && (history.pushState(c ||
			{}, b, a), SOULWIRE.b.bb++) : window.location = "/#/" + a.replace(/^\//, "");
			SOULWIRE.b.ea();
			SOULWIRE.b.mb()
		},
		ea: function(a)
		{
			var a = typeof a === "undefined" ? !0 : a,
				b = SOULWIRE.b.La(),
				c = b.join("/"),
				d;
			if (d = y[b[0]])
			{
				d = v.scrollTop() + $(d).position().top - 0;
				var f = Math.round(Math.abs(d - v.scrollTop()) / v.height());
				l !== h && a ? (x = !0, v.stop().animate(
				{
					scrollTop: d
				},
				{
					duration: 400 + 200 * f,
					easing: "easeInOutQuint",
					complete: function()
					{
						x = !1;
						typeof p !== "undefined" && p.show.call(p)
					}
				})) : (v.scrollTop(d), e());
				c !== n && (a = !1, !q && t.join("/") === b.join("/") && (a = q = !0), s[b[0]].navigate(b[1] || h, a), SOULWIRE.Bb.oc(b[0]))
			}
			n = c
		},
		kc: function(a)
		{
			var b = y[a];
			b !== l && (p && p.disable(), (p = s[a]) && p.enable(), l && $("body").removeClass(l.data("slug")), $("body").addClass(a), l = b, SOULWIRE.b.La()[0] !== a &&
				SOULWIRE.b.wa() && (history.pushState(
				{}, "", "/" + a), SOULWIRE.b.bb++), SOULWIRE.b.ea(), SOULWIRE.ja.update(l))
		}
	}
}();
SOULWIRE.Bb = function()
{
	function a(a)
	{
		a = $(a.currentTarget);
		SOULWIRE.b.navigate(a.attr("href"), a.attr("title"));
		return !1
	}
	var b = $("#sectionMenu"),
		c = $("a", b);
	return {
		init: function()
		{
			c.bind("click", a)
		},
		oc: function(a)
		{
			var b;
			c.each(function()
			{
				b = $(this);
				RegExp("\\b" + a + "\\b", "i").test(b.attr("href")) ? b.addClass("active") : b.removeClass("active")
			})
		}
	}
}();
SOULWIRE.ja = function()
{
	var a = $("nav.pagination"),
		b = h,
		c = h,
		d = h,
		e = a.find(".next a"),
		f = a.find(".prev a");
	return {
		init: function()
		{
			e.bind("click", SOULWIRE.ja.next);
			f.bind("click", SOULWIRE.ja.prev)
		},
		mc: function()
		{
			if (d)
			{
				var a,
					b = 0,
					c = Number.MAX_VALUE;
				d.each(function(d)
				{
					a = Math.abs($(this).offset().left);
					a < c && (c = a, b = d)
				});
				return
				b
			}
			return
			0
		},
		update: function(e)
		{
			var f = e.find(".container-x"),
				e = e.find(".scroll-x");
			f.length && e.length ? (c = e, b = f, d = f.children(), a.addClass("enabled")) : (d = b = c = h, a.removeClass("enabled"))
		},
		scroll: function(a)
		{
			if (b) d ? (a = SOULWIRE.ja.mc() + a, a = $(d[Math.min(Math.max(0, a), d.length - 1)]).offset().left) : a *= 500,
				c.stop().animate(
				{
					scrollLeft: c.scrollLeft() + a
				},
				{
					duration: 350,
					easing: "easeInOutQuint"
				})
		},
		next: function()
		{
			SOULWIRE.ja.scroll(1);
			return !1
		},
		prev: function()
		{
			SOULWIRE.ja.scroll(-1);
			return !1
		}
	}
}();
SOULWIRE.Q = function()
{
	var a = {};
	return {
		bind: function(b, c, d)
		{
			c = c["___signal_" + b] = {
				method: c,
				scope: d
			};
			(a[b] = a[b] || []).push(c)
		},
		unbind: function(b, c)
		{
			if (a.hasOwnProperty(b))
			{
				var d = a[b],
					e = d.indexOf(c["___signal_" + b]);
				e !== -1 && d.splice(e, 1);
				delete c["___signal_" + b]
			}
		},
		send: function(b, c)
		{
			if (a.hasOwnProperty(b))
				for (var d = a[b],
						e,
						f = 0,
						g = d.length; f < g; f++) e = d[f],
					e.method.call(e.scope, c)
		}
	}
}();
SOULWIRE.cc = function()
{
	function a()
	{
		var a = f.find(".about"),
			b = a.html();
		b += ' - Thanks go out to <a href="http://placekitten.com/" target="_blank">Mark</a>for the kittens :)';
		a.html(b)
	}

	function b()
	{
		SOULWIRE.b.navigate(j.attr("href"), j.attr("title"));
		return !1
	}

	function c()
	{
		j.removeClass("over")
	}

	function d()
	{
		j.addClass("over")
	}

	function e()
	{
		i ? m.scrollTop() > 10 && (g.addClass("disabled"), i = !1) : m.scrollTop() < 10 && (g.removeClass("disabled"), i = !0)
	}
	var f = $("footer#footer"),
		g = f.find("nav"),
		j = g.find(".button"),
		m = $("#sections"),
		i = !1;
	return {
		init: function()
		{
			m.bind("scroll", e);
			g.bind("mouseover", d);
			g.bind("mouseout", c);
			g.bind("click", b);
			e();
			SOULWIRE.Q.bind("KONAMI", a, this)
		}
	}
}();
SOULWIRE.cc.init();
$(document).ready(function()
{
	Modernizr && (!Modernizr.canvas || !Modernizr.csstransitions || !Modernizr.opacity || !Modernizr.rgba) && $(".shitbrowser").removeClass("hidden");
	for (var a = $("#experiment-template"),
			b = 0; b < 4; ++b)
	{
		var c = a.clone(),
			d = c.data("slug");
		c.data("slug", d + "-" + Math.floor(Math.random() * 9999))
	}
	$(".container-x").each(function()
	{
		var a = $(this),
			b = 0;
		a.children().each(function()
		{
			b += $(this).outerWidth(!0)
		});
		a.css(
		{
			width: b
		})
	});
	a = $("<div>").addClass("parallax");
	$("#sections").before(a);
	(new SOULWIRE.ha).init(a);
	$(".slideshow").each(function()
	{
		new SOULWIRE.ta($(this))
	});
	SOULWIRE.b.init();
	SOULWIRE.Bb.init()
});