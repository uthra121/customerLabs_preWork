//  1. Track purchase event 

let track_order = setInterval(function(){
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
        let event_name = "purchase_products";
        let prperties = {
            "product_properties" : [{
                "product_name": {
                    "t": "string",
                    "v": "Top Up T-Shirt"
                },
                "product_price": {
                    "t": "number",
                    "v": "250"
                },
                "product_quantity": {
                    "t": "number",
                    "v": "1"
                },
                "product_name": {
                    "t": "string",
                    "v": "Polo Shirt"
                },
                "product_price": {
                    "t": "number",
                    "v": "100"
                },
                "product_quantity": {
                    "t": "number",
                    "v": "1"
                }
            }],
            "custome_properties" : {
                "currency" : {
                    "t" : "string",
                    "v" : "USD"
                },
                "coupen" : {
                    "t" : "string",
                    "v" : "CLABS"
                },
                "total_amt" : {
                    "t" : "number",
                    "v" : "350"
                }
            }
        }
        _cl.trackClick(event_name, prperties);
        clearInterval(track_order);
    }
   
}, 1000);

document.querySelector("button.btn btn-black btn-lg py-3 btn-block").addEventListener("click", track_order);


// 2. Track user identification

let first_name = document.getElementById("c_fname").value;
let last_name = document.getElementById("c_lname").value;
let email = document.getElementById("c_email_address").value;
let phone = document.getElementById("c_phone").value;
let country = document.getElementById("c_country").value;
let state = document.getElementById("c_state_country").value;
let zip_code = document.getElementById("c_postal_zip").value;

let track_user = setInterval(function(){
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
        let properties = {
            "custom_properties" : {
                "user_details" : {
                    "t" : "object",
                    "v" : {
                        "first_name" : {
                            "t" : "string",
                            "t" : first_name
                        },
                        "last_name" : {
                            "t" : "string",
                            "v" : last_name
                        },
                        "email" : {
                            "t" : "string",
                            "v" : email
                        }, 
                        "phone" : {
                            "t" : "number",
                            "v" : phone
                        }, 
                        "country" : {
                            "t" : "string",
                            "v" : country
                        },
                        "state" : {
                            "t" : "string",
                            "v" : state
                        },
                        "zip_code" : {
                            "t" : "number",
                            "v" : zip_code
                        }
                    }
                },
                "identify_by_email" : {
                    "t" : "string",
                    "v" : email,
                    "ib" : false
                }
            }
            }
            _cl.identify(properties);
            clearInterval(track_user);
        }
   
}, 1000);

document.querySelector("button.btn btn-black btn-lg py-3 btn-block").addEventListener("click", track_user);


// 3. Track cart viewed


let cart_viewed = setInterval(function() {
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
        let event_name = "cart_page_viewed";
        let properties = {
            "customProperties": {
                "page_url": {
                    "t": "string",
                    "v": "http://127.0.0.1:5500/demo_site/cart.html"
                },
                "page_title": {
                    "t": "string",
                    "v": "Cart page"
                }
            }
        }
        _cl.pageview(event_name, properties);
        clearInterval(cart_viewed);
    }
}, 1000);


//  4. Track add to cart  from the index page


let track_cart_index = setInterval(function() {
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {

        let pdt_name = document.getElementsByClassName("h3.product-title").value;
        let pdt_price = document.getElementsByClassName("strong.product-price").value;        

        let event_name = "add_to_cart";
        let properties = {
            "productProperties": [{
                "product_name": {
                    "t": "string",
                    "v": pdt_name
                },
                "product_price": {
                    "t": "number",
                    "v": pdt_price
                }
            }],
            "customProperties": {
                "page_url": {
                    "t": "string",
                    "v": "http://127.0.0.1:5500/demo_site/index.html"
                },
                "clicked_from": {
                    "t": "string",
                    "v": "index/products"
                }
            }
        }
        _cl.trackClick(event_name, properties)
        clearInterval(track_cart_index)
    }
}, 1000);

document.querySelector("span.icon-cross").addEventListener("click", track_cart_index);


//   4. Track add to cart  from the shop page


let track_cart_shop = setInterval(function() {
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {

        let pdt_name_s = document.getElementsByClassName("h3.product-title").value;
        let pdt_price_s = document.getElementsByClassName("strong.product-price").value;

        let event_name = "add_to_cart";
        let properties = {
            "productProperties": [{
                "product_name": {
                    "t": "string",
                    "v": pdt_name_s
                },
                "product_price": {
                    "t": "number",
                    "v": pdt_price_s
                }
            }],
            "customProperties": {
                "page_url": {
                    "t": "string",
                    "v": "http://127.0.0.1:5500/demo_site/shop.html"
                },
                "clicked_from": {
                    "t": "string",
                    "v": "shop/products"
                }
            }
        }
        _cl.trackClick(event_name, properties)
        clearInterval(track_cart_shop)
    }
}, 1000);

document.querySelector("span.add_to_cart_btn").addEventListener("click", track_cart_shop);