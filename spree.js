if (Meteor.isClient) {
	Meteor.startup(function() {
		$('head').append("<script src='move.js'></script>");
		
		animateBlip = function() {
			var moveBack = move('.hamburger-back')
				.scale(1)
				.set('background-color', '#FFD300')
				.duration(0)
				.end();
				
			move('.hamburger-back')
				.set('opacity', 1)
				.duration(0)
				.end();
				
			move('.hamburger-back')
				.scale(4)
				.set('opacity', 0)
				.set('background-color', 'black')
				.duration(2500)
				.then(moveBack)
				.end();
		}
		
		animateBlip();
		Meteor.setInterval(animateBlip, 3000);
	});
	
	Template.main.events({
		"tap .hamburgers, click .hamburgers": function(e) {
			e.stopPropagation();
			
			var animateMenu = function() {
				var delay = 0;
				var items = $('.menu span');
				$('.main').hide();
				$('.menu').show();
					
				_.each(items, function(item) {
					move(item)
						.scale(0)
						.duration(0)
						.end();
					
					move(item)
						.set('opacity', 1)
						.scale(1)
						.duration(1000)
						.delay(delay)
						.ease('ease-out-back')
						.end();
					
					delay += 50;
				})
				
				move('.hamburger-menu')
					.set('opacity', 0.4)
					.duration(5000)
					.end();
			}
			
			move('.main')
				.scale(3)
				.set('opacity', 0)
				.duration(500)
				.then(animateMenu)
				.end();
		}
	});
	
	Template.menu.events({
		"tap .hamburger-menu, click .hamburger-menu": function() {
			var removeStyles = function() {
				var elementsToUnStyle = [
					$('.main'), 
					$('.menu'),
					$('.hamburger-menu'),
					$('span')
				];
				
				_.each(elementsToUnStyle, function(item) {
					item.attr('style', '');
				});
			}

			var flyIn = function() {
				move('.main')
					.ease('cubic-bezier(0.175, 0.885, 0.18, 1.1)')
					.scale(1)
					.set('opacity', 1)
					.duration(500)
					.then(removeStyles)
					.end()
			}
			
			var hideMenu = function() {
				$('.menu').hide()
			}
			var startMain = function() {
				$('.main').show({
					duration: 0,
					complete: flyIn
				});
			}
			
			move('.menu')
				.scale(0)
				.set('opacity', 0)
				.duration(300)
				.then(hideMenu)
				.then(startMain)
				.end();
		}
	});
}


