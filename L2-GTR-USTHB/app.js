/*let Tax1_on = true; 
let Tax2_on = false;
function calculerTaxe1 () {
	if (Tax1_on) { 
		let Tax1 = document.getElementById('Tax1').value; 
		let net = document.getElementById('net').value; 
		Tax1_calc = net * Taxe1 / 100; 
		document.getElementById('S1').value = Taxe1_calc.toFixed(2); 
	}else {
		document.getElementById('Tax1_calc').value = 0; } 
}
function calculerTaxe2 () { 
	if (Tax2_on) { 
		let Tax2 = document.getElementById('Tax2').value; 
		let Montant_Net = document.getElementById('Montant_Net').value; 
		Tax2_calc = Montant_Net * Tax2 / 100; 
		document.getElementById('Tax2_calc').value = Tax2_calc.toFixed(2); 
	} else { 
		document.getElementById('Tax2_calc').value = 0; 
	} 
}
function calculerMontantBrut () { 
	let Montant_Net = document.getElementById('Montant_Net').value; 
	let Taxe1; 
	let Taxe2; 
	if (Taxe1_on) { 
		Taxe1 = document.getElementById('Taxe1').value; 
	} else { 
		Taxe1 = 0; 
	} 
	if (Taxe2_on) { 
		Taxe2 = document.getElementById('Taxe2').value; 
	} else { 
		Taxe2 = 0; 
	} 
	Montant_Brut = Montant_Net * (1 + Taxe1/100 + Taxe2/100); 
	document.getElementById('Montant_Brut').value = Montant_Brut.toFixed(2);
}
function Taxe1Hover () { 
	if (Taxe1_on) { 
		document.getElementById('Taxe1Btn').src="onnn.png" 
	} else { 
		document.getElementById('Taxe1Btn').src="off.png" 
	} 
}
function Taxe1Normal () { 
	if (Taxe1_on) {
		document.getElementById('Taxe1Btn').src="on.png" 
	} else { 
		document.getElementById('Taxe1Btn').src="of.png" 
	} 
}
function Taxe2Hover () { 
	if (Taxe2_on) {
		document.getElementById('Taxe2Btn').src="onnn.png" 
	} else {
		document.getElementById('Taxe2Btn').src="off.png" 
	} 
}
function Taxe2Normal () {
	if (Taxe2_on) {
		document.getElementById('Taxe2Btn').src="on.png" 
	} else {
		document.getElementById('Taxe2Btn').src="of.png" 
	} 
}
function Taxe1Click () { 
	Taxe1_on = !Taxe1_on; 
	Taxe1Hover(); 
	calculer(); 
}
function Taxe2Click () { 
	Taxe2_on = !Taxe2_on; 
	Taxe2Hover(); 
	calculer(); 
}
function calculer () {
	calculerTaxe1(); 
	calculerTaxe2(); 
	calculerMontantBrut();
}*/



let taxe1_on = true;
let taxe2_on = false;

function calculerTaxe1(){
	if(taxe1_on){
		let taxe1=document.getElementById('tax1').value;
		let net=document.getElementById('net').value;
		S1=net*taxe1/100;
		document.getElementById('S1').value=S1.toFixed(2);
	}else{
		document.getElementById('S1').value=0;
	}
}
function calculerTaxe2(){
	if(taxe2_on){
		let taxe2=document.getElementById('tax2').value;
		let net=document.getElementById('net').value;
		S2=net*taxe2/100;
		document.getElementById('S2').value=S2.toFixed(2);
	}else{
		document.getElementById('S2').value=0;
	}
}
function calculerMontantBrut(){
	let net=document.getElementById('net').value;
	let tax1;
	let tax2;
	if(taxe1_on){
		tax1=document.getElementById('tax1').value;

	}else{
		tax1=0;
	}
	if(taxe2_on){
		tax2=document.getElementById('tax2').value;

	}else{
		tax2=0;
	}
    brut=net*(1+tax1/100+tax2/100);
	document.getElementById('Brut').value= brut.toFixed(2);
}
function Taxe1Hover () { 
	if (taxe1_on) { 
		document.getElementById('Tax1Btn').src="onnn.png" 
	} else { 
		document.getElementById('Tax1Btn').src="off.png" 
	} 
}
function Taxe1Normal () { 
	if (taxe1_on) {
		document.getElementById('Tax1Btn').src="on.png" 
	} else { 
		document.getElementById('Tax1Btn').src="of.png" 
	} 
}
function Taxe2Hover () { 
	if (taxe2_on) {
		document.getElementById('Tax2Btn').src="onnn.png" 
	} else {
		document.getElementById('Tax2Btn').src="off.png" 
	} 
}
function Taxe2Normal () {
	if (taxe2_on) {
		document.getElementById('Tax2Btn').src="on.png" 
	} else {
		document.getElementById('Tax2Btn').src="of.png" 
	} 

}



function Taxe1Click () { 
	taxe1_on = !taxe1_on; 
	Taxe1Hover(); 
	calculer(); 
}
function Taxe2Click () { 
	taxe2_on = !taxe2_on; 
	Taxe2Hover(); 
	calculer(); 
}
function calculer () {
	calculerTaxe1(); 
	calculerTaxe2(); 
	calculerMontantBrut();
}