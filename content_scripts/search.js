var searchBoxVisible = false,
  $searchBox, $input;

function onSearchKeypress(e){
  if (e.which === 13){ // the ENTER key
    var REPO_REGEX = new RegExp("github\\.com/([^/]+/[^/]+)(/.*)?$"),
      repo = window.location.href.match(REPO_REGEX)[1],
      query = $(this).val();

    if ($('body').hasClass('vis-private') || $('.repo-search').length > 0){
      // private search (which allows direct search within repo)
      window.location = 'http://github.com/' + repo + '/search?q=' + encodeURIComponent(query);
    } else {
      // public search
      window.location = 'https://github.com/search?type=Code&q=' + encodeURIComponent(query) + '+repo%3A' + encodeURIComponent(repo);
    }
  }
}