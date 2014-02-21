if (Meteor.isClient) {
	Meteor.startup(function() {
		$('head').append("<script src='move.js'></script>");
		
		animateBlip = function() {
			var moveBack = move('.hamburger-back')
				.scale(1)
				.set('background-color', 'white')
				.duration(0)
				.end();
				
			move('.hamburger-back')
				.set('opacity', 1)
				.duration(0)
				.end();
				
			move('.hamburger-back')
				.scale(3)
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
				
				move('.menu')
					.set('opacity', 1)
					.duration(200)
					.end();
					
				_.each(items, function(item) {
					move(item)
						.scale(0)
						.duration(0)
						.end();
					
					move(item)
						.scale(1)
						.duration(300)
						.delay(delay)
						.ease('in')
						.end();
					
					delay += 50;
				})
				
				move('.hamburger-menu')
					.set('opacity', 0.8)
					.duration(3000)
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
					.scale(1)
					.set('opacity', 1)
					.duration(500)
					.then(removeStyles)
					.end()
			}
			
			$('.menu').hide();
			$('.main').show({
				duration: 0,
				complete: flyIn
			});
		}
	});
}


