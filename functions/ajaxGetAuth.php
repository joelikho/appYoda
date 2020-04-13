<?php

include ("params.php");

$curl = curl_init();
$parametros = array('secret' => $secret);
curl_setopt_array($curl, array(
  CURLOPT_URL => $urlAuth,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode($parametros),
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    "x-inbenta-key: $apiKey"
  ),
));

$response = curl_exec($curl);
if($response!=null){

  curl_close($curl);
  $response = json_decode($response);
  setcookie('auth',$response->accessToken);
  echo $response->accessToken;
}else{
  echo "";
}

?>



