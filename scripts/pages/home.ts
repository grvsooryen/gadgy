# Remove additional items on HOME PAGE
#------------------------------------------

remove("//div[@id='LayoutColumn3']")
remove("//div[@class='QuickViewBtn']")

# Add Uranium Carousel
#-----------------------

$("//div[@id='HomeFeaturedProducts'] | //div[@id='HomeNewProducts']")
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