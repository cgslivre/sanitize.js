(function(root, factory) {
	
	if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.Sanitize = factory();
    }	

    // Strings Prototype
	String.prototype.sanitize = function(gutter) {
		return Sanitize(this, gutter);
	};

}(this, function() {

	var Sanitize = function(str, gutter) {

		var gutter = gutter || '-',
			ascii = {
				'ae'  : /æ|ǽ/gi,
				'oe'  : /œ/gi,
				'A'   : /À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ|А/gi,
				'a'   : /à|á|â|ã|ä|å|ǻ|ā|ă|ą|ǎ|ª|а/gi,
				'B'   : /Б/gi,
				'b'   : /б/gi,
				'C'   : /Ç|Ć|Ĉ|Ċ|Č|Ц/gi,
				'c'   : /ç|ć|ĉ|ċ|č|ц/gi,
				'Dj'  : /Ð|Ď|Đ|Д/gi,
				'dj'  : /ð|ď|đ|д/gi,
				'E'   : /È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě|Е|Ё|Э/gi,
				'e'   : /è|é|ê|ë|ē|ĕ|ė|ę|ě|е|ё|э/gi,
				'F'   : /Ф/gi,
				'f'   : /ƒ|ф/gi,
				'G'   : /Ĝ|Ğ|Ġ|Ģ|Г/gi,
				'g'   : /ĝ|ğ|ġ|ģ|г/gi,
				'H'   : /Ĥ|Ħ|Х/gi,
				'h'   : /ĥ|ħ|х/gi,
				'I'   : /Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ|И/gi,
				'i'   : /ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı|и/gi,
				'J'   : /Ĵ|Й/gi,
				'j'   : /ĵ|й/gi,
				'K'   : /Ķ|К/gi,
				'k'   : /ķ|к/gi,
				'L'   : /Ĺ|Ļ|Ľ|Ŀ|Ł|Л/gi,
				'l'   : /ĺ|ļ|ľ|ŀ|ł|л/gi,
				'M'   : /М/gi,
				'm'   : /м/gi,
				'N'   : /Ñ|Ń|Ņ|Ň|Н/gi,
				'n'   : /ñ|ń|ņ|ň|ŉ|н/gi,
				'O'   : /Ö|Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ|О/gi,
				'o'   : /ö|ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º|о/gi,
				'P'   : /П/gi,
				'p'   : /п/gi,
				'R'   : /Ŕ|Ŗ|Ř|Р/gi,
				'r'   : /ŕ|ŗ|ř|р/gi,
				'S'   : /Ś|Ŝ|Ş|Ș|Š|С/gi,
				's'   : /ś|ŝ|ş|ș|š|ſ|с/gi,
				'T'   : /Ţ|Ț|Ť|Ŧ|Т/gi,
				't'   : /ţ|ț|ť|ŧ|т/gi,
				'U'   : /Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ü|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ|У/gi,
				'u'   : /ù|ú|û|ũ|ū|ŭ|ů|ü|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ|у/gi,
				'V'   : /В/gi,
				'v'   : /в/gi,
				'Y'   : /Ý|Ÿ|Ŷ|Ы/gi,
				'y'   : /ý|ÿ|ŷ|ы/gi,
				'W'   : /Ŵ/gi,
				'w'   : /ŵ/gi,
				'Z'   : /Ź|Ż|Ž|З/gi,
				'z'   : /ź|ż|ž|з/gi,
				'AE'  : /Æ|Ǽ/gi,
				'ss'  : /ßg/gi,
				'IJ'  : /Ĳ/gi,
				'ij'  : /ĳ/gi,
				'OE'  : /Œ/gi,
				'Ch'  : /Ч/gi,
				'ch'  : /ч/gi,
				'Ju'  : /Ю/gi,
				'ju'  : /ю/gi,
				'Ja'  : /Я/gi,
				'ja'  : /я/gi,
				'Sh'  : /Ш/gi,
				'sh'  : /ш/gi,
				'Shch': /Щ/gi,
				'shch': /щ/gi,
				'Zh'  : /Ж/gi,
				'zh'  : /ж/gi,
			};

		for(var i in ascii) {
			var f = ascii[i],
				r = i;

			str = str.replace(f, r);
		}

		str = str.replace(/\s+/gi, gutter);

		str = str.replace(new RegExp('[^a-zA-Z0-9-_\.'+gutter+']', 'gi'), '');

		return str.toLowerCase();
	}

	return Sanitize;

}));
