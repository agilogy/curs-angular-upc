describe( 'recipes app recipes', function() {
  
  var recipeName;

  ddescribe( 'recipes form', function() {

    it( 'disables send button on invalid values', function () { 
      //go to recipes  
      browser().navigateTo('/#/recipes/new');
      //check title
      input('formData.title').enter('Macarrons');

      expect(element('button[ng-click="send()"]:disabled')
      	.count()).toBe(1);
    });

    it('inserts a recipe', function() {
    	browser().navigateTo('/#/recipes/new');

    	recipeName = 'Test'+new Date().getMilliseconds();

    	input('formData.title').enter(recipeName);

    	input('formData.cookingTime').enter(30);

    	input('auxIngredient').enter('pasta');
    	element('div[ng-click="auxIngredient && addIngredient()"]').click();

    	element('button[ng-click="send()"]').click();

    	expect(browser().location().path()).toBe('/recipes');

    });

    it('inserted recipe is found on list', function(){
    	expect(element('a:contains("'+recipeName+'")')
    		.count()).toBe(1);
    }); 

  });


});