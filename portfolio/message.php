<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "my website form";
    
    $con = mysqli_connect($server, $username, $password, $dbname);
    if(!$con){
        echo "not";
    }

    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message-box"];

    $sql = "INSERT INTO `message`(`Name`, `Email`, `Subject`, `Message`) VALUES ('$name','$email','$subject','$message')";

    $result = mysqli_query($con, $sql);

    if($result){
        echo '<body style="background-color: rgba(62,140,255,0.71);"> 
        <div class="parent-box" style="width: 100%; display: flex; justify-content: center;padding-top: 50px;">
            <div class="box"
            style="background-color: #f8f8f8;
            height: 450px; width: 500px;
            border-radius: 6px;
            box-shadow: 1px 4px 12px 0px #b4a8a8;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: sans-serif;"
            >
            <div style="padding-top: 50px;"><h1 style="font-size: 50px; color: #356eff;">Thank You!</h1></div>
            <div style="padding-top: 24px; width: 70%;"><center style="font-size: 18px; padding-top: 18px;">Your response has been successfully submitted!</center></div>
            <div style="padding-top: 80px; width: 64%; height: 55px;"><button onclick="history.back()" style="height: 100%; width: 100%;  font-size: 18px; color: white; background-color: #356eff; border: none; outline: none; box-shadow: 0px 1px 6px rgb(101 101 101 / 47%); border-radius: 3px;">OK</button></div>
            </div>
        </div>
    </body>';
    }else{
        echo "Failed!";
    }
?>