if (Meteor.isClient) {
	Template.main.events({
		"click .hamburger": function(e) {
			e.stopPropagation();
			$('.main').toggleClass('menu-open');
			$('.menu').toggleClass('menu-open');
		},
		"click .main": function() {
			var $main = $('.main');
			if ($main.hasClass('menu-open')) {
				$main.toggleClass('menu-open');
				$('.menu').toggleClass('menu-open');
			}
		}
	})
}


