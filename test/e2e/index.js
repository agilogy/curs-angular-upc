describe( 'recipes app index', function() {
  

  describe( 'application is loaded correctly', function() {

    it( 'has title', function () { 
      //go to index  
      browser().navigateTo('/#');
      //check title
      expect(element('div.header > h3.text-muted','div with app title').text()).toContain('curs angular upc');
    });   

  });


});