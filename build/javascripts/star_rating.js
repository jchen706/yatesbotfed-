//  Starbox 1.2 - 17-5-2009
//  Copyright (c) 2008-2009 Nick Stakenburg (http://www.nickstakenburg.com)
//
//  Licensed under a Creative Commons Attribution-Noncommercial-No Derivative Works 3.0 Unported License
//  http://creativecommons.org/licenses/by-nc-nd/3.0/

//  More information on this project:
//  http://www.nickstakenburg.com/projects/starbox/

var Starboxes = {
  options: {
    buttons: 5, // amount of clickable areas
    className: 'content', // default class
    color: false, // would overwrite the css style to set color on the stars
    duration: 0.6, // the duration of the revert effect, when effects are used
    effect: {
      mouseover: false, // use effects on mouseover, default false
      mouseout: window.Effect && Effect.Morph // use effects on mouseout, default when available
    },
    hoverColor: false, // overwrites the css hover color
    hoverClass: 'hover', // the css hover class color
    ghostColor: false, // the color of the ghost stars, if used
    ghosting: true, // ghosts the previous vote
    identity: false, // a unique value you can give each starbox
    indicator: false, // use an indicator, default false
    inverse: false, // inverse the stars, right to left
    locked: false, // lock the starbox to prevent voting
    max: 5, // the maximum rating of the starbox
    onRate: Prototype.emptyFunction, // default onRate, function(element, memo) {}
    rated: false, // or a rating to indicate a vote has been cast
    ratedClass: 'rated', // class when rated
    rerate: false, // allow rerating
    overlay: 'content-star.png', // default star overlay image
    overlayImages: '/images/star_rating/', // directory of images relative to this file
    stars: 5, // the amount of stars
    total: 0 // amount of votes cast
  }
};

eval(
  (function(p, a, c, k, e, r) {
    e = function(c) {
      return (
        (c < a ? '' : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    if (!''.replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function(e) {
          return r[e];
        }
      ];
      e = function() {
        return '\\w+';
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p;
  })(
    'P.1a(n,{2r:"1.6.0.3",2s:"1.8.2",1Q:i(){5.1o("12");5.Q.1R=1;h(/^(2t?:\\/\\/|\\/)/.2u(5.9.1p)){5.1q=5.9.1p}1r{j a=/13(?:-[\\w\\d.]+)?\\.2v(.*)/;5.1q=(($$("2w[C]").1S(i(b){o b.C.2x(a)})||{}).C||"").1T(a,"")+5.9.1p}},1o:i(a){h((2y 1b[a]=="2z")||(5.1s(1b[a].2A)<5.1s(5["1U"+a]))){2B("1V 2C "+a+" >= "+5["1U"+a]);}},1s:i(a){j b=a.1T(/1t.*|\\./g,"");b=1u(b+"0".1v(4-b.2D));o a.2E("1t")>-1?b-1:b},1W:(i(b){j a=l 2F("2G ([\\\\d.]+)").2H(b);o a?(2I(a[1])<7):1X})(2J.2K),Q:i(b){b=$(b);j c=b.2L("1Y"),a=1w.2M;h(c){o c}2N{c="2O"+a.1R++}2P($(c));b.2Q("1Y",c);o c},1x:[],2R:i(a){h(!5.1y(a.C)){5.1x.1c(a)}o a},1y:i(a){o 5.1x.1S(i(b){o b.C==a})},G:[],1Z:i(a){5.G.1c(a)},1d:i(){h(!5.G[0]){5.20=21;o}5.22(5.G[0])},22:i(c){j e=[],b=c.9.23,a=5.1y(b);5.G.H(i(f){h(f.9.23==b){e.1c(f);5.G=5.G.2S(f)}}.y(5));h(!a){j d=l 2T();d.2U=i(){5.1z(e,{C:b,I:d.I,J:d.J,24:d.C})}.y(5);d.C=n.1q+b}1r{5.1z(e,a)}},1z:i(b,a){b.H(i(c){c.1e=a;c.25()});5.1d()},1A:(i(a){o{1f:"1f",R:"R",K:(a?"2V":"K")}})(12.1g.1h),26:i(a){h(!12.1g.1h){a=a.2W(i(e,d){j c=P.2X(5)?5:5.r,b=d.2Y;h(b!=c&&!$A(c.2Z("*")).30(b)){e(d)}})}o a}});n.1Q();31.27("32:33",n.1d.y(n));j 1V=34.35({36:i(a,b){5.r=$(a);5.p=b;5.9=P.1a(P.37(n.9),1w[2]||{});$w("L m D t").H(i(c){5[c]=5.9[c]}.y(5));5.S=5.9.S||(5.m&&!5.9.1B);h(!5.L){5.L=n.Q(5.r)}h(5.9.u&&(5.9.u.R||5.9.u.K)){n.1o("38")}n.1Z(5);h(n.20){n.1d()}},28:i(){$w("K R 1f").H(i(c){j b=c.29(),a=5["1i"+b].39(5);5["1i"+b+"1C"]=(c=="K"&&!12.1g.1h)?n.26(a):a;5.14.27(n.1A[c],5["1i"+b+"1C"])}.y(5));5.M.2a("k",{2b:"3a"})},2c:i(){$w("R K 1f").H(i(a){5.14.3b(n.1A[a],5["1i"+a.29()+"1C"])}.y(5));5.M.2a("k",{2b:"3c"})},25:i(){5.15=5.1e.J;5.16=5.1e.I;5.1D=5.1e.24;5.T=5.15*5.9.1E;5.17=5.T/5.9.M;5.1j=5.9.D/5.9.M;h(5.9.u){5.2d=5.18(0);5.2e=5.18(5.9.D)}j a={N:{U:"N",1k:0,z:0,J:5.T+"q",I:5.16+"q"},1F:{U:"2f",J:5.T+"q",I:5.16+"q"},2g:{U:"N",1k:0,z:0,J:5.15+"q",I:5.16+"q"}};5.r.V("13");5.2h=l s("v",{W:5.9.W||""}).k({U:"2f"}).x(5.19=l s("v").x(5.1l=l s("v").x(5.1G=l s("v",{W:"1E"}).k(P.1a({3d:"2i"},a.1F)))));h(5.m){5.19.V("m")}h(5.S){5.19.V("S")}h(5.9.2j){5.1G.x(5.O=l s("v",{W:"O"}).k(a.N));h(5.9.2k){5.O.k({X:5.9.2k})}h(5.9.u){5.O.E=5.O.Q()}5.Y(5.O,5.p,(1b.Z&&Z.1H))}5.1G.x(5.B=l s("v",{W:"B"}).k(a.N)).x(l s("v").k(a.N).x(5.14=l s("v").k(a.1F)));h(5.9.1I){5.B.k({X:5.9.1I})}h(5.9.u){5.B.E=5.B.Q()}5.9.1E.1v(i(b){j c;5.14.x(c=l s("v").k(P.1a({X:"3e("+5.1D+") 1k z 3f-3g",z:5.15*b+"q"},a.2g)));c.k({z:5.15*b+"q"});h(n.1W){c.k({X:"3h",3i:"3j:3k.3l.3m(C=\'"+5.1D+"\'\', 3n=\'3o\')"})}}.y(5));5.M=[];5.9.M.1v(i(d){j c,b=5.9.2l?5.T-5.17*(d+1):5.17*d;5.14.x(c=l s("v").k({U:"N",1k:0,z:b+"q",J:5.17+(12.1g.1h?1:0)+"q",I:5.16+"q"}));c.F=5.1j*d+5.1j;5.M.1c(c)}.y(5));5.Y(5.B,5.p);5.r.2m(5.2h);5.1J={};$w("p D m 1m t").H(i(b){5.r.x(5.1J[b]=l s("3p",{3q:"2i",3r:5.L+"1t"+b,2n:""+(b=="1m"?!!5[b]:5[b])}))}.y(5));h(5.9.11){5.1l.x(5.11=l s("v",{W:"11"}));5.1K()}h(!5.S){5.28()}},2o:i(a){h(5.m&&5.9.1B){5.p=(5.t*5.p-5.m)/(5.t-1||1)}j b=5.m?5.t:5.t++;5.p=(5.p==0)?a:(5.p*(5.m?b-1:b)+a)/(5.m?b:b+1)},1K:i(){5.11.2m(l 3s(5.9.11).3t({D:5.9.D,t:5.t,p:(5.p*10).3u()/10}))},18:i(b){j a=(5.T-(b/5.1j)*5.17);o 1u(5.9.2l?a.3v():-1*a.3w())},Y:i(a,b){h(5.9.u&&5["1L"+a.E]){Z.3x.3y(a.E).3z(5["1L"+a.E])}j d=5.18(b);h(1w[2]){j c=1u(a.3A("z")),f=5.18(b);h(c==f){o}j e=((5.2e-(c-f).1M()).1M()/5.2d.1M()).3B(2);5["1L"+a.E]=l Z.1H(a,{3C:{z:d+"q"},3D:{U:"3E",3F:1,E:a.E},2p:(5.9.2p*e)})}1r{a.k({z:d+"q"})}},3G:i(c){j b=c.r();h(!b.F){o}5.2o(b.F);h(5.9.11){5.1K()}h(5.9.2j){5.Y(5.O,5.p,(1b.Z&&Z.1H))}h(!5.m){5.19.V("m")}5.1m=!!5.m;5.m=b.F;h(!5.9.1B){5.2c();5.19.V("S");5.2q(c)}j a={};$w("p L D m 1m t").H(i(d){h(d!="L"){5.1J[d].2n=5[d]}a[d]=5[d]}.y(5));5.9.3H(5.r,a);5.r.1N("13:m",a)},2q:i(a){5.Y(5.B,5.p,(5.9.u&&5.9.u.K));5.1O=1X;h(5.9.1n){5.1l.3I(5.9.1n)}h(5.9.1P){5.B.k({X:5.9.1I})}5.r.1N("13:z")},3J:i(b){j a=b.r();h(!a.F){o}5.Y(5.B,a.F,(5.9.u&&5.9.u.R));h(!5.1O&&5.9.1n){5.1l.V(5.9.1n)}5.1O=21;h(5.9.1P){5.B.k({X:5.9.1P})}5.r.1N("13:3K",{Q:5.9.L,D:5.9.D,F:a.F,t:5.t})}});',
    62,
    233,
    '|||||this||||options||||||||if|function|var|setStyle|new|rated|Starboxes|return|average|px|element|Element|total|effect|div||insert|bind|left||colorbar|src|max|scope|rating|buildQueue|each|height|width|mouseout|identity|buttons|absolute|ghost|Object|identify|mouseover|locked|boxWidth|position|addClassName|className|background|setBarPosition|Effect||indicator|Prototype|starbox|starbar|starWidth|starHeight|buttonWidth|getBarPosition|status|extend|window|push|processBuildQueue|imageInfo|click|Browser|IE|on|buttonRating|top|hover|rerated|hoverClass|require|overlayImages|imageSource|else|convertVersionString|_|parseInt|times|arguments|imagecache|getCachedImage|buildBatch|useEvent|rerate|_cached|starSrc|stars|base|wrapper|Morph|color|inputs|updateIndicator|activeEffect_|abs|fire|hovered|hoverColor|load|counter|find|replace|REQUIRED_|Starbox|fixIE|false|id|queueBuild|batchLoading|true|cacheBuildBatch|overlay|fullsrc|build|capture|observe|enable|capitalize|invoke|cursor|disable|zeroPosition|maxPosition|relative|star|container|hidden|ghosting|ghostColor|inverse|update|value|updateAverage|duration|onMouseout|REQUIRED_Prototype|REQUIRED_Scriptaculous|https|test|js|script|match|typeof|undefined|Version|throw|requires|length|indexOf|RegExp|MSIE|exec|parseFloat|navigator|userAgent|readAttribute|callee|do|starbox_|while|writeAttribute|cacheImage|without|Image|onload|mouseleave|wrap|isElement|relatedTarget|select|member|document|dom|loaded|Class|create|initialize|clone|Scriptaculous|bindAsEventListener|pointer|stopObserving|auto|overflow|url|no|repeat|none|filter|progid|DXImageTransform|Microsoft|AlphaImageLoader|sizingMethod|scale|input|type|name|Template|evaluate|round|ceil|floor|Queues|get|remove|getStyle|toFixed|style|queue|end|limit|onClick|onRate|removeClassName|onMouseover|changed'.split(
      '|'
    ),
    0,
    {}
  )
);

/* Start of custom code: */

var StarRating = Class.create({
  initialize: function(dom_id, rating, options) {
    this.dom_id = dom_id;
    this.rating = rating;
    this.options = options;

    this.renderStarbox();

    if (options.locked != true) {
      this.addObservers();
    }
  },

  renderStarbox: function() {
    var options2 = Object.clone(this.options);

    if (options2.indicator === true) {
      options2.indicator = this.defaultLabel();
    }

    if (options2.locked !== true) {
      options2.locked = !this.loggedIn();
    }

    this.starbox = new Starbox(this.dom_id, this.rating, options2);
  },

  addObservers: function() {
    if (this.loggedIn()) {
      // This event triggers when you click to rate.
      $(this.dom_id).observe(
        'starbox:rated',
        this.saveRating.bindAsEventListener(this)
      );
      // This event triggers when hovering stars.
      $(this.dom_id).observe(
        'starbox:changed',
        this.setHoverLabel.bindAsEventListener(this)
      );
      // This event triggers when leaving the starbox.
      $(this.dom_id).observe(
        'starbox:left',
        this.setDefaultLabel.bindAsEventListener(this)
      );
    } else {
      // This event triggers when hovering over the ratings div.
      $(this.dom_id).observe(
        'mouseover',
        this.setLoginLabel.bindAsEventListener(this)
      );
    }
  },

  loggedIn: function() {
    return Member.first_name() !== null;
  },

  setLoginLabel: function(event) {
    this.updateLabel(event, this.loginLabel());
    $(this.dom_id).stopObserving('mouseover');
  },

  loginLabel: function() {
    return '<a href="/garden-club/join">Join</a> or <a href="/garden-club/login">sign in</a> to rate this.';
  },

  setHoverLabel: function(event) {
    this.updateLabel(event, 'Add your rating');
  },

  setDefaultLabel: function(event) {
    this.updateLabel(event, this.defaultLabel());
  },

  defaultLabel: function() {
    if (this.ratings() > 0) {
      return (
        'Based on ' +
        this.ratings() +
        (this.ratings() == 1 ? ' rating' : ' ratings')
      );
    } else {
      return 'Be the first to rate this!';
    }
  },

  ratings: function() {
    return parseInt(this.options.total);
  },

  updateLabel: function(event, text) {
    var indicator = event.findElement('.starbox').down('.indicator');
    indicator.update(text);
  },

  saveRating: function(event) {
    new Ajax.Request('/star_ratings', {
      parameters: event.memo,
      onComplete: function(xhr) {
        var code = xhr.responseText;
        var msg = this.processResponseCode(code);
        this.updateLabel(event, msg);
      }.bind(this)
    });
  },

  processResponseCode: function(code) {
    switch (code) {
      case '201':
        return 'Thanks!';
        break;
      case '304':
        return 'Sorry, you have already rated this page.';
        break;
      case '403':
        return 'Sorry, you are not signed in.';
        break;
      case '404':
        return 'Page not found!';
        break;
    }
  }
});
