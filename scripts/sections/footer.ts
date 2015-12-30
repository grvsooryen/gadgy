$$("#Footer")
{	
    # Remove hyperlink in Paragraph
    #-------------------------------
	$("./p")
	{
		remove("./a")
	}
    
    # Fetch String from para, modify it, clear the old text and inject newly modified String
    #------------------------------------------------------------------------------------------
    
	$str = fetch('./p')
    
	$str{
		replace(/USD/,"USD<br/>")
		replace(/by Bigcommerce/,"")
		replace(/\|/,"")
		replace(/\./,"")	
	}	
    
	$("./p")
	{
		text()
		{
			clear()
		}
		inject_top($str)		
	}
    
    # Add Powered by Moovweb
    #-------------------------
    
	insert("footer", class: "mw-footer") 
    {
	   insert_before("div", "Powered by:")    
  	}
	
}