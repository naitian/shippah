<!--Marcus Alder, Andrew Shi, Reed Zhang-->

<html>
<head>
    <title>
        Shippah
    </title>
    <div style="font-size:100px">
        Shippah<br>
        <p style="font-size:40px">Do you ship it?</p>
    </div>
    <!--<div style="font-size:14px"><a href="https://tjhsst.edu/~2016malder/about.html">About Shippah</a></div>-->
    <style type="text/css">
        .fixed{
            position:fixed;
            top:20px;
            right:20px;
            padding:5px;
        }
        .fixedbot{
            position:fixed;
            bottom:20px;
            right:20px;
            padding:5px;
        }
        #search{
            position: absolute;
            top:90px;
            right:20px;
            padding:20px;
        }
        .blue{
            background-color:#91B5B4;
            border-radius:5px;
        }
        #field{
            border-style:none;
            padding:3px;
        }
        .grow {
            max-height: 1em;
            padding:1em;
            padding-top:10px;
            transition: max-height 1s;
            /*transition:max-width .75s;*/
            -webkit-transition: max-height 1s;
            /*-webkit-transition: max-width .75s;*/
            text-align: center;
            overflow: hidden;
        }
        .grow:hover {
            max-height:100%;
            /*max-width:100%;*/
        }
        .grup {
            max-height: 1em;
            max-width: 25%;
            padding:5px;
            transition: max-height 1s;
            /*transition:max-width .75s;*/
            -webkit-transition: max-height 1s;
            /*-webkit-transition: max-width .75s;*/
            text-align: center;
            overflow: hidden;
        }
        .grup:hover {
            max-height:100%;
            /*max-width:100%;*/
        }
        .round{
            border-radius:5px;
        }
        .counter{
            border-radius:5px;
        }
        #doge{
            position:fixed;
            right:40%;
            bottom:0px;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> 
</head>
<body background="http://i.imgur.com/ojTisFH.png">
    <div align="center" id="doge">
        <img src="http://i.imgur.com/LXbKqKP.png" width=200px>
    </div>
    <div id="search" class="blue">
        <form method=POST>
       Search Profile:        <input id="searcherino" class="round" type="text" name="searchname" maxlength="50" size="20" /><br />
        <input id="btn_1" type="button" value="Search" name="search" /><br/>
        <div id="profdisplay">
            
        </div>
        <form method=POST>
        <input id="imgsub" class="round" type="text" name="imageurl" size="20" placeholder="submit image by url"/><br/>
        <input id='btn_2' type="submit" value='Upload' name="submiturl"/>
        <!--only supports jpg+png, needs http in front-->
        </form>
        <?php
        if(isset($_POST["submiturl"]))
        {
            if(!isset($_POST["imageurl"]))
            {
                echo "Blank link!";
            }
            else
            {
                $url = $_POST["imageurl"];
                $name = $_POST["searchname"];
                $db = new SQLite3('shippingbase');
                $update = $db->prepare("UPDATE profiles SET website='$url' WHERE name='$name';");
                $update->execute();
            }
        }
        ?>
        <script language='javascript' type='text/javascript'>
            $('#btn_2').hide()
            $('#imgsub').hide()
            
            $('#btn_1').click(function(){
                $.ajax({
                    type: 'POST',
                    url: "search.php",
                    data: {'query':$("#searcherino").val()},
                    success:function(result){document.getElementById("profdisplay").innerHTML+=result}
                });
                $('#btn_2').show();
                $('#imgsub').show();
            });
            
            $('#btn_2').click(function(){
                $('#btn_2').hide()
                $('#imgsub').hide()
            });
            
            
            $(document).ready(function(){
                $('input.counter').on('click', function(){
                    $.ajax({
                        type: 'POST',
                        url: "inc.php",
                        data: {'id':$(this).attr('id')},
                    });
                    history.go(0);
                });
            });
        </script>
        
        <!--<input type="submit" value="Search" name="search"/><br/>-->
        <!--<input type="submit" value="upload an image" name="upload" style="visibility:hidden"/><br/>-->
        </form>
    </div>
<?php
    function isVowel($letter){
        if(preg_match_all('/[aeiou]/i',$letter,$matches)==0){
            return(FALSE);
        }else{
            return(TRUE);
        }
    }
    function makeName($n1, $n2)
    {
        $coupleName="";
        $firstHalf="";
        $secondHalf="";
        if(strlen($n1)<4){
            $firstHalf=$n1;
        }
        else{
            $vowIndex = 2;
            for($i=strlen($n1)-1;$i>=2;$i--){
                if(isVowel(substr($n1, $i, 1))==TRUE){
                    $vowIndex=$i;
                }
            }
            $firstHalf=substr($n1,0,$vowIndex);
        }
        if(strlen($n2)<4){
            $secondHalf=$n2;
        }
        else{
            $vowIndex=0;
            for($j=strlen($n2)-1;$j>=0;$j--){
                if(isVowel(substr($n2,$j,1))==TRUE){
                    $vowIndex=$j;
                }
            }
            $secondHalf=substr($n2,$vowIndex,strlen($n2)-$vowIndex);
        }
        return($firstHalf.lcfirst($secondHalf));
    }
    echo "Most Popular Ships: <br/>";
    $db = new SQLite3('shippingbase');
    $get = 'SELECT * FROM ships ORDER BY num';
    $result = $db->query($get);
    $array = array();
    while($row = $result->fetchArray())
    {
        array_push($array, $row[0].": ".$row[1]." ships");
    }
    $array = array_reverse($array);
    foreach($array as &$row)
    {
        $bname = substr($row, 0, strpos($row, ":"));
        
    
        $num = substr($row, strpos($row, ":") + 2);
        $nm1 = substr($bname, 0, strpos($bname, ", "));
        $get = "SELECT website FROM profiles WHERE name='$nm1'";
        $result1 = $db->query($get);
        $array1 = $result1->fetchArray();
        $nm2 = substr($bname, strpos($bname, ", ")+2);
        //echo $nm2;
        $get2 = "SELECT website FROM profiles WHERE name='$nm2'";
        $result2 = $db->query($get2);
        $array2 = $result2->fetchArray();
        $sname = makeName($nm1, $nm2)." or ".makeName($nm2, $nm1);
        
        $af1 = '('.$db->query("SELECT affiliations FROM profiles WHERE name='$nm1'")->fetchArray()[0].')';
        if(strlen($af1) < 3){
            $af1 = "";
        }
        $af2 = '('.$db->query("SELECT affiliations FROM profiles WHERE name='$nm2'")->fetchArray()[0].')';
        if(strlen($af2) < 3){
            $af2 = "";
        }
        
        echo "<table>
                <tr style='padding:2px'>
                    <td><img src=$array1[0] width=175px></td>
                    <td><img src=$array2[0] width=175px></td></tr>
                <tr style='text-align:center'>
                    <td colspan='2'>$nm1 $af1 &hearts; $nm2 $af2 : $num</td></tr>
                <tr style='text-align:center'>
                    <td>$sname</td>
                    <td style='text-align:center'><input class='counter' type='button' value='i ships it!!!' id='$nm1, $nm2'></td>
                </tr>
                </table>"; //name='$bname' onClick='shipIt($bname)

        echo "<br>";
        // if(isset($_POST["$row"]))
        // {
        //     $names = $_POST[$row];
        //     $get = "SELECT num FROM ships WHERE names='$names'";
        //     $result = $db->query($get);
        //     $array = $result->fetchArray();
        //     $newnum = $array[0]+1;
        //     $update = $db->prepare("UPDATE ships SET num='$newnum' WHERE names='$names';");
        //     $update->execute();
        // }
    }
?>
}

<div class="fixedbot blue grup">
    <b>what the devil is this "shipping"?</b>
    <br>
    An unrealistic relationship that you love so much but causes you so much pain and misery 
    forcing you to scream "MY FEELS!" while sliding out of your chair because it never 
    comes true even though it's so obvious it should.
</div>

<div class="fixed blue grow">
    <fieldset id="field">
        <form method=POST>
            <b>launch a new ship!!1!!1one!</b>
            <br><br>
            Enter first and last names (e.g. John Smith Mary Jane):
            <table>
                <tbody><tr>
                    <td>Name:        <input class="round" type="text" name="newname1" maxlength="50" size="20" /><br /></td>
                    <td>Affiliation: <input class="round" type="text" name="category1" maxlength="50" size="20" /><br /></td>
                </tr>
                <tr>
                    <td>Name:        <input class="round" type="text" name="newname2" maxlength="50" size="20" /><br /></td>
                    <td>Affiliation: <input class="round" type="text" name="category2" maxlength="50" size="20" /><br /></td>
                </tr>
            </tbody>
            </table>
            <input type="submit" value="Ship" name="newnameregister"/><br/>
        </form>
    </fieldset>
    
    <?php
    function createTable()
    {
        $db = new SQLite3('shippingbase');
        $createstatement = $db->prepare('CREATE TABLE profiles (name STRING PRIMARY KEY NOT NULL, ships STRING, website STRING, affiliations STRING);');
        $createstatement->execute();
        $wal = $db->prepare("PRAGMA journal_mode=WAL");
        $wal->execute();
    }
    if(isset($_POST["newnameregister"]))
    {
        #$db = new SQLite3('shippingbase');
        #$del = $db->prepare('DROP TABLE profiles;');
        #$del->execute();
        #createTable();
        #Create Table
        #$createstatement = $db->prepare('CREATE TABLE ships (names STRING PRIMARY KEY, num INTEGER);');
        #$createstatement->execute();
        $defaultURL = "http://blogs.kqed.org/education/files/2011/06/facebook_blank_face3.jpeg";
        if(isset($_POST["newname1"]) and isset($_POST["newname2"]))
        {
            $newName1 = ucfirst($_POST["newname1"]);
            $newName2 = ucfirst($_POST["newname2"]);
            $category1 = ucfirst($_POST["category1"]);
            $category2 = ucfirst($_POST["category2"]);
            $names = $newName1.", ".$newName2;
            $names2 = $newName2.", ".$newName1;
            //echo $names;
            if($newName1==null || $newName2==null || $newName1=="" || $newName2=="")
            {
                echo "Empty name!";
            }
            else if(strpos($newName1, ",")>0 or strpos($newName2, ",")>0)
            {
                echo "No commas in names!";
            }
            else
            {
                $db = new SQLite3('shippingbase');
                #Update Ships
                $get = "SELECT num FROM ships WHERE names='$names'";
                $result = $db->query($get);
                $array = $result->fetchArray();
                echo $array[0];
                if($array[0]==null)
                {
                    $get2 = "SELECT num FROM ships WHERE names='$names2'";
                    $result2 = $db->query($get2);
                    $array2 = $result2->fetchArray();

                    if($array2[0]==null)
                    {
                        $addValues = $db->prepare("INSERT INTO ships(names, num) VALUES ('$names', 1);");
                        $addValues->execute();        
                    }
                    else
                    {
                        $newnum = $array2[0]+1;
                        $update = $db->prepare("UPDATE ships SET num='$newnum' WHERE names='$names2';");
                        $update->execute();    
                    }
                }
                else
                {   
                    $newnum = $array[0]+1;
                    $update = $db->prepare("UPDATE ships SET num='$newnum' WHERE names='$names';");
                    $update->execute();
                }
                #Update Profile 1
                $get2 = "SELECT ships FROM profiles WHERE name='$newName1'";
                $result2 = $db->query($get2);
                $array2 = $result2->fetchArray();
                if($array2[0]==null)
                {
                    #echo "nonexist";
                    $nn2 = $newName2.', ';
                    $addValues2 = $db->prepare("INSERT INTO profiles(name, ships, website, affiliations) VALUES ('$newName1', '$nn2', '$defaultURL', '$category1');");
                    $addValues2->execute();
                }
                else
                {
                    if(strpos($array2[0], $newName2.", ")!==FALSE)
                    {
                  //      echo "contains";#$newnum = substr($array[0], strlen($array[0])-strpos($array[0], $newName2), 1)+1;
                        #$newships = substr($array[0], 0, strlen($array[0])-strpos($array[0], $newName2)).$newnum.substr($array[0], strpos($array[0], $newName2));
                    }
                    else
                    {
                    $newships = $array2[0].$newName2.", ";
                    $update2 = $db->prepare("UPDATE profiles SET ships='$newships' WHERE name='$newName1';");
                    $update2->execute();
                  //  echo "asdf";
                    }
                }
                
                $get2 = "SELECT ships FROM profiles WHERE name='$newName1'";
                $result2 = $db->query($get2);
                $array2 = $result2->fetchArray();
                //echo $newName1." : ".$array2[0];
                
                #Update profile 2
                $get3 = "SELECT ships FROM profiles WHERE name='$newName2'";
                $result3 = $db->query($get3);
                $array3 = $result3->fetchArray();
                #echo $array3[0];
                if($array3[0]==null)
                {
                    #echo "nonexist";
                    $nn1 = $newName1.', ';
                    $addValues3 = $db->prepare("INSERT INTO profiles(name, ships, website, affiliations) VALUES ('$newName2', '$nn1', '$defaultURL', '$category2');");
                    $addValues3->execute();
                }
                else
                {
                    if(strpos($array3[0], $newName1.", ")!==FALSE)
                    {
                //        echo "contains";#$newnum = substr($array[0], strlen($array[0])-strpos($array[0], $newName1), 1)+1;
                        #$newships = substr($array[0], 0, strlen($array[0])-strpos($array[0], $newName1)).$newnum.substr($array[0], strpos($array[0], $newName1));
                    }
                    else
                    {
                    $newships3 = $array3[0].$newName1.", ";
                    // echo "oldships".$ships3;
                    // echo "name1".$newName1;
                    // echo "newship".$newships3;
                    // echo "asdf";
                    $update3 = $db->prepare("UPDATE profiles SET ships='$newships3' WHERE name='$newName2';");
                    $update3->execute();
                    }
                }
                
                $get = "SELECT ships FROM profiles WHERE name='$newName2'";
                $result = $db->query($get);
                $array = $result->fetchArray();
                $ships = $array[0];
                //echo $newName2." : ".$array[0];
            }
        }
        else
        {
            echo "Empty name!";
        }
        echo "<meta http-equiv='refresh' content='.1'>";
    }
    ?>
</div>
</body>
</html>
<!--aidan: TEPi0Or guitar: BAJjxdt-->
