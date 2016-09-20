<?php
if($_GET['service']=='productList') {
    $array = [];
    $product = [
        'id'=>'',
        'image' => 'modules/products/web/images/download.jpg',
        'title' => 'Apple iphone 7s',
        'description' => 'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                             sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                             magna aliquam erat volutpat.',
        'price' => '$21.000'
    ];
    for ($i = 1; $i<=12; $i++) {
        $product['id'] = $i;
        array_push($array, $product);
    }
    echo json_encode($array);
}
else if($_GET['service']=='productDetail') {
    $product = [
        'image' => 'modules/products/web/images/gs600_psu_sideview_blue_2.png',
        'title' => 'Corsair GS600 600 Watt PSU',
        'shortDesc' =>'The Corsair Gaming Series GS600 is the ideal price/performance choice for mid-spec gaming PC',
        'availableText'=>'In Stock',
        'description' => 'Product description... Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                             sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                             magna aliquam erat volutpat.',
        'price' => '$ 1234.00',
        'hoverImages' => [
            1=>"modules/products/web/images/gs600_psu_sideview_blue_2.png",
            2=>"modules/products/web/images/gs600_psu_sideview_blue_2.png",
            3=>"modules/products/web/images/gs600_psu_sideview_blue_2.png"
        ]
    ];
    echo json_encode($product);
}
?>
