/*
  NEW Mappings

  PLEASE SEE: page_type.ts to define the $page_type variable first!

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($status) {
  match($page_type) {
    with(/^home$/) {
      @import pages/home.ts
    }  
    with(/^category$/) {
      @import pages/category.ts
    }
    with(/^brands$/) {
      @import pages/brands.ts
    }
    with(/^product$/) {
      @import pages/product.ts
    }
    with(/^cart$/) {
      @import pages/cart.ts
    }
    with(/^login$/) {
      @import pages/login.ts
    }
    with(/^search$/) {
      @import pages/search.ts
    }
    
    else() {
      @import pages/rest.ts
    }
  }  
}
