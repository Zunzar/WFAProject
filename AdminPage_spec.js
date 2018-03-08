describe('Navigate to Admin Page', function() {
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

	//click on button on the reports home page
	 var admin = element(by.xpath("//span[. = 'Admin']")).click();
		browser.sleep(10000);
		
	});


	//Navigating to Manage Users page
	it("Click on User Management -> Manage Users", function() {

		var userManage = element(by.xpath("//span[. = 'User Management']")).click();
		browser.sleep(5000);
		var manageUsers = element(by.xpath("//span[. = 'Manage Users']")).click();
		browser.sleep(1000);

		element(by.xpath("//h3[. = 'Manage Users']")).getText().then(function(text) {
					console.log("Title of this page is " + text);
					expect(text).toEqual("Manage Users");
					browser.sleep(1000);
				});
	});

	//Verify the UI on the Manage Users page 
	it("Verify the UI on the Manage Users Page", function() {

		var firstColumn = element(by.xpath("//div[span[text()='Name']]")).getText().then(function(firstColumn) {
							console.log("The 1st column name displayed is " + firstColumn);
							expect(firstColumn).toEqual("Name");
							browser.sleep(10000)
						});

		var secondColumn = element(by.xpath("//span[. = 'Email']")).getText().then(function(email) {
					console.log("The 2nd column name displayed is " + email);
					expect(email).toEqual("Email");
					browser.sleep(10000)
				});

		var thirdColumn = element(by.xpath("//div[span[text()='Last Login']]")).getText().then(function(lastLogin) {
							console.log("The 3rd column name displayed is " + lastLogin);
							expect(lastLogin).toEqual("Last Login");
							browser.sleep(10000)
						});
		
		var fourthColumn = element(by.xpath("//div[span[text()='Active']]")).getText().then(function(Active) {
					console.log("The 4th column name displayed is " + Active);
					expect(Active).toEqual("Active");
					browser.sleep(10000)
					});
		
	});
	
		//Verify the UI on the Manage Users page 1
		it("Verify the UI on the Manage Users Permissions page - scenario 1", function() {
			
			element(by.buttonText("Add User")).click();
			browser.sleep(10000);
			
			element(by.css('.pb-2')).getText().then(function(HeaderOnPage){
				console.log("Following is the text displayed on the Manage User Permissions page");
				console.log(HeaderOnPage);
				expect(HeaderOnPage).toEqual('Select Employee');
				browser.sleep(10000);
			});
			
			element(by.css('.search-label')).getText().then(function(textBelowHeader){
				console.log(textBelowHeader);
				expect(textBelowHeader).toEqual('Select Employee');
				browser.sleep(10000);
			});
			
			//To verify the UI of the Name field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[1]//span[1]")).getText().then(function(UserName){
				console.log(UserName);
				expect(UserName).toEqual("Name");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[1]//span[2]")).getText().then(function(nameDisplayed){
				console.log(nameDisplayed);
				expect(nameDisplayed).toEqual("John Bullock");
				browser.sleep(10000);
			});
			
			//To verify the UI of the Title field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[2]//span[1]")).getText().then(function(Title){
				console.log(Title);
				expect(Title).toEqual("Title");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[2]//span[2]")).getText().then(function(titleValue){
				console.log(titleValue);
				expect(titleValue).toEqual("VP I, CFO");
				browser.sleep(10000);
			});
			
			//To verify the UI of the Company field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[3]//span[1]")).getText().then(function(Company){
				console.log(Company);
				expect(Company).toEqual("Company");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[3]//span[2]")).getText().then(function(companyValue){
				console.log(companyValue);
				expect(companyValue).toEqual("C4R");
				browser.sleep(10000);
			});
			
			//To verify the UI of the EmployeeID field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[4]//span[1]")).getText().then(function(EmployeeID){
				console.log(EmployeeID);
				expect(EmployeeID).toEqual("Employee ID");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[4]//span[2]")).getText().then(function(EmployeeIDValue){
				console.log(EmployeeIDValue);
				expect(EmployeeIDValue).toEqual("00001367513");
				browser.sleep(10000);
			});
			
			
			//To verify the UI of the Email field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[5]//span[1]")).getText().then(function(emailText){
				console.log(emailText);
				expect(emailText).toEqual("Email");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[5]//span[2]")).getText().then(function(emailId){
				console.log(emailId);
				expect(emailId).toEqual("johndavidbullockjr@gmail.com");
				browser.sleep(10000);
			});
			
			//To verify the UI of the Worksite Location field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[6]//span[1]")).getText().then(function(worksiteText){
				console.log(worksiteText);
				expect(worksiteText).toEqual("Worksite Location");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[6]//span[2]")).getText().then(function(worksiteValue){
				console.log(worksiteValue);
				expect(worksiteValue).toEqual("YETI Coolers-HQ");
				browser.sleep(10000);
			});
			
			//To verify the UI of the Department field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[7]//span[1]")).getText().then(function(departmentText){
				console.log(departmentText);
				expect(departmentText).toEqual("Department");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[7]//span[2]")).getText().then(function(departmentValue){
				console.log(departmentValue);
				expect(departmentValue).toEqual("Accounting");
				browser.sleep(10000);
			});
			
			//To verify the UI of the Manager field and its value displayed
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[8]//span[1]")).getText().then(function(managerText){
				console.log(managerText);
				expect(managerText).toEqual("Manager");
				browser.sleep(10000);
			});
			
			element(by.xpath("//wfa-employee-info-overview//div//ul//li//p[8]//span[2]")).getText().then(function(managerValue){
				console.log(managerValue);
				expect(managerValue).toEqual("Gregory Boling");
				browser.sleep(10000);
			});

			
			element(by.css('.status-heading')).getText().then(function(statusText){
				console.log(statusText);
				expect(statusText).toEqual('User Status');
			});
			
			element(by.css('.status-label')).getText().then(function(statusLabel){
				console.log(statusLabel);
				expect(statusLabel).toEqual('Active User');
			});
			
			var toggleButton = element(by.xpath("//wfa-toggle-switch//label//span"));
			toggleButton.isSelected();
			
			//To Validate the text for the 'Select Time Zone' section
			element(by.css('.pb-1.timezone-label')).getText().then(function(timeZone){
				console.log(timeZone);
				expect(timeZone).toEqual('Select Employee Time Zone');
				browser.sleep(10000);
			});
			
			/*element(by.css('.form-control textarea-selector')).getText().then(function(dropDwnTimeSelect){
				console.log(dropDwnTimeSelect);
				//expect(dropDwnTimeSelect).toEqual('Select Employee Time Zone');
				browser.sleep(10000);
			});*/
					
			element(by.css('.step-indicator')).getText().then(function(pageNumbers){
				console.log(pageNumbers);
				expect(pageNumbers).toEqual('Step 1 of 3');
			});
			
			
			//To test the UI on the 2nd page of Manage Users Permissions
			it("Verify the UI on the Manage Users Permissions page - Page 2", function() {
			
				element(by.buttonText('Next')).click();
				browser.sleep(10000);
				
				//Header UI Validation
				element(by.xpath("//wfa-user-editor-header//div//div//div[1]//strong")).getText().then(function(header2){
					console.log("The header of the Manage User Permissions Page 2 is " + header2);
					browser.sleep(10000);
				});
				
				element(by.css('.editor-header-title-company')).getText().then(function(userDescription){
					console.log(userDescription);
					expect(userDescription).toEqual('VP I, CFO in Accounting at YETI Coolers');
					browser.sleep(10000);
				});
				
				//To check the UI for Grant Work Force Analytics Admin Role
				element(by.xpath("//wfa-data-level-access-selector//div//div[1]//h5")).getText().then(function(grantWFAAdmin){
					console.log(grantWFAAdmin);
					expect(grantWFAAdmin).toEqual('Grant Workforce Analytics Admin Role');
					browser.sleep(10000);
				});
				
				element(by.xpath("//wfa-data-level-access-selector//div//div[1]//p")).getText().then(function(grantWFAAdminDesc){
					console.log(grantWFAAdminDesc);
					expect(grantWFAAdminDesc).toEqual('The Admin Role grants full access to all information and features within the application that are available to your company.');
					browser.sleep(10000);
				});
				
				//To check the UI under Grant Access to Sensitive Data
				element(by.xpath("//wfa-data-level-access-selector//div//div[2]//h5")).getText().then(function(grantAccessSensi){
					console.log(grantAccessSensi);
					expect(grantAccessSensi).toEqual('Grant Access to Sensitive Data');
					browser.sleep(10000);
				});
				
				element(by.xpath("//wfa-data-level-access-selector//div//div[2]//p")).getText().then(function(grantAccessSensiDesc){
					console.log(grantAccessSensiDesc);
					expect(grantAccessSensiDesc).toEqual('This permission allows the user to view Personally Identifiable Information (PII) on reports. This may be sensitive or non-sensitive information that identifies an individual such as name, SSN, birthdate, home address, email address and personal phone numbers.');
					browser.sleep(10000);
				});
				
				//To check the UI under Set Data Authorization Access 
				element(by.xpath("//wfa-data-authorization-access-selector//div//h5")).getText().then(function(setDataAuthAccess){
					console.log(setDataAuthAccess);
					expect(setDataAuthAccess).toEqual('Set Data Authorization Access');
					browser.sleep(10000);
				});
				
				element(by.css('.auth-acccess-body')).getText().then(function(setDataAuthDesc){
					console.log(setDataAuthDesc);
					expect(setDataAuthDesc).toEqual('This permission determines what information the user can view and access on reports.');
					browser.sleep(10000);
				});
			
				
				//To verify UI for toggle switches
			    var toggle1 = element(by.xpath("//wfa-permissions-setup//div//wfa-data-level-access-selector//div//div[1]//wfa-toggle-switch//label//span"));
			    toggle1.click();
			    expect(toggle1.isSelected());
			    browser.sleep(10000);
				
				
				//To verify the UI for the Radio Button on the page 
				
				element(by.xpath("//div[1]/wfa-form-radio/label/p")).getText().then(function(firstRadiobtnText){
					console.log(firstRadiobtnText);
					expect(firstRadiobtnText).toEqual('All Company Data');
					browser.sleep(2000);
				});
				
				element(by.xpath("//div[2]/wfa-form-radio/label/p")).getText().then(function(secondRadiobtnText){
					console.log(secondRadiobtnText);
					expect(secondRadiobtnText).toEqual('Manager Hierarchy');
					browser.sleep(2000);
				});
				
				element(by.xpath("//div[3]/wfa-form-radio/label/p")).getText().then(function(thirdRadiobtnText){
					console.log(thirdRadiobtnText);
					expect(thirdRadiobtnText).toEqual('By Location Only');
					browser.sleep(2000);
				});
				
				element(by.xpath("//div[5]//wfa-form-radio//label")).getText().then(function(fourthRadiobtnText){
					console.log(fourthRadiobtnText);
					expect(fourthRadiobtnText).toEqual('By Department Only');
					browser.sleep(2000);
				});
				
				// Radio Button Selection
					var button1 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[1]//wfa-form-radio//label//div"));
					expect(button1.isSelected());
					browser.sleep(10000);
				
				
				    var button2 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[2]//wfa-form-radio//label//div"));
					button2.click();
					expect(button2.isSelected());
					browser.sleep(1000);
				
				
				     var button3 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[3]//wfa-form-radio//label//div"));			
					 button3.click();
				     expect(button3.isSelected());
				     browser.sleep(1000);
				
				
				    var button4 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[5]//wfa-form-radio//label//div"));
				    button4.click();	
				    expect(button4.isSelected());
				    browser.sleep(1000);

				    //To Validate the pagination UI
				    element(by.css('.step-indicator')).getText().then(function(paginationUI){
				    	console.log(paginationUI);
				    	expect(paginationUI).toEqual('Step 2 of 3');	
				    	browser.sleep(1000);
				    });

			});
			
			
                  it("Verify the UI on the Manage User Permissions page  Scenario 1", function(){
		    	
                	  element(by.buttonText('Next')).click();
  					browser.sleep(1000);
  					
  					//To verify UI for toggle switches
  				    var toggle1 = element(by.xpath("//wfa-permissions-setup//div//wfa-data-level-access-selector//div//div[1]//wfa-toggle-switch//label//span"));
  				    toggle1.click();
  				    expect(toggle1.isSelected());
  				    browser.sleep(10000);
  					
  					
  					//To verify the UI for the Radio Button on the page 
  					
  					element(by.xpath("//div[1]/wfa-form-radio/label/p")).getText().then(function(firstRadiobtnText){
  						console.log(firstRadiobtnText);
  						expect(firstRadiobtnText).toEqual('All Company Data');
  						browser.sleep(2000);
  					});
  					
  					element(by.xpath("//div[2]/wfa-form-radio/label/p")).getText().then(function(secondRadiobtnText){
  						console.log(secondRadiobtnText);
  						expect(secondRadiobtnText).toEqual('Manager Hierarchy');
  						browser.sleep(2000);
  					});
  					
  					element(by.xpath("//div[3]/wfa-form-radio/label/p")).getText().then(function(thirdRadiobtnText){
  						console.log(thirdRadiobtnText);
  						expect(thirdRadiobtnText).toEqual('By Location Only');
  						browser.sleep(2000);
  					});
  					
  					element(by.xpath("//div[5]//wfa-form-radio//label")).getText().then(function(fourthRadiobtnText){
  						console.log(fourthRadiobtnText);
  						expect(fourthRadiobtnText).toEqual('By Department Only');
  						browser.sleep(2000);
  					});
  					
  					// Radio Button Selection
  						var button1 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[1]//wfa-form-radio//label//div"));
  						expect(button1.isSelected());
  						browser.sleep(10000);
  					
  					
  					    var button2 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[2]//wfa-form-radio//label//div"));
  						button2.click();
  						expect(button2.isSelected());
  						browser.sleep(1000);
  					
  					
  					     var button3 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[3]//wfa-form-radio//label//div"));			
  						 button3.click();
  					     expect(button3.isSelected());
  					     browser.sleep(1000);
  					
  					
  					    var button4 = element(by.xpath("//wfa-data-authorization-access-selector//div//div[5]//wfa-form-radio//label//div"));
  					    button4.click();	
  					    expect(button4.isSelected());
  					    browser.sleep(1000);
   
  					    //To Validate the pagination UI
  					    element(by.css('.step-indicator')).getText().then(function(paginationUI){
  					    	console.log(paginationUI);
  					    	expect(paginationUI).toEqual('Step 2 of 3');	
  					    	browser.sleep(1000);
  					    });
				
                  
				
		    });
			
			
			
			
			
			
		});
});
		
