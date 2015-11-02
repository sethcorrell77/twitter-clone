$(document).ready(function() {


	$('.tweet-compose').on('click', function() {
		$('#tweet-controls').show();
		$(this).css('height', '5em');
	});

	$('#tweet-content .tweet-compose').keyup(function() {
		var counter = 140 - $(this).val().length
		$('#char-count').text(counter);
		if (counter < 11 && counter > 0) { 
			$('#char-count').css('color', 'red');	
		}
		else if (counter < 0) {
			$('char-count').css('color', 'red');
			$('#tweet-controls #tweet-submit').prop('disabled', true)
		}
		else{
			$('#tweet-controls #tweet-submit').prop('disabled', false)
			$('#char-count').css('color', '#999');
		}
	});

	$('#tweet-submit').on('click', function() {
		$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">My BFF</strong><span class="username">@mybff</span><p class="tweet-text">' + $('.tweet-compose').val() + '<div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>');	
	});

  $("#stream").on({
    mouseenter: function () {
      var $Stats = $(this).find('div.stats');
      var $Favorites = $(this).find('div.favorites');
      var $Reply = $(this).find('div.reply');
      $Stats.show();
      $Favorites.show();
      $Reply.show();
    },

    mouseleave: function () {
      var $Stats = $(this).find('div.stats');
      var $Favorites = $(this).find('div.favorites');
      var $Reply = $(this).find('div.reply');
      $Stats.hide();
      $Favorites.hide();
      $Reply.hide();
    }
  }, ".tweet");

});











