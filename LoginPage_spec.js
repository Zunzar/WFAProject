describe('test login page', function() {
	browser.ignoreSynchronization=true;
	
	
	it ("to test the login page", function(){
		browser.get("https://wfa-qe2.hrpassport.com/portal/");
		
		var loginPageTitle = browser.getTitle().then(function(promisedResult)
		{
			console.log("Title of login page is " + promisedResult);
			return promisedResult;			
		})
		
		element(by.cssContainingText('option', 'Employee ID')).click();
		element(by.id('IDToken1')).sendKeys("00001359223");
		element(by.id('IDToken2')).sendKeys("1234");
		element(by.id('submitbutton')).click();
		browser.sleep(20000);
		
		var HomePageTitle = browser.getTitle().then(function(titleOfHomePage)
				{
					console.log("Title of Home Page is " + titleOfHomePage);
					return titleOfHomePage;
				})
		//expect(title).toEqual('WFA - Portal - Workforce Analytics');
		
		
	});
	
});