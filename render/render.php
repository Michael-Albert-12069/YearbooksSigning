<?php
echo "<!DOCTYPE html>";
echo "<html lang='en'>";
echo "<head>";
echo "  <meta charset='UTF-8'>";
echo "  <meta name='viewport' content='width=device-width, initial-scale=1.0'>";
echo "  <link rel='stylesheet' type='text/css' href='renderstyles.css'>";
echo "  <meta http-equiv='X-UA-Compatible' content='ie=edge'>";
echo "  <title>Text Render</title>";
echo "</head>";
echo "<body>";
echo '<h1 class="'.$_GET['font'].'">'.$_GET['message'].'<h1>';
echo '<h2 class="'.$_GET['font'].'">'.$_GET['name'].'<h2>';

echo "</body>";
echo "</html>";
?>