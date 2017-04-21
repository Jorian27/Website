 <script>
var prijzen = new Array();
            prijzen["1maand"]=5.95;
            prijzen["1jaar"]=71.40;
            prijzen["5jaar"]=357;
            
        function getPrijzen()
        {
            var deprijzen=0;
            
            var theForm= document.forms["prijzen"];
            
            var gekozen = theForm.elements["gekozen"];
            
            for(var i = 0; i < gekozen.length; i++)
                {
                    if(gekozen[i.checked])
                {
                  deprijzen = hoi[gekozen[i].value];
                    break;
                }
                }
            
            return deprijzen;
        }
            function calculateTotal()
            {
              var prijs = getPrijzen();
            
                var divobj = document.getElementById("totalPrice");
                divobj.style.display="block";
                divobj.innerHTML = "De totaal prijs is €"+hoi;
            }
            
            function hideTotal()
            {
                var divobj = document.getElementById('totalPrice');
                divobj.style.display='none';
            }
        
        </script>