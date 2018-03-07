describe('test reports home page', function() {
	browser.ignoreSynchronization = true;
	browser.driver.manage().window().maximize();
	
	
	it ("to test the login page", function(){
		browser.get("https://wfa-qe2.hrpassport.com/portal/");
		
		var loginPageTitle = browser.getTitle().then(function(promisedResult)
		{
			console.log("Title of login page is " + promisedResult);
			return promisedResult;			
		});
		
		element(by.cssContainingText('option', 'Employee ID')).click();
		element(by.id('IDToken1')).sendKeys("00001359223");
		element(by.id('IDToken2')).sendKeys("1234");
		element(by.id('submitbutton')).click();
		browser.sleep(30000);
		
		
	});
	
	it('Verify the UI on the Reports Home Page', function(){
		
		var HomePageTitle = browser.getTitle().then(function(titleOfHomePage)
				{
					console.log("Title of Home Page is " + titleOfHomePage);
					return titleOfHomePage;
				});
		
		element(by.xpath("//span[h3[text()='Welcome to Workforce Analytics']]")).getText().then(function(welcomeMessage){
			console.log("The welcome message on the reports home page is " + welcomeMessage);
			expect(welcomeMessage).toEqual('Welcome to Workforce Analytics');
			browser.sleep(10000);
		});
		
		element(by.css('.home-desc')).getText().then(function(motto){
			console.log("The motto message displayed is " + motto);
			expect(motto).toEqual('Simple. Powerful. Flexible.');
			browser.sleep(10000);
		});
		
		element(by.xpath("//div[h5[text()='Human Resources']]")).getText().then(function(HRTab){
			console.log("The Header of the 1st top tab is displayed as " + HRTab);
			expect(HRTab).toEqual('Human Resources');
			browser.sleep(10000);
		});
		
		
		element(by.xpath("//div[h5[text()=' Accounting']]")).getText().then(function(AccountTab){
			console.log("The Header of the 2nd bottom tab is displayed as " + AccountTab);
			expect(AccountTab).toEqual('Accounting');
			browser.sleep(10000);
		});
		
		element(by.xpath("//div[h5[text()='My Favorites']]")).getText().then(function(FavoritesTab){
			console.log("The Header of the tab displayed on the top right is " + FavoritesTab);
			expect(FavoritesTab).toEqual('My Favorites');
			browser.sleep(10000);
		});
		
		element(by.xpath("//div[h5[text()='Custom Reports']]")).getText().then(function(cusRepTab){
			console.log("The Header of the tab displayed on the bottom right is " + cusRepTab);
			expect(cusRepTab).toEqual('Custom Reports');
			browser.sleep(30000);
		});
		
	});
		
		/*Human Resources Tab UI Validation*/
		
		it("Validate the UI under the Human Resources Tab", function(){
		
		element(by.id('ngb-tab-6')).getText().then(function(h1header){
		console.log("The header of the 1st column under HR tab is displayed as " + h1header);
		expect(h1header).toEqual('Employees');
		browser.sleep(1000);
		});
		
		
		element(by.id('ngb-tab-7')).click();
		browser.sleep(20000);
		
	        element(by.id('ngb-tab-7')).getText().then(function(h2header){
			console.log("The header of the 2nd column under HR tab is displayed as " + h2header);
			expect(h2header).toEqual('Hiring & Attrition');
			browser.sleep(10000);
	});
	        
	     element(by.xpath("//span[. = 'Since January of this year']")).getText().then(function(text1){
	        	console.log("Following is the information displayed in the left tab of Hiring & Attrition");
	        	console.log(text1);
	        	browser.sleep(10000);
	        });
	        
	        
	   element(by.css('.emp-data')).getText().then(function(text2){
				console.log(text2);	
				browser.sleep(10000);
	        });
		
	   element(by.css('.text-right-left')).getText().then(function(text3){
			console.log(text3);	
			browser.sleep(10000);
       });
	        
	   element(by.xpath("//span[. = 'Since January of this year']")).getText().then(function(textright1){
       	console.log("Following is the information displayed in the right tab of Hiring & Attrition");
       	console.log(textright1);
       	browser.sleep(1000);
       });
	   
	   
	   element(by.xpath("//p[. = 'No employees left the company']")).getText().then(function(textright2){
	        console.log(textright2);
	       	browser.sleep(5000);
	       });
	   
	   
	   //View Invoice Report link
	   element(by.partialLinkText('View Invoice Report')).click();
	   browser.sleep(2000);
	   
	   element(by.css('title')).getText().then(function(Invoicetitle){
		   console.log('The title of the page navigated to after clicking the View Invoice Report link is ' + Invoicetitle);
		   browser.sleep(5000);
	   });
	   
	  
	   	   //Leave tab UI		
		   element(by.id('ngb-tab-8')).click();
		      browser.sleep(10000);
		      
		      element(by.id('ngb-tab-8')).getText().then(function(h3header){
					console.log("The header of the 3rd column under HR tab is displayed as " + h3header);
					expect(h3header).toEqual('Leave');
					browser.sleep(10000);
		      });
		      
		      element(by.xpath("//*[@id='ngb-tab-8-panel']/div")).getText().then(function(Leave1header){
					console.log("Following is the data displayed in Leave tab");
					console.log(Leave1header);
					expect(Leave1header).toEqual('Coming Soon!');
					browser.sleep(10000);
		      });
		      
		      });
			
		
		//Accounting tab UI validation
		it("Validate the UI under the Accounting Tab", function(){
		
			//Payroll
			element(by.id('ngb-tab-9')).getText().then(function(Aheader1){
				console.log("The header of the 1st column under Accounting tab is displayed as " + Aheader1);
				expect(Aheader1).toEqual('Payroll');
				browser.sleep(10000);
			});
		
			
			//Cost Per Employee
			element(by.id('ngb-tab-10')).click();
		      browser.sleep(1000);
			
		      element(by.id('ngb-tab-10')).getText().then(function(Aheader2){
					console.log("The header of the 2nd column under Accounting tab is displayed as " + Aheader2);
					expect(Aheader2).toEqual('Cost Per Employee');
					browser.sleep(1000);
				});
				
		      //Cost Breakdown
		      element(by.id('ngb-tab-11')).click();
		      browser.sleep(1000);
			
		      element(by.id('ngb-tab-11')).getText().then(function(Aheader3){
					console.log("The header of the 3rd column under Accounting tab is displayed as " + Aheader3);
					expect(Aheader3).toEqual('Cost Breakdown');
					browser.sleep(1000);
				});
		      
		      
		      
		     /* //Top Nav UI 
		      element(by.xpath("//span[. = 'Search by report name']")).getText().then(function(searchText){
		    	 console.log("The text displayed in the search box is " + searchText);
		    	 browser.sleep(10000);
		      });*/
		      
		      
		      //Validate the company Logo displayed on the reports home page
		      element(by.xpath("//div//wfa-company-logo//div//div//label")).getText().then(function(companyLogo){
					console.log(companyLogo);
					expect(companyLogo).toEqual('YETI Coolers');
					browser.sleep(10000);
		      });
		      
		      
		      
		      //Validating the userName Icon & dropdown options under it  on the reports Home page
		      element(by.css('.hand.alt-text')).click();
			   browser.sleep(10000);

			   element(by.css('.list-group-item.noHover')).getText().then(function(userName){
				  console.log(userName);
				  expect(userName).toEqual('Gregory Boling');
				  });

			   element(by.xpath("//li[a[text() = 'Return To TriNet Platform']]")).getText().then(function(returnTriLink){
			   console.log(returnTriLink);
			   expect(returnTriLink).toEqual('Return To TriNet Platform');
			   });
		      
		      
			
		});
		
		});
	  	


	

	
