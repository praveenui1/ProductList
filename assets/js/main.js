var url = "/data";

var newdata;

$.get( url, function( data ) {
   console.log(data);
  newdata = data; 
  var box = "";

  $.each(data.productList, function(i, item) {
       
        
        box += "<div class=\"subItem\" onmouseover=\"updateLegend("+i+");\">";
        box += "            <div class=\"subItemBox\">";
        box += "                <div class=\"subItemImg\">";
        box += "                    <div class=\"subItemBoxImage\">";
        box += " <img src=\""+item.imageUrls.sm+"\">";
        box += "                    <\/div>";
        box += "                <\/div>";
        box += "                <div class=\"subItemBoxCon\">";
        box += "                    <div class=\"subItemBoxTitle\">";
        box += "                        <h2 class=\"subItemBoxTitleHead\">";
        box += "                        " + shorten( item.brand +" "+  item.description, 85);
        box += "                        <\/h2>";
        box += "                    <\/div>";
        box += "                    <div class=\"subItemBoxPrice\">";
        box += "                        <h2 class=\"subItemBoxPriceText\">";
        box += "                            $"+item.networkPrice;
        box += "                        <\/h2>";
        box += "                    <\/div>";
        box += "                    <div class=\"subItemButtonBox\">";
        box += "                        <button class=\"subItemButton\">VIEW MORE<\/button>";
        box += "                    <\/div>";
        box += "                <\/div>";
        box += "            <\/div>";
        box += "        <\/div>";

            });
    
    $( ".subCon" ).append( box );

    
});

function updateLegend(i){

    var marketingBullets="";

    $.each(newdata.productList[i].marketingBullets, function(i, item) {

        marketingBullets += "<li>"+item+"<\/li>";        

    });

    var legend="";
        legend += "<div class=\"mainContainer\">";
        legend += "         <div class=\"mainConImage\">";
        legend += " <img src=\""+newdata.productList[i].imageUrls.md+"\">";
        legend += "         <\/div>";
        legend += "";
        legend += "         <div class=\"mainConData\">";
        legend += "             <div class=\"mainConDataHead\">";
        legend += "             <h2 class=\"mainCOnDataTitle\">";
        legend += "                 "+newdata.productList[i].brand+" "+newdata.productList[i].description;
        legend += "             <\/h2>";
        legend += "             <\/div>";
        legend += "             <div class=\"mainConDataSub\">";
        legend += "             <ul class=\"mainConDataUL\">";
        legend += "               "+marketingBullets;
        legend += "             <\/ul>";
        legend += "         <\/div>";
        legend += "         <\/div>";
        legend += "         <div class=\"mainConBlock\">";
        legend += "             <div class=\"mainPriceBlock\">";
        legend += "             <h2 class=\"mainPrice\">";
        legend += "                 $"+newdata.productList[i].networkPrice;
        legend += "             <\/h2>";
        legend += "             <\/div>";
        legend += "             <div class=\"mainButtonBlock\">";
        legend += "                 <button onclick='alert(\"Item Proce is: $"+newdata.productList[i].networkPrice+"\");'>";
        legend += "                         ADD TO CART";
        legend += "                 <\/button>";
        legend += "             <\/div>";
        legend += "         <\/div>";
        legend += "      <\/div>";

        

        $( ".main" ).html(legend);

}

function shorten(text, maxLength) {
    var ret = text;
    if (ret.length > maxLength) {
        ret = ret.substr(0,maxLength-3) + "...";
    }
    return ret;
}