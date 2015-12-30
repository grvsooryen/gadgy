# Remove additional items on PRODUCT PAGE
#------------------------------------------

remove("//div[@id='SideNewProducts']")
remove("//div[@id='fancy_frame']")
remove("//div[@id='ProductByCategory']")
remove("//div[@id='SimilarProductsByCustomerViews']")
remove("//div[@id='SideProductAddToWishList']")
remove("//div[@id='SideProductRecentlyViewed']")

# Remove non essential Javascripts
#----------------------------------

$("//script")
{
    $src = fetch("@src")    
    
    match($src)
    {
    	with(/jquery.jqzoom-core.js/)
        {
        	log($src)
            remove("//script[@src='"+$src+"']")
        }
        
        with(/imodal.js/)
        {
        	log($src)
            remove("//script[@src='"+$src+"']")
        }        
    }
}

# Button Modification
#-----------------------------------

$$(".BulkDiscount")
{
	$("./input[@type='image']")
	{
		attribute('type', 'submit')
		attribute('value', 'Add to Cart')
	}
}

$$(".ProductAddToCart")
{
	move_here(".//div[@class='BulkDiscount']")
    {
		$("./input")
		{
			attribute("onclick", "alert('Added to Cart'); UpdateCart();")
		}
	}
}

$$("#ProductReviews a.FloatRight")
{
    inner()
    {
        set("Write a Review")    
    }
}

# Related Products Carousel
#---------------------------

$$("#SideProductRelated")
{
	$("h2")
	{
		remove("./span")
	}
    
	$("./div")
	{
		attribute("data-ur-set", "carousel")
		attribute("data-ur-autoscroll", "enabled")
		attribute("data-ur-infinite", "disabled")
		
        $("./ul")
		{
			name("div")
			attribute("data-ur-carousel-component", "scroll_container")
			
            $("./li")
			{
				name("div")
				attribute("data-ur-carousel-component", "item")
			}
			insert_after("div", data-ur-carousel-component: "dots")
		}
	}
}