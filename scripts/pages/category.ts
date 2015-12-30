# Remove additional items on CATEGORY PAGE
#------------------------------------------

remove("//div[@id='CategoryBreadcrumb']")
remove("//div[@id='SideCategoryTopSellers']")
remove("//div[@id='SimilarProductsByCustomerViews']")
remove("//div[@id='SidePopularProducts']")
remove("//div[@id='SideProductAddToWishList']")
remove("//div[@id='SideProductRelated']")
remove("//div[@id='SideCategoryNewProducts']")
remove("//div[@id='SideProductRecentlyViewed']")

# Add Uranium Togglers
#------------------------

$("//div[@id='SideCategoryShopByPrice'][not(contains(@style,'none'))]")
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
	}
	$(".//li/a"){
		attribute('style', "width:100%")
		insert("span",class: "mw_arrow")
	}
}

$$(".SubCategoryList")
{
	attribute("data-ur-set", "toggler")
	attribute("style", "margin-bottom:15px")
	$("./ul")
	{
		insert_before("div", "SubCategories", class: "panel-heading")
		{
			attribute("data-ur-toggler-component", "button")
			insert("div", class: "mw_indicator")
		}
		wrap("div",class: "panel-body")
		{
			attribute("data-ur-toggler-component", "content")
		}
		$("./li/a")
		{
			attribute('style', "width:100%")
			insert("span",class: "mw_arrow")
		}
	}
}