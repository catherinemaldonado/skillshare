// Check if mobile
function isMobileDevice() {
  return (
    typeof window.orientation !== 'undefined' ||
    navigator.userAgent.indexOf('IEMobile') !== -1
  );
}

var check = isMobileDevice();

// Using handlebars templating: https://handlebarsjs.com/

var source   = document.getElementById("tile-template").innerHTML;
var template = Handlebars.compile(source);

Handlebars.registerHelper('list', function(items, options) {
  var out = '<ul class="link-grid">';

  for(var i=0, l=items.length; i<l; i++) {
    out = out + "<li>" + options.fn(items[i]) + "</li>";
  }

  return out + "</ul>";
});

var content = {
   headline: "Awesome stuff",
   links :[  
      {  
         "link":"http://www.test.com",
         "front":"https://images.unsplash.com/photo-1466784828399-9a9921e8bdfd?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=3d36e6100b267d541ca0e04a184547cf",
        "title":"my painting",
         "hidden":"Learn more"
      },
     {  
         "link":"http://www.test.com",
         "front":"https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=879ba9d3577e1a221aa73664156320e3",
       "title":"my painting",
         "hidden":"Another Link"
      },
     {  
         "link":"http://www.test.com",
         "front":"https://images.unsplash.com/photo-1484820986637-7ec3e85b394f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=8c9eb3ad771b37463f53a02477f4669d",
         "hidden":"One more link",
       "title":"my painting",
      }
    ]         
};

var html = template(content);
$("#content").append(html);

// add animate class to 'li' on click if device
if (check == true) {
  $('.tile').click(function() {
      $(this)
        .parent()
        .siblings()
        .removeClass('animate');
      $(this)
        .parent()
        .toggleClass('animate');
    });
}