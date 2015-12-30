 match($path) {
#   # Match the Ajax path
   with(/search/) {     
       @import "ajax/search.ts"     
   }
 }

# needed for product images
# replace("%24", "$")
# replace("&amp;", "&")