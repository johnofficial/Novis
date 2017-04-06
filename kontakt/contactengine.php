<?php

$EmailFrom = "jovan.savic@novis.rs";
$EmailTo = "jovansaviic@gmail.com";
$Subject = "Novis Poruka | Kontakt ";
$Name = Trim(stripslashes($_POST['name'])); 
$Second_Name = Trim(stripslashes($_POST['second_name'])); 
$Tel = Trim(stripslashes($_POST['phone_number'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$City = Trim(stripslashes($_POST['city'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Ime: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Prezime: ";
$Body .= $Second_Name;
$Body .= "\n";
$Body .= "Broj telefona: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Grad: ";
$Body .= $City;
$Body .= "\n";
$Body .= "Poruka: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
}
?>