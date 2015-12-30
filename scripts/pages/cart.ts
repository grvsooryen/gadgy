# Remove additional items on CART PAGE
#------------------------------------------

remove("//div[@id='SideNewProducts']")
remove("//div[@id='SideProductRecentlyViewed']")
remove("//div[@id='CartBreadcrumb']")
remove("//table[contains(@class, 'CartContents')]//th[3]")

# Improve the look of table by removing unit value column
#-----------------------------------------------------------

remove("//table[contains(@class, 'CartContents')]//td[contains(@class, 'CartItemIndividualPrice')]")

# Rearrange Cart Table
#-----------------------

$("//table[contains(@class, 'CartContents')]")
{
	$(".//td[contains(@class, 'ProductName')]")
	{
		attribute('colspan', '2')
	}

	$(".//th[1]")
	{
		attribute('colspan', '3')
	}
}

# Code Box Toggler
#-----------------

$("//div[@id='SideCouponCodeBox'] | //div[@id='SideGiftCertificateCodeBox']")
{
	attribute("data-ur-set", "toggler")	
	$("./h2")
	{
		name() { set("span") }
		
		wrap("div", class: "panel-heading", data-ur-toggler-component: "button")
		{
			insert("div", class: "mw_indicator")
		}
	}
	$("./div[contains(@class, 'BlockContent')]")
	{
		add_class("panel-body")
		attribute("data-ur-toggler-component", "content")	
		attribute("style", "padding: 0 8px;")	
	}
}

# Modify Buttons
#----------------

$("//div[@id='CartContent']//input[@type='image']")
{
	attribute('type', 'submit')
	attribute('value', 'Update Quantity')
	add_class("ProductActionAdd")
}

$("//div[@id='LayoutColumn3']//input[@type='image']")
{
	attribute('type', 'submit')
	attribute('value', 'GO')
	add_class("ProductActionAdd")
	attribute('style', 'margin-top: 0px; height:36px;display: inline-block;')
}

$("//input[@id='giftcertificatecode'] | //input[@id='couponcode']")
{
	attribute("class","inline_textbox")
}

