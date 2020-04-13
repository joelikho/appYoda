<?php
try{
    include ("params.php");

    if(isset($_COOKIE['sessionToken'])&&$_COOKIE['sessionToken']!=''&&isset($_COOKIE['auth'])&&$_COOKIE['auth']!=''){
        $auth = trim($_COOKIE['auth']);
        $chat_session = trim($_COOKIE['sessionToken']);
        $curl = curl_init();
        $headers = array(
            "x-inbenta-key: $apiKey",
            "Authorization: Bearer $auth",
            "x-inbenta-session: Bearer $chat_session"
        );
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api-gce3.inbenta.io/prod/chatbot/v1/conversation/history",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => $headers,
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        
        
        echo $response;
    }else{
        echo '';
    }
    setcookie("sessionToken", "");
    setcookie("sessionId", "");
    setcookie("auth", "");
    setcookie("opened", "false");
}catch(Exception $e){
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
}


?>