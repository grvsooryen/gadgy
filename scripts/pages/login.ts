# Remove additional items on LOGIN/ACCOUNT PAGE
#------------------------------------------

remove("//div[@id='LoginBreadcrumb']")
remove("//div[@id='CreateAccountBreadcrumb']")
remove("//div[@id='ForgotPasswordBreadcrumb']")
remove("//div[@id='SideNewProducts']")
remove("//div[@id='SideProductRecentlyViewed']")

# Convert labels to placeholders
#---------------------------------

$(".//dt")
{
	$ph = fetch("./span[@class='FormFieldLabel']/text()")
	$ph = $ph + fetch("./text() ")

	$ph
    {
		replace(/\:/, '')
	}
    
	$("./following-sibling::dd")
    {
		$("./input[@type='text'] | ./input[@type='password']")
		{			
			attribute("placeholder", $ph)
			attribute("style","margin-bottom:15px;")
		}
	}	
}

$("//dl | //dd | //p[@class='Submit']")
{
	unwrap()	
}

remove("//dt")

# Remove Unneccessary messages
#--------------------------------

$$(".SuccessMessage")
{
	text()
	{
		replace(/You need to sign in to access this page./, "")
	}
}

# Modify Buttons
#-----------------

$$("#LoginButton")
{
	add_class("ProductActionAdd")
	add_class("FullButtonWidth")
}

$$("#LoginForm")
{
	$("./div[@class='BlockContent']")
	{
		insert("div", "OR", class: "or", style: "text-align:center; padding:15px")
		move_here("//div[@class='CreateAccount']")
	}	
}

$("//div[@class='CreateAccount']")
{
	$link = fetch("./div//a")
    
	text()
    {
		clear()
	}
    
	$link
	{
		replace(/Click here to/, "")
		replace(/t\./, "t")
	}
    
	inner()
    {
		set($link)
	}
    
	$("./a")
	{
		wrap("div")
        {
			add_class("ProductActionAdd")
			add_class("FullButtonWidth")
			attribute("style","text-transform: capitalize;")
		}
	}
}