/*
  Page Type

  This file defines what you will call the page throughout the project.
  This will allow you to define the analytics page_type custom variable as well
  as clarify what page you're trying to map to which tritium file.  Also, if
  there are no mappings for the page, it will be perfect proxied!

  Example starting code:
*/

$actual_path = $path

match_not($actual_path, /\.css|\.gif|\.jpg|\.jpeg/) {

  #### Path Specific ####
  match($actual_path) {
    
    # Home page
    with(/^\/$|^\/\?/) { #/
      $page_type = "home"
    }
    with(/shop+(.*)/) { #/
      $page_type = "category"
    }
    with(/brands+(.*)/) { #/
      $page_type = "brands"
    }
    with(/sample-product+(.*)/) { #/
      $page_type = "product"
    }   
    with(/cart.php+(.*)/) { #/
      $page_type = "cart"
    }   
    with(/login.php+(.*)/) { #/
      $page_type = "login"
    }  
    with(/AjaxSearch/) { #/
      $page_type = "search"
    }  
    with(/search.php+(.*)/) { #/
      $page_type = "search"
    }  
    

  }
}

match($page_type, /^perfect_proxy$/) {
  $content_type = "perfect_proxy"
}