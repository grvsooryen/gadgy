# Remove additional items on SEARCH PAGE
#------------------------------------------

remove("//div[@class='ProductDescription']")
remove("//div[contains(@class, 'ProductQty')]")
remove("//div[@class='ProductQty']")

#Organise Search Tabs
#---------------------

$$('#SearchProduct_Container')
{
	add_class("tabcontent")
}

$$('#SearchContent_Container')
{
	add_class("tabcontent")
}

$$(".ProductDetails")
{	
	$(".//span")
	{
		name('div')
	}	
}

# Rearrange Advanced Search Option
#-----------------------------------

$$("#SearchPageHeader")
{
	$("./h2")
	{
		insert_after("div", id: 'asearch')
		{
			move_here("../div[contains(@class, 'ToggleSearchFormLink')]")
			move_here("../div[@class = 'BlockContent']")
		}		
	}	
}

$$(".AdvancedSearch")
{
	$(".//h3")
	{
		name("span")
		add_class('h3span')
		
	}
    
	$$(".Submit")
	{		
		remove("../br[@class='Clear']")
	}
}