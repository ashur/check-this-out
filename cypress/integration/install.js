let visit = () =>
{
	return cy.visit( "http://localhost:8080/install", {
		onBeforeLoad: contentWindow =>
		{
			contentWindow.sessionStorage.clear()
		},
	});
}

describe( "Libby URL component", () =>
{
	it( "Display error message if URL is invalid", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.type( "invalid-url" );

		cy.get( "#userLibraryUrl-status" )
			.should( "have.text", "That doesn’t look like a valid URL" );
	});

	it( "Display error message if URL uses incorrect hostname", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://example.com" );

		cy.get( "#userLibraryUrl-status" )
			.should( "have.text", "That doesn’t look like a Libby URL" );
	});

	it( "Clear message if user modifies URL", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://e" );

		cy.get( "#userLibraryUrl-status" )
			.should( "have.text", "That doesn’t look like a Libby URL" );

		cy.get( "#userLibraryUrl" )
			.type( '{backspace}' );

		cy.get( "#userLibraryUrl-status" )
			.should( "not.be.visible" )
	});

	it( "Display error if URL uses incorrect path", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://libbyapp.com/foo" );

		cy.get( "#userLibraryUrl-status" )
			.should( "have.text", "That doesn’t look like the right Libby URL" );
	});

	it( "Display success if URL is valid", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://libbyapp.com/library/denver" );

		cy.get( "#userLibraryUrl-status" )
			.should( "not.be.visible" )
	});
});

describe( "Bookmarklet component", () =>
{
	it( "Should not be visible by default", () =>
	{
		visit();

		cy.get( "#bookmarklet" )
			.should( "not.be.visible" )
	});

	it( "Should not be visible if library URL is invalid", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://libbyapp.com/foo" );

		cy.get( "#bookmarklet" )
			.should( "not.be.visible" )
	});

	it( "Should be visible if library URL is valid", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://libbyapp.com/library/denver" );

		cy.get( "#bookmarklet" )
			.should( "be.visible" )
	});
});

describe( "Usage instructions", () =>
{
	it( "Should not be visible by default", () =>
	{
		visit();

		cy.get( "#usageInstructions" )
			.should( "not.be.visible" )
	});

	it( "Should not be visible if library URL is invalid", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://libbyapp.com/foo" );

		cy.get( "#usageInstructions" )
			.should( "not.be.visible" )
	});

	it( "Should be visible if library URL is valid", () =>
	{
		visit();

		cy.get( "#userLibraryUrl" )
			.click()
			.clear()
			.type( "https://libbyapp.com/library/denver" );

		cy.get( "#usageInstructions" )
			.should( "be.visible" )
	});
});
