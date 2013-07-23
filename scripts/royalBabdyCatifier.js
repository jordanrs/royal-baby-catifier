var catReplace = function(i, el){
  $(el).html('<img src="http://thecatapi.com/api/images/get?format=src&type=jpg&size=small"/>')
};

var royalBabyCatifier = function(){
  $(['a:contains("royal baby")', 
      'p:contains("royal baby")', 
      'p:contains("Royal baby")', 
      'a:contains("Royal baby")', 
      'a:contains("Duchess")', 
      'p:contains("Duchess")', 
      'p:contains("Duke")', 
      'a:contains("Duke")', 
      'a:contains("William")',
      'p:contains("William")',
      'a:contains("Kate")', 
      'p:contains("Kate")', 
      'a:contains("royal birth")' ,
      'a:contains("heir")' ,
      'p:contains("heir")' ,
      'p:contains("Royal birth")'].join(",")).each(catReplace)
}()