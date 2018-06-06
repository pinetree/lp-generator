<?php
$dat=date('d.m.Y');
$admin_email = 'kirill.sosnin@gmail.com';

session_start();

if (!empty($_POST)) {
    $bod = null;
    $hasError = null;
    $fileEcho = 'Спасибо за заявку.';
$reg=0;

    $sms="Спасибо за заявку. Мы свяжемся с вами в ближайшее время";


    if (isset($_POST['name_polt'])) {
        foreach ($_POST['name_polt'] as $name_polt) {
            if (trim($name_polt) == '') {
                $hasError = "<script>$('.errorul').closest('form').find('.name_inp').addClass('error_input');</script>";
            } else {
                $bod = "
                <tr>
                    <td><strong>Имя:</strong></td>
                    <td>".$name_polt."</td>
                    <td></td>
                </tr>
                ";
            }
        }
    }

    if (isset($_POST['phone_polt'])) {
        foreach ($_POST['phone_polt'] as $phone_polt) {
            if (trim($phone_polt) == '') {
                $hasError .= "<script>$('.errorul').closest('form').find('.phone_inp').addClass('error_input');</script>";
            } else {
                $bod .= "
                <tr>
                    <td><strong>Номер телефона:</strong></td>
                    <td>".$phone_polt."</td>
                    <td></td>
                </tr>
                ";
            }
        }
    }

 if (isset($_POST['phone2_polt'])) {
        foreach ($_POST['phone2_polt'] as $phone2_polt) {

                $bod .= "
                <tr>
                    <td><strong>Текст сообщения:</strong></td>
                    <td>".$phone2_polt."</td>
                </tr>
                ";

        }
    }


       if (isset($_POST['adres_polt'])) {
        foreach ($_POST['adres_polt'] as $adres_polt) {

                $bod .= "
                <tr>
                    <td><strong>Адрес доставки:</strong></td>
                    <td>".$adres_polt."</td>
                    <td></td>
                </tr>
                ";

        }
    }



           if (isset($_POST['kolvo'])) {
        foreach ($_POST['kolvo'] as $master4) {
            if (trim($master4) == '') {

            } else {
                $bod .= "
                <tr>
                    <td><strong>Количество:</strong></td>
                    <td>".$master4."</td>
                    <td></td>
                </tr>
                ";
                $param.="</br>Количество: <b>".$master4."</b>";
            }
        }
    }


    if ($_POST['okey'][0]=='on')
    {
        $reg=1;

    }





    if (isset($_POST['mail_polt'])) {
        foreach ($_POST['mail_polt'] as $mail_polt) {

                $bod .= "
                <tr>
                    <td><strong>Email:</strong></td>
                    <td>".$mail_polt."</td>
                    <td></td>
                </tr>
                ";

        }
    }


    if (isset($_POST['text_polt'])) {
        foreach ($_POST['text_polt'] as $text_polt) {
            if(trim($text_polt) !== "") {
                $bod .= "
            <tr>
                <td><strong>Сообщение:</strong></td>
                <td>".$text_polt."</td>
                <td></td>
            </tr>
                        ";
            }
        }
    }

    if (isset($_POST['zakaz_polt'])) {
        foreach ($_POST['zakaz_polt'] as $zakaz_polt) {
            $bod .= "
            <tr>
                <td><strong>Из формы:</strong></td>
                <td>".$zakaz_polt."</td>
                <td></td>
            </tr>
            ";
        }
    }

    if (isset($_POST['site_page_polt'])) {
        foreach ($_POST['site_page_polt'] as $site_page_polt) {
            $bod .= "
            <tr>
                <td><strong>Заказали со страницы:</strong></td>
                <td>".$site_page_polt."</td>
                <td></td>
            </tr>
                        ";
        }
    }


    $bod .= "
            <tr>
                <td><strong>Время заявки:</strong></td>
                <td>".date('d.m.Y') . " В " . date('G:i:s')."</td>
                <td></td>
            </tr>
            
                        ";




 if (isset($_POST['tovar_name'])) {
        foreach ($_POST['tovar_name'] as $tovar_im) {
           $tovar_im=$tovar_im;

        }
    }

 if (isset($_POST['tovar_cena'])) {
        foreach ($_POST['tovar_cena'] as $tovar_cena) {
           $tovar_cena=$tovar_cena;

        }
    }

 if (isset($_POST['tovar_id'])) {
        foreach ($_POST['tovar_id'] as $tovar_id) {
           $tovar_id=$tovar_id;

        }
    }




if (($zakaz_polt=="Оформление заказа") and ($_SESSION['kolvo']!=0))
{
    $bod .= "</br>
    </br>";

$summa=0;
for ($i=1; $i<=$_SESSION['kolvo'];$i++)

        {
    if (($_SESSION['tovar'][$i]!='') or ($_SESSION['ssilka'][$i]!=''))
        {


        $id=  $_SESSION['id'][$i];

    $border="background:#efeded;padding:5px;text-align:center;font-size:13px;";
     $padding="padding:5px;";
        $tovar_name=$_SESSION['tovar'][$i];
        $bod .= "
        <tr style=".$border.">
        <td style=".$padding."><span><b>".$_SESSION['tip'][$i]." ".$_SESSION['tovar'][$i]."</b><span>

                ";



        $kolvo=$_SESSION['vsego'][$i];
        $suma=$_SESSION['summa'][$i];
        $bod .="
        </td>
        
        <td style=".$padding.">
        <span><b>".$_SESSION['vsego'][$i]." ".$_SESSION['ed'][$i]."</b></span>
        </td>
        <td style=".$padding.">
        <span><b>".$_SESSION['summa'][$i]." р.</b></span>
        </td>

            </tr>";



          $param='';

    }
        $summa=$summa+$_SESSION['summa'][$i];

        }

$bod .="<tr style=".$border."><td style=".$padding.">Итого к оплате: </td><td></td><td style=".$padding."><b>".$summa." р.</b></td> </tr>";




 }







    if (!isset($hasError)) {
        if ($mail_polt!='')
        {
          $emailTo = '<'.$mail_polt.'>';
          $ma= $admin_email;
        }
        else
        {

        $ma= $admin_email;
        }
        $body = "<table>".$bod."</table>";
        $body2 = "<table>".$bod." ".$ui." ".$keywrd1."</table>";
        $headers = '';
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Transfer-Encoding: base64\r\n";
        $headers .= "From: info@markizi-navesy.ru\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $thema = '=?UTF-8?B?' . base64_encode("Заказ от ".$name_polt) . '?=';

        if($emailTo!='')
            mail($emailTo, $thema, base64_encode($body), $headers);

        mail($ma, $thema, base64_encode($body2), $headers);

        $emailSent = true;


        echo '<span class="form-sent">Спасибо! Ваш заказ отправлен, наши менеджеры свяжутся с вами в ближайшее время.</span>';



//        echo '<script>
//                    $.magnificPopup.open({
//                      items: {
//                        src: \'#thx\',
//                        type: \'inline\'
//                      }
//                    }).magnificPopup(\'open\');
//                </script>';
        //$file = __DIR__ . '/mail.html';



    } else {
        echo '<span class="errorul">' . $hasError . '</span>';
    }

} else {
    echo '<span class="errorul">Вы заполнили не все поля</span>';
}



$_SESSION['counter']=0;
$_SESSION['summa'] = ''; // Диоптрия
$_SESSION['kolvo'] = 0; // Диоптрия

?>