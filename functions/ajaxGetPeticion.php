<?php
try{
    include ("params.php");
    $query = $_REQUEST['query'];
    $method = $_REQUEST['method'];
    $auth = trim($_REQUEST['auth']);
    if(!isset($_COOKIE['opened'])||$_COOKIE['opened']=='false'){
        $conversa = abrirConversa($auth,$apiKey);
        if($conversa){
            setcookie('opened','true');
            $_COOKIE['opened']='true';
        }else{
            throw new Exception("Error al abrir conversacion");
        }
    }
    switch($method){
        case 'search':
            $url = "https://api-gce3.inbenta.io/prod/chatbot/v1/conversation/message";
            $headers = array(
                "x-inbenta-key: $apiKey",
                "Authorization: Bearer $auth",
                "x-inbenta-session: Bearer ".$_COOKIE['sessionToken']
            );
            $body= array('message' => $query);
            $curl = curl_init();
            
            curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api-gce3.inbenta.io/prod/chatbot/v1/conversation/message",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => $headers,
            ));

            $response = curl_exec($curl);

            curl_close($curl);

            //$response = json_decode($response);
            echo $response;
        break;
        case 'force':
            //No he podido desarrollar esta parte ya que no dispongo de la api funcionando. https://swapi.co
            $return = file_get_contents("force.json");
            echo $return;
        break;
        case 'characters':
            //No he podido desarrollar esta parte ya que no dispongo de la api funcionando. https://swapi.co
            $return = file_get_contents("characters.json");
            echo $return;
        break;
    }
    
}catch(Exception $e){
    echo 'Excepción capturada: ',  $e->getMessage(), "\n";
}

function abrirConversa($auth,$apiKey){
    $curl = curl_init();
    $headers = array(
        "x-inbenta-key: $apiKey",
        "Authorization: Bearer $auth"
    );
    curl_setopt_array($curl, array(
    CURLOPT_URL => "https://api-gce3.inbenta.io/prod/chatbot/v1/conversation",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_HTTPHEADER => $headers
    ));

    $response = curl_exec($curl);

    curl_close($curl);
    $response = json_decode($response);
    if(isset($response->sessionToken)){
        $_COOKIE['sessionToken']=$response->sessionToken;
        setcookie("sessionToken", $response->sessionToken);
        setcookie("sessionId", $response->sessionId);
        $_COOKIE['opened']='true';
        return true;
    }else{
        $_COOKIE['opened']='false';
        return false;
    }
}
?>