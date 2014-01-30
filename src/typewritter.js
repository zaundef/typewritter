(function($) {
	$.fn.typewritter = function(options) {

		var self = this;

		var currentElement;
		var currentText = '';

		/* -------------------- */
		// options default =>
		var typeSpeed = 150;
		var wordDelay = 0;
		// <= options default
		/* -------------------- */

		self.initialize = function() {
			currentElement = self;
			currentText = self.text();
			currentElement.text('');

			$.each(currentText.split(''), function(i, letter) {
				setTimeout(function() {
					currentElement.text(currentElement.text() + letter);
				}, i*typeSpeed);
			});

			return self;
		};

		return self.initialize();
	}
})(jQuery);