function calculateClaim() {
      var FLSA_OT = document.getElementById("FLSA_OT").checked;
      var FLSA_MW = document.getElementById("FLSA_MW").checked;
      

      var NY_OT_RR = document.getElementById("NY_OT_RR").checked;
      var NY_OT_MR = document.getElementById("NY_OT_MR").checked;
      var NY_MW = document.getElementById("NY_MW").checked;
	var NY_SOH = document.getElementById("NY_SOH").checked;

// Variables for Article 6 claims start here


      var NYLL_Article6_Claim = document.getElementById("NYLL_Article6_Claim").checked;
      var Unpaid_Commissions = document.getElementById("Unpaid_Commissions").checked;
      var Unpaid_Gratuities = document.getElementById("Unpaid_Gratuities").checked;
      var Unpaid_Tips = document.getElementById("Unpaid_Tips").checked;
      var NY_MANW = document.getElementById("NY_MANW").checked;
      var NY_MANW = document.getElementById("NY_MANW").checked;
      var NY_WN = document.getElementById("NY_WN").checked;
      var NY_WS = document.getElementById("NY_WS").checked;
      var Unpaid_Prevailing_Wages = document.getElementById("Unpaid_Prevailing_Wages").checked;
      var NY_Deductions = document.getElementById("NY_Deductions").checked;
	var NY_Severance = document.getElementById("NY_Severance").checked;
      var NY_Accrued_Time = document.getElementById("NY_Accrued_Time").checked;
      var NY_CONTRACT_OT = document.getElementById("NY_CONTRACT_OT").checked;
      var NY_CONTRACT_OTHER = document.getElementById("NY_CONTRACT_OTHER").checked;
      var NY_BONUS_NONDISCRETIONARY = document.getElementById("NY_BONUS_NONDISCRETIONARY").checked;

// Variables for Article 6 claims end here

	var JOINT_EMPLOYMENT = document.getElementById("JOINT_EMPLOYMENT").checked;
	var MULTIPLE_DEFENDANTS = document.getElementById("MULTIPLE_DEFENDANTS").checked;
	var MULTIPLE_PLAINTIFFS = document.getElementById("MULTIPLE_PLAINTIFFS").checked;
   	var PPN = document.getElementById("PPN");
      	var PPN_S = PPN.options[PPN.selectedIndex].text;

	let claim_count = 0;
	let claim_words = ["","FIRST", "SECOND","THIRD","FOURTH","FIFTH","SIXTH","SEVENTH","EIGHTH","NINTH","TENTH","ELEVENTH","TWELFTH","THIRTEENTH","FOURTEENTH"];
      var paragrpah_count = 0;
      var output = ``;
var Wherefore_Clause = `<center> <b><h1><u>PRAYER FOR RELIEF</u></b></h1></center> 
WHEREFORE, Plaintiff respectfully requests that this Court grant the following relief: <br><br>
<li>	Declare Defendant to be in violation of the Plaintiff’s rights as alleged above.<br><br>`;
	var caption = `<table width=1000 border=1>
	<tr colspan=2><td valign="top" colspan=2>
<b>UNITED STATED DISTRICT COURT<br>
EASTERN DISTRICT OF NEW YORK</b><br>
</td></tr>
<tr><td> Sharon Tucker <br>
Plaintiff,
<p>
v. <p>
Fedex Corp. <br>
Defendant.
<td colspan=2> Civil Action No.</tr>

</table>`

;

 output += `${caption}`;
 output += '<br>Plaintiff Sharon Tucker (“Plaintiff” or “Tucker”), by Abdul Hassan Law Group, PLLC, her attorney, complaining of Defendant Engel Burman Senior Housing at North Hills, Inc. (“Defendant”), respectfully alleges as follows:<br>';

  output += `<center> <b><h1> NATURE OF THE ACTION </b></h1></center> 
<ol type="1">
  <li> Plaintiff alleges, that she was employed by Defendant and pursuant to the Fair Labor Standards Act ("FLSA"), 29 U.S.C. §§ 216 (b), she is: (i) entitled to unpaid overtime wages from Defendant for working more than forty hours in a week and not being paid an overtime rate of at least 1.5 times her regular rate for each and all such hours over forty in a week; and (ii) entitled to maximum liquidated damages and attorneys’ fees pursuant to the Fair Labor Standards Act, 29 U.S.C. § 201 et seq. including 29 U.S.C. § 216(b).    <br><br>
<li>  Plaintiff further complains pursuant to New York Labor Law, that she is: (i) entitled to unpaid overtime wages from Defendant for working more than forty hours in a week and not being paid an overtime rate of at least 1.5 times her regular rate for such hours over forty in a week; and (ii) entitled to maximum liquidated damages and attorneys’ fees, pursuant to the New York Minimum Wage Act ("NYMWA"), N.Y. Lab. Law§§ 650 et seq., including NYLL § 663, and the regulations thereunder. <br><br>
`;

output += `<center> <b><h1> JURISDICTION AND VENUE </b></h1></center> 
  <li> This Court has subject matter jurisdiction pursuant to 28 U.S.C. §§ 1331 and 1337 and supplemental jurisdiction over Plaintiff’s state law claims pursuant to 28 U.S.C. § 1367. In addition, the Court has jurisdiction over Plaintiff’s claim under the Fair Labor Standards Act pursuant to 29 U.S.C. § 216 (b). <br><br>

<li>  Venue is proper in the Eastern District of New York pursuant to 28 U.S.C. § 1391(b) and 29 U.S.C. § 216 (b). <br><br>
<li>  This Court is empowered to issue a declaratory judgment pursuant to 28 U.S.C. §§  
2201	 2202.`;


output += `<center> <b><h1> THE PARTIES </b></h1></center> 
 
<style>
  p {
    line-height: 1.5;
  }
</style>
<p>

 <li> At all times relevant herein, Plaintiff Sharon Tucker (“Plaintiff” or “Tucker”) was an adult, over eighteen years old, who resides in Queens County in the State of New York. <br><br>

<li> At all times relevant herein, Defendant Engel Burman Senior Housing at North Hills, Inc. (“Engel Burman”) was a New York corporation.<br><br>

<li> At all times relevant herein, Defendant controlled the employment of Plaintiff and was responsible for hiring, firing, scheduling, controlling, managing, supervising, and record-keeping as to Plaintiff’s employment, among other employment functions, and performed such functions as to Plaintiff. <br><br>

<li> Upon information and belief and at all times relevant herein, Defendant Engle Burman owned/operated a principal place of business in Nassau County, New York located at 300 Jericho Turnpike, Jericho NY 11753.<br><br>

<li> At all times relevant herein, Plaintiff was employed by Defendant. 
</p>

`;
 

output += `<center> <b><h1> STATEMENT OF FACTS </b></h1></center> 
  <li> Upon information and belief, and at all relevant times herein, Defendant was in the business of providing in relevant part, housing and medical care to the public. <br><br>

<li> Upon information and belief, and at all relevant times herein, Defendant employed over approximately 130 employees. <br><br>

<li> Plaintiff was employed by Defendant for about 12 years ending on or about November 28, 2022. <br><br>

<li> At all times relevant herein, Defendant employed Plaintiff as a manual worker performing a variety of manual and physical duties such as providing assistance to residents throughout her workday with Defendant, including filing, document handling/processing, transporting food up and down several floors for patients, moving boxes/parcels, etc.  <br><br>

<li> At all times relevant herein, Plaintiff was an hourly employee of Defendant and her last hourly rate of pay was about $23.46 an hour. <br><br>

<li> At all times relevant herein, Plaintiff worked about 45-60 or more hours each week; 5-6 days a week for Defendant - with the exception of about 3-4 weeks each year. <br><br>

<li> At all times relevant herein, Defendant had a policy and practice of improperly deducting about 30 minutes or more each day from Plaintiff’s work time. However, due to the demands of her job, Plaintiff did not receive a “bona fide” meal break within the meaning of the FLSA and NYLL – as further reflected in the time records. 29 C.F.R. § 785.18; 29 C.F.R. § 785.19. As a result, Plaintiff is owed overtime wages for about 2.5-3 overtime hours worked each week during her employment with Defendant - with the exception of about 3-4 weeks each year, which she seeks to recover with this action and for which she was not paid any wages. <br><br>

<li> A more precise statement of the hours and wages may be made when Plaintiff obtains the wage and time records Defendant was required to keep under the FLSA and NYLL. Accurate copies of Plaintiff’s wage and time records that Defendant was required to keep pursuant to 29 USC § 211, 29 CFR § 516 and NYLL § 195, 12 NYCRR §142, are incorporated herein by reference. <br><br>

<li>	At all times relevant herein and for the time Plaintiff was employed by Defendant, Defendant failed and willfully failed to pay Plaintiff an overtime rate of at least 1.5 times her regular rate of pay for each and all hours worked in excess of forty hours each week during her employment with Defendant. <br><br>

<li>	At all times relevant herein and except for the about the last year of her employment with Defendant, Defendant paid Plaintiff later than weekly - on a bi-weekly basis in violation of NYLL § 191 (1)(a)(i). See i.e. Vega v. CM & Assocs. Constr. Mgmt., LLC, 175 A.D.3d 1144, 107 N.Y.S.3d 286 (1st Dep’t, 2019). <br><br>

<li>	At all times relevant herein, Defendant did not provide Plaintiff with the notice(s) required by NYLL § 195(1). See i.e. Alonso Vazquez v. Azoulay, 834 F. App'x 653, 654 (2d Cir. 2021). <br><br>

<li>	Upon information and belief, and at all relevant times herein, Defendant failed to display federal and state minimum wage/overtime posters as required by the FLSA and NYLL (29 CFR 516.4; 12 NYCRR 142-2.8), and Defendant failed to notify Plaintiff of her federal and state minimum wage and overtime rights and failed to inform Plaintiff that she could seek enforcement of such rights through the government enforcement agencies. As such, equitable tolling applies in this case. See i.e. Veltri v. Building Service 32B-J Pension Fund, 393 F.3d 318, 324 (2d Cir. 2004); Kim v. Kum Gang, Inc., No. 12 CIV. 6344 MHD, 2015 WL 2222438, at 33–34 (S.D.N.Y. Mar. 19, 2015). <br><br>

<li>	The circumstances of Defendant’s termination of Plaintiff’s employment and other aspects and conditions of Plaintiff’s employment are under review and investigation and Plaintiff may assert wrongful termination and other claims at a later time. <br><br>

<li>	“Plaintiff” as used in this complaint refers to the named Plaintiff. <br><br>

<li>	The “present” or the “present time” as used in this complaint refers to the date this complaint was signed.<br><br>

`;

if (FLSA_OT)  {

var FLSA_Wage_Types = "FLSA overtime wages";
}
if (FLSA_MW) {

 FLSA_Wage_Types += ", FLSA minimum wages";
} 


      if ((FLSA_OT)|| (FLSA_MW)) {
		claim_count++;
	var claimC = claim_words[claim_count];
Wherefore_Clause += `<li> As to her <b>${claimC} Cause of Action</b>, award Plaintiff her unpaid ${FLSA_Wage_Types}, maximum liquidated damages, reasonable attorneys' fees, and costs of the action, pursuant to 29 U.S.C. § 216(b).<br><br>`;

        output += `<center> <b><h1> AS AND FOR A ${claimC} CAUSE OF ACTION <br>  	
FAIR LABOR STANDARDS ACT - 29 U.S.C 201 et Seq. (${FLSA_Wage_Types}) </b></h1></center> 

<li> Plaintiff alleges and incorporates by reference the allegations in paragraphs 1 through 36 above as if set forth fully and at length herein. <br><br>
<li> At all times relevant to this action, Plaintiff was employed by Defendant, individually and/or jointly, within the meaning of the FLSA – 29 USC 201 et Seq. <br><br>
<li>	At all times relevant herein, Defendant did not provide Plaintiff with the statement(s) required by NYLL § 195(3) – the wage statements provided to Plaintiff did not contain all hours worked by Plaintiff nor all wages earned among other deficiencies. See i.e. Alonso Vazquez v. Azoulay, 834 F. App'x 653, 654 (2d Cir. 2021).<br><br>
<li>	Upon information and belief and at all times relevant herein, Defendant had annual revenues and/or expenditures in excess of $500,000. <br><br>

<li>	Upon information and belief and at all times relevant herein, Defendant conducted business with vendors/entities/persons within the State of New York. <br><br>

<li>	Upon information and belief, and at all times relevant herein, Defendant and Plaintiff utilized the instrumentalities of interstate commerce such as the United States mail, internet electronic mail, messaging, payroll application, timekeeping, websites and telephone/cellphone systems as a regular/daily part of the operation of Defendant and Plaintiff’s employment with Defendant. <br><br>

<li>	Upon information and belief and at all times relevant herein, Defendant utilized the goods, materials, and services through interstate commerce. <br><br>

<li>	Defendants as a regular part of their business, make payment of taxes and other monies to agencies and entities outside the State of New York. <br><br>

<li>	Upon information and belief, and at all relevant times herein, Defendant conducted business with mortgage companies, banks, insurance companies, and internet/email service providers within and outside the State of New York. <br><br>

<li>	Defendant as a regular part of its business, engaged in credit card transactions involving banks and other institutions outside the state of New York. <br><br>

<li>	At all times relevant to this action, Plaintiff was engaged in commerce and/or in the production of goods for commerce and/or Defendant, individually and/or jointly, constituted an enterprise(s) engaged in commerce within the meaning of 29 U.S.C. §§ 206, 207. <br><br> 
<li> At all times relevant herein, Defendant, individually and/or jointly, transacted commerce and business in excess of $500,000.00 annually or had revenues in excess of $500,000.00 annually.<br><br>`;
} 

 if (FLSA_OT) {
output += `<li> At all times relevant herein, Defendant,individually and/or jointly, failed and willfully failed to pay Plaintiff overtime compensation at rates of at least 1.5 times his regular rate of pay for each and all hours worked in excess of forty hours in a work week, in violation of 29 U.S.C. § 207.<br><br>`;
}

if (FLSA_MW) {
      
 output += `<li> At all times relevant herein, Defendant, individually and/or jointly, failed and willfully failed to pay Plaintiff overtime compensation at rates of at least the applicable federal minimum wage rate of pay for each and all hours worked in a work week, in violation of 29 U.S.C. § 206.<br><br>`;
}

 if ((FLSA_OT) && (FLSA_MW)) {
output += `<center> <b><h3><u> Relief Requested </u><br>  	
 </b></h3></center><br> 

<li> Plaintiff is entitled to recover from Defendant, individually and/or jointly, his unpaid minimum wages, overtime wages, maximum liquidated damages, attorneys’ fees, and costs of the action, pursuant to 29 U.S.C. § 216(b).<br><br>`; 
} else if (FLSA_OT) {
output += `<center> <b><h3><u> Relief Requested </u><br>  	
 </b></h3></center><br> 

<li> Plaintiff is entitled to recover from Defendant, individually and/or jointly, his unpaid overtime wages, maximum liquidated damages, attorneys’ fees, and costs of the action, pursuant to 29 U.S.C. § 216(b).<br><br>`; 
 
} else if (FLSA_MW) {
output += `<center> <b><h3><u> Relief Requested </u><br>  	
 </b></h3></center><br> 

<li> Plaintiff is entitled to recover from Defendant, individually and/or jointly, his unpaid minimum wages, maximum liquidated damages, attorneys’ fees, and costs of the action, pursuant to 29 U.S.C. § 216(b).<br><br>`; 
 
}

if ((NY_OT_RR) || (NY_OT_MR)) {

var NY_Wage_Types = "NYLL overtime wages";
}
if (NY_MW) {

 NY_Wage_Types += ", NYLL minimum wages";
} 

if (NY_SOH) {

 NY_Wage_Types += ", NYLL spread of hours wages";
} 


 if ((NY_OT_RR) || (NY_OT_MR) || (NY_MW) || (NY_SOH)) {

		claim_count++;
	var claimC = claim_words[claim_count];
Wherefore_Clause += `<li> As to her <b>${claimC} Cause of Action</b>, award Plaintiff her unpaid ${NY_Wage_Types}, maximum liquidated damages, reasonable attorneys' fees, and costs of the action, pursuant to 29 U.S.C. § 216(b).<br><br>`;

        output += `<center> <b><h1>  AS AND FOR A SECOND CAUSE OF ACTION <br>  	
NYLL 650 et Seq. (${NY_Wage_Types}) ${PPN_S}</b></h1></center><br> 
<li> Plaintiff alleges, and incorporates by reference the allegations in paragraphs 1 through 40 above as if set forth fully and at length herein. <br><br>
<li> At all times relevant to this action, Plaintiff was employed by Defendant within the meaning of the New York Labor Law, §§ 2 and 651 and the regulations and wage orders thereunder including 12 NYCRR § 141, 142.<br><br>`;
}
if  ((NY_OT_RR) && (NY_OT_MR)) {
output += `<li> At all times relevant herein, Defendant failed and willfully failed to pay Plaintiff overtime compensation at rates not less than 1.5 times his regular rate of pay and 1.5 times the applicable New York minimum wage rate for each and all hours worked in excess of forty hours in a work week, in violation of the New York 
Minimum Wage Act and its implementing regulations and wage orders. N.Y. Lab. Law §§ 650 et seq., including 12 NYCRR § 142-2.2 and 12 NYCRR § 141-1.4.`; 
} else if (NY_OT_RR) {
output += `<li> At all times relevant herein, Defendant failed and willfully failed to pay Plaintiff overtime compensation at rates not less than 1.5 times his regular rate of pay for each and all hours worked in excess of forty hours in a work week, in violation of the New York 
Minimum Wage Act and its implementing regulations and wage orders. N.Y. Lab. Law §§ 650 et seq., including 12 NYCRR § 142-2.2 and 12 NYCRR § 141-1.4.`; 
} else if (NY_OT_MR) {
output += `<li> At all times relevant herein, Defendant failed and willfully failed to pay Plaintiff overtime compensation at rates not less than 1.5 times the applicable New YOrk minimum wage rate for each and all hours worked in excess of forty hours in a work week, in violation of the New York 
Minimum Wage Act and its implementing regulations and wage orders. N.Y. Lab. Law §§ 650 et seq., including 12 NYCRR § 142-2.2 and 12 NYCRR § 141-1.4.`; 
}
if (NY_MW) {
output += `<li> Defendant failed to pay Plaintiff at a rate of at least equal to the applicable New York State minimum wage rate for each hour worked in a week in violation of the New York minimum Wage Act and its implementing regulations. N.Y. Lab. Law§§ 650 et seq.; 12 NYCRR § 142-2.1 and 12 NYCRR § 141-1.3.`;
}
if (NY_SOH) {
output += `<li> Defendant failed to pay Plaintiff an extra hour of pay for each day he worked a spread of hours in excess of 10 hours a day  in violation of the New York minimum Wage Act and its implementing regulations. N.Y. Lab. Law§§ 650 et seq.; 12 NYCRR § 142-2.1 and 12 NYCRR § 141-1.3.`;
}

 if ((NY_OT_RR) || (NY_OT_MR) || (NY_MW) || (NY_SOH)) {
output += `<center> <b><h3><u> Relief Requested </u><br>  	
 </b></h3></center><br> 

<li> Plaintiff is entitled to recover from Defendant, his unpaid ${NY_Wage_Types}, prejudgment interest, maximum liquidated damages, reasonable attorneys' fees, and costs of the action, pursuant to N.Y. Labor L. § 663(1) and the regulations thereunder.<br><br>`; 

}

// Start Third Cause of Action - NYLL Article 6
var NYLL6_Wage_Types = "";

if (FLSA_Wage_Types) {

 NYLL6_Wage_Types += `${FLSA_Wage_Types}`;
} 

if (NY_Wage_Types) {

 NYLL6_Wage_Types += `, ${NY_Wage_Types}`;
} 

if ((Unpaid_Wages) || (NY_Deductions)) {

 NYLL6_Wage_Types += ", wage deductions";
} 



if ((Unpaid_Wages)) {
		claim_count++;
	var claimC = claim_words[claim_count];


        output += `<center> <b><h1>  AS AND FOR A <b>${claimC}</b> CAUSE OF ACTION <br>  	
NYLL 650 et Seq.  </b></h1></center><br> 
<li> Plaintiff alleges, and incorporates by reference the allegations in paragraphs 1 through 40 above as if set forth fully and at length herein. <br><br>
<li> At all times relevant to this action, Plaintiff was employed by Defendant within the meaning of the New York Labor law, §§ 190 et seq., including §§ 191, 193, 195 and 198 and the applicable regulations thereunder.<br><br>`;
}

if (NY_MANW) {
output += `At all times relevant herein and except for the about the last year of her employment with Defendant, Defendant paid Plaintiff later than weekly - on a bi-weekly basis in violation of NYLL § 191 (1)(a)(i). See i.e. Vega v. CM & Assocs. Constr. Mgmt., LLC, 175 A.D.3d 1144, 107 N.Y.S.3d 286 (1st Dept, 2019).<br><br>`;

}

if (Unpaid_Commissions) {
output += `In addition to the weekly wages, Plaintiff was entitled to receive commission wages as part of the terms and conditions of his employment. However, in breach of the employment and commissions agreement, Defendant has refused/failed to pay and still owes Plaintiff about $4,226 in earned commissions over the period of his employment with Defendant.<br><br>`;

NYLL6_Wage_Types += ", Commission Wages";
}

if (Unpaid_Gratuities) {
output += `At all times relevant herein, Plaintiff was entitled to receive from Defendants, full gratuities/tips paid to him by customers at the time of paying for their rides but at all times relevant herein, Defendants willfully withheld 60% of such gratuities/tips and failed to reimbursed Plaintiff for such unlawful deductions.<br><br>`;

NYLL6_Wage_Types += ", Gratuity Wages";
}

if (Unpaid_Tips) {
output += `At all times relevant herein, Defendant had a policy and practice of deducting tips earned from Plaintiff’s wages in violation of Article 6 of the New York Labor Law – Defendant deducted about $85 earned in tips by Plaintiff from his wages each week – Plaintiff seeks to recover such owed tips/wages with this lawsuit.<br><br>`;

NYLL6_Wage_Types += ", Tips Wages";
}

if (Unpaid_Prevailing_Wages) {
output += `At all times relevant herein, Defendants, individually and/or jointly, violated the terms and conditions of Plaintiff’s employment and underpaid Plaintiff – including through contracts with the City of New York and requirements for paying overtime wages on public work related projects. Plaintiff is entitled to recover in this action all additional wages, including overtime wages he is entitled to as a result of this underpayment– in addition to the other wages Plaintiff seeks to recover in this action <br><br>`;

NYLL6_Wage_Types += ", Prevailing Wages";
}

if (NY_Accrued_Time) {
output += `At all times relevant herein, Plaintiff is owed at least $5,000 -$10,000 of earned and accrued paid time off for which he has not been paid but for which he is entitled to payment and payment that he seeks to recover through this action <br><br>`;

NYLL6_Wage_Types += ", Accrued Time Wages";
}

if (NY_CONTRACT_OT) {
output += `At all times relevant herein, Defendant failed to pay Plaintiff his his unpaid overtime wages due under law, contract/agreement, which he is entitled to payment and payment that he seeks to recover through this action.<br><br>`;

NYLL6_Wage_Types += ", Contract Overtime Wages";
}

if (NY_CONTRACT_OTHER) {
output += `At all times relevant herein Plaintiff `;

NYLL6_Wage_Types += ", Contract Wages";
}

if (NY_BONUS_NONDISCRETIONARY) {
output += `At all times relevant herein, Defendant failed to pay Plaintiff his unpaid bonus due under law, contract/agreement, which he is entitled to payment and payment that he seeks to recover through this action.<br><br>`;

NYLL6_Wage_Types += ", Non Discretionary Bonus Wages";
}

if (NY_Deductions) {
output += `At all relevant times herein, Defendant violated and willfully violated Plaintiff’s rights under NY Labor Law § 190 et seq. including NY Labor Law §§ 191, 193 and 198 by failing to reimburse Plaintiff for expenses Defendant required Plaintiff to incur as a requirement of his work with Defendant - such as vehicle and other expenses, as required under NY Labor Law § 190 et seq.<br><br>`;

NYLL6_Wage_Types += ", Deduction Wages";
}

if (NY_Severance) {
output += `<li>At all relevant times herein, Defendant violated and willfully violated Plaintiff’s rights under NY Labor Law § 190 et seq. including NY Labor Law §§ 191, 193 and 198 by failing to pay Plaintiff severance wages he was entitled to under Defendant's severance plan/policy/practice of at least $40,978.15.<br><br>`;

NYLL6_Wage_Types += ", Severance Wages";
}

if (Unpaid_Wages) {
output += `<li>At all relevant times herein, Defendant violated and willfully violated Plaintiff’s rights under NY Labor Law § 190 et seq. including NY Labor Law §§ 191, 193 and 198 by failing to pay Plaintiff all her wages, including her unpaid overtime wages, wage deductions, as required under NY Labor Law § 190 et seq.<br><br>`;

NYLL6_Wage_Types += ", Unpaid Wages";
}

if (NY_WN) {
output += `<li> At all times relevant herein, Defendant failed and willfully failed to provide Plaintiff with the notice(s) required by NYLL 195(1) – Plaintiff is therefore entitled to and seeks to recover in this action the maximum recovery for this violation, plus attorneys’ fees and costs pursuant to NYLL 198 including NYLL 198(1-b), as well as an injunction directing Defendant to comply with NYLL 195(1).<br><br>`;
NYLL6_Wage_Types += ", Wage Notice Penalties";
}

if (NY_WS) {
output += `<li> At all times relevant herein, Defendant failed and willfully failed to provide Plaintiff with the statement(s) required by NYLL 195(3) – Plaintiff is therefore entitled to and seeks to recover in this action the maximum recovery for this violation, plus attorneys’ fees and costs pursuant to NYLL 198 including NYLL 198(1-d), as well as an injunction directing Defendant to comply with NYLL 195(1).<br><br>`;

NYLL6_Wage_Types += ", Wage Statement Penalties";
}

if (NY_MANW) {

 NYLL6_Wage_Types += ", maximum liquidated damages - including maximum liquidated damages on all wages paid later than weekly";
} else {

 NYLL6_Wage_Types += ", maximum liquidated damages";
}

if ((Unpaid_Wages) || (NY_WN) || (NY_WS)) {
output += `<center> <b><h3><u> Relief Requested </u><br> 
	
 </b></h3></center><br> 

<li> Due to Defendant’s New York Labor Law Article 6 violations including violation of sections 191, 193 and 198, Plaintiff is entitled to recover from Defendant, her unpaid ${NYLL6_Wage_Types}, prejudgment interest, reasonable attorneys’ fees, and costs of the action, pursuant to N.Y. Labor Law § 190 et seq. including § 198.<br><br>`; 

Wherefore_Clause += `<li> As to his <b>${claimC} Cause of Action</b>, award Plaintiff his unpaid ${NYLL6_Wage_Types}, reasonable attorneys' fees, and costs of the action, pursuant to 29 U.S.C. § 216(b).<br><br>`;

}



// End of Third Cause of Action - NYLL Article 6

output += `${Wherefore_Clause}`;
output += `</TABLE>`;



      if (!JOINT_EMPLOYMENT) {
        output = output.replace(/individually and\/or jointly,/g, "");
      }
      
      if (MULTIPLE_PLAINTIFFS) {
        output = output.replace(/Plaintiff allges and incorporates/g, "Plaintiffs allge and incorporate");
	  output = output.replace(/Plaintiff was/g, "Plaintiffs were");
	  output = output.replace(/Plaintiff is/g, "Plaintiffs are");
	  output = output.replace(/Plaintiff's/g, "Plaintiffs' are");
      }

      if (MULTIPLE_DEFENDANTS) {
	  output = output.replace(/Defendant/g, "Defendants");
	  output = output.replace(/Defendants was/g, "Defendants were");
	  output = output.replace(/Defendants is/g, "Defendants are");
	  output = output.replace(/Defendants's/g, "Defendants' are");
    }

              let resultWindow = window.open("", "Calculator Output", "width=1200, height=600");
        resultWindow.document.write(output);
   //   document.getElementById("output").innerHTML = output;
    }
  </script>