# Remove additional items on HEADER
#------------------------------------

remove("//div[@class='ProductCompareButton']")
remove("//div[contains(@class, 'Breadcrumb')]")
remove("//div[@class='CompareButton']")
remove("//div[contains(@class, 'NewsletterSubscription')]")
remove("//div[@id='AjaxLoading']")

# Remove non essential Javascripts
#----------------------------------

$("//script")
{
    $src = fetch("@src")    
    $content = fetch("text()")
    
    match($content)
    {
        with(/loadQuickView/)
        {
            wrap("div", id: "taggedremove")
            remove("//div[@id='taggedremove']")
        }
    }
    
    match($src)
    {
    	with(/quicksearch.js/)
        {
            remove("//script[@src='"+$src+"']")
        }
        
        with(/imodal.js/)
        {
            remove("//script[@src='"+$src+"']")
        }
        
        with(/quickview.js/)
        {        	
            remove("//script[@src='"+$src+"']")
        }              
    }
}

# Add Javascripts
#------------------

$("//head")
{
	insert('script', type:'text/javascript', src:asset('javascript/application.js'))
	insert('script', type:'text/javascript', src:asset('javascript/quicksearch.js'))
    insert("script", type: "text/javascript", src: "http://downloads.moovweb.com/uranium/1.0.176/uranium.js")
}

#Beautify Topmost Header 
#-------------------------

$$("#Header")
{
    $("./div[@id='Logo']") 
    {
        # Move top menu into #Logo container
        move_here("//div[@id='TopMenu']", "bottom") 
        {    
            # Remove unwanted top menu items from upper menu
            remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
        }
    }
    
    insert("div", class: "mw_header_bottom", data-ur-set: "toggler") 
    {
		insert("div", class: "mw_search")		
		insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
		
        move_here("//div[@id='Menu']", "bottom") 
        {
            attribute("data-ur-toggler-component", "content")
            		  
		    # Move "Category List" element on bottom of #Menu element
            move_here("//div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
            
            $$("li") 
            {
                add_class("mw_bar2")
            }
		}
	}
    
    remove("./br[@class='Clear']")
        
    $("//div[@id='TopMenu']")
    {
	   remove("./br[@class='Clear']")
    }
    
    $("//div[@id='TopMenu']/ul/li[@class='First']/a")
    {	
	   text()
	   {
		  clear()
	   }
	   insert("div", class: "sprites-user")
    }

    $("//div[@id='TopMenu']/ul/li[@class='CartLink']/a")
    {
       $count = fetch("./span/text()")
       
       $count
       {
            replace(/item\)/, "")
            replace(/items\)/, "")
            replace(/\(/, "")
            replace(/View Cart /, "")    
       }
              
	   text()
	   {
		  clear()
	   }
       
	   insert("div", class: "sprites-cart")
       {
           match($count)
           {
               with(/[0-9]/)
               {
                    insert("div", $count, class: "count")        
               }
           }
        }
    }
}

# Transform Search Box
#----------------------

$("//div[@id='SearchForm']/form//input[@type='image']") 
{
    wrap("div", class: "mw_search_btn sprites-search")
    attribute("style", "opacity:0;")
    attribute("src", "")
}

$("//div[@class='mw_search']") 
{
    # Move search form into container element
    move_here("//div[@id='SearchForm']", "bottom") 
    {
        remove("./p")
        
        $("./form") 
        {
            remove("./label")
      
            # Change search button background image
            $("./input[@type='image']") 
            {
                wrap("div", class: "mw_search_btn sprites-search")
            }
            
            $("./input[@type='text']") 
            {
                attribute("placeholder", "Search...")
            }
        }
    }
}


# Brand Toggler
#-----------------

$$("#SideShopByBrand")
{
	attribute("data-ur-set", "toggler")
    	
	$("./h2")
	{
		name("span") 
		
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
    
	$(".//li/a")
    {
		attribute('style', "width:100%")
		insert("span",class: "mw_arrow")
	}
}

# Rearrange #Menu Toggler Items
#--------------------------------

$$(".CategoryList")
{
	$("./h2")
	{
		name("div")
		attribute('style', "margin:5px;")		
	}
    
	$("./div[contains(@class, 'BlockContent')]")
	{
		add_class("panel-body")			
	}
    
	$(".//li/a"){
		attribute('style', "width:100%")
		insert("span", class: "mw_arrow")
	}
}

$$("#Menu")
{
	$("./ul")
	{
		wrap("div", class: "panel-body", style: "margin-top: 15px;")
        
		$("./li/a")
        {
		  attribute('style', "width:100%")
		  insert("span",class: "mw_arrow")
        }
    }
}