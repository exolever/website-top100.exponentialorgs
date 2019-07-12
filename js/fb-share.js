window.fbAsyncInit = function() {
  FB.init({
    appId: '1565370270410687',
    xfbml: true,
    version: 'v2.1'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function openFbPopUp(name, link, picture, caption, description) {
  FB.ui({
      method: 'feed',
      name: name,
      link: link,
      picture: picture,
      caption: 'ExO Leaderboard',
      description: description
    },
    function(response) {
      if (response && response.post_id) {
        //alert('Post was published.');
      } else {
        //alert('Post was not published.');
      }
    }
  );
}
