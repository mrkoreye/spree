if (Meteor.isClient) {
	Template.main.events({
		"tap .main, click .hamburger": function(e) {
			e.stopPropagation();
			$('.main').toggleClass('menu-open');
			$('.menu').toggleClass('menu-open');
		},
		"tap .main, click .main": function() {
			var $main = $('.main');
			if ($main.hasClass('menu-open')) {
				$main.toggleClass('menu-open');
				$('.menu').toggleClass('menu-open');
			}
		}
	})
}


