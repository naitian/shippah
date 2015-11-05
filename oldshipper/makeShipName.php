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
