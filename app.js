

document.write('<h2>Assignment  21-25</h2>');
document.write('<h2>String</h2>');

//Task 1
document.write('<h3>Task 1</h3>');
var First_name=prompt("CH:21-25 \n Task1\n" + "Enter the First Name");
var Last_name=prompt("CH:21-25 \n Task1\n" + "Enter the Last Name");
var Full_name= First_name + " "+Last_name;
alert("CH:21-25 \n Task1\n" + Full_name);
document.write(`First Name :${First_name} <br>`);
document.write(`Last Name : ${Last_name}<br>`);
document.write(`Full Name : ${Full_name}<br>`);


//Task 2
document.write('<h3>Task 2</h3>');
var favorite_mobile=prompt("CH:21-25 \n Task2\n" + "Enter your favorite mobile phone model ");
var length_Of_model=favorite_mobile.length;
document.write(`My Favorite Mobile Phone Model is ${favorite_mobile} <br> Length of String : ${length_Of_model}`);


//Task 3
document.write('<h3>Task 3</h3>');
var word= 'Pakistan';
var string_index_find=word.indexOf('n');
document.write(`String : ${word} <br> Index of n = ${string_index_find}`);


//Task 4
document.write('<h3>Task 4</h3>');
var word2='Hello WOrld';
var last_word_count=word2.lastIndexOf('l');
document.write(`String : ${word} <br> Last Index of l = ${last_word_count}`);

//Task 5
document.write('<h3>Task 5</h3>');
var word3='Hello WOrld';
var Indexof_word=word3[1];
document.write(`String : ${word3} <br> Character at Index 3 = ${Indexof_word}`);



//Task 6
document.write('<h3>Task 6</h3>');
var First_name=prompt("CH:21-25 \nTask6\n"+"Enter the First Name");
var Last_name=prompt("CH:21-25 \nTask6\n"+"Enter the Last Name");
var Full_name= First_name.concat(' ',Last_name);
alert("CH:21-25 \nTask6\n"+Full_name);
document.write(`First Name :${First_name} <br>`);
document.write(`Last Name : ${Last_name}<br>`);
document.write(`Full Name : ${Full_name}<br>`);

//Task 7
document.write('<h3>Task 7</h3>');
var city1='Hyderabad';
var city2='Islam';
var replace_city=city1.replace('Hyder',city2);
document.write(`City : ${city1} <br>After Replacement = ${replace_city}`);


//Task 8
document.write('<h3>Task 8</h3>');
var message = 'Ali and Sami are best friends. They play cricket and football together.';
var replace_and=message.replace(/and/g,'&');
document.write(`Message : ${message} <br>After Replacement of And with & ${replace_and}`);


//Task 9
document.write('<h3>Task 9</h3>');
var num1="754";
var check_type= typeof(num1);
var change_type= parseInt(num1);
var new_change_type=typeof(change_type);
document.write(`Value : ${num1} <br> Type :${check_type} <br> Value : ${num1} <br> Type :${new_change_type}`)


//Task 10
document.write('<h3>Task 10</h3>');
var upper_case_word=prompt("CH:21-25 \nTask10\n"+"Enter the word to Convert it to the capital letters");
var capital_word=upper_case_word.toUpperCase();
document.write(`User Input : ${upper_case_word}`);
document.write(`<br>Upper Case : ${capital_word}`);



//Task 11
document.write('<h3>Task 11</h3>');
var t_case_word=prompt("CH:21-25 \nTask11\n"+"Enter the word to Convert it to the Title Case");
var rp=t_case_word.replace(t_case_word.charAt(0),t_case_word.charAt(0).toUpperCase())
document.write(`User Input : ${t_case_word}`);
document.write(`<br>Title Case : ${rp}`);


//Task 12
document.write('<h3>Task 12</h3>');
var num=325.4
var num_to_string= num.toString()
var replace_dot= num_to_string.replace('.',"");
document.write(`Number : ${num}`);
document.write(`<br>Result : ${parseInt(replace_dot)}`);


//Task 13
document.write('<h3>Task 13</h3>');
var user_input_check_word=prompt("CH:21-25 \nTask 13\n"+"Enter the Password");
var checK_word=['[','@','.', ',','!',']'];
for(var i=0 ; i<checK_word.length;i++)
{
    if(user_input_check_word.includes(checK_word[i]))
    {
        alert("CH:21-25 \nTask13\n"+'Enter a valid username');
        break;    
    }
}



//Task 14
document.write('<h3>Task 14</h3>');
document.write('ALert Box ');
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var check_items=prompt("CH:21-25 \nTask14\n"+"What you want to Order ");
var check_flag=false;
for(var i=0 ; i<A.length;i++)
{
    if(check_items.toLowerCase().includes(A[i]))
    {   check_flag=true;
        alert(`Task 14 \n ${check_items} is available aat index ${i} in our Bakery`);
        break;    
    }
}
if(check_flag==false){
    alert(`Task 14\nSorry ${check_items} is not available in our Bakery `);
}

//Task 15
document.write('<h3>Task 15</h3>');
document.write('<h3>Remaning</h3>');

//Task 16
document.write('<h3>Task 16</h3>');
var university = 'University of Karachi';
document.write(`Text :${university} <br>`)
for(var i=0;i<university.length;i++){
    document.write(university[i] + '<br>');
}

//Task 17
document.write('<h3>Task 17</h3>');
var user_input=prompt("CH:21-25 \nTask17\n"+'Enter the Word');
var last_character=user_input.charAt(user_input.length-1);
document.write(` User Input : ${user_input} <br> Last Character of Index : ${last_character}`);
//Task 18
document.write('<h3>Task 18</h3>');
var text="The quick brown fox jumps over the lazy dog";
var search_word=text.toLowerCase().match(/the/g);
document.write(`Text : ${text}`)
document.write(`<br>There are ${search_word.length} occurrence of word the`)


//Assignment  26-30
document.write('<h2>Assignment  26-30</h2>');
document.write('<h2>Math</h2>');


//Task 1
document.write('<h3>Task 1</h3>');
var positive_integer=prompt('Ch:26-30 Maths\nTask 1\nEnter the Posirive Integer like (3.125)');
var round_off=Math.round(positive_integer);
var floor_value=Math.floor(positive_integer);
var ceil_value = Math.ceil(positive_integer);
document.write(`Number : ${positive_integer} <br>`);
document.write(`Round off : ${round_off}<br>`);
document.write(`Floor Value : ${floor_value}<br>`);
document.write(`Ceil Value : ${ceil_value}<br>`);


//Task 2
document.write('<h3>Task 2</h3>');
var negative_integer=prompt(' Ch:26-30 Maths\nTask 2\nEnter the Negative Integer like (-3.125)');
var round_off=Math.round(negative_integer);
var floor_value=Math.floor(negative_integer);
var ceil_value = Math.ceil(negative_integer);
document.write(`Number : ${negative_integer} <br>`);
document.write(`Round off : ${round_off}<br>`);
document.write(`Floor Value : ${floor_value}<br>`);
document.write(`Ceil Value : ${ceil_value}<br>`);

//Task 3
document.write('<h3>Task 3</h3>');
var absolute_num=-4;
var absolute_num_con=Math.abs(absolute_num);
document.write(`The Absolute value  of ${absolute_num} is ${absolute_num_con}`);

//Task 4
document.write('<h3>Task 4</h3>');
var random_value=Math.floor(Math.random() * 7);
document.write(`Random Dice Value : ${random_value}`);


//Task 5
document.write('<h3>Task 5</h3>');
var random_coin_value=Math.floor(Math.random() * 2) + 1;
if(random_coin_value==1){
    document.write(random_coin_value);
    document.write(` <br> Random Coin Value : Tail`);
}
else{
    document.write(random_coin_value);
    document.write(` <br> Random Coin Value : Heads`);
}

//Task 6
document.write('<h3>Task 6</h3>');
var random_value_1_100=Math.floor(Math.random() * 100)+1;
document.write(`Random Number Between 1 and 100 : ${random_value_1_100}`);

//Task 7
document.write('<h3>Task 7</h3>');
var weight_input=parseInt(prompt('Ch:26-30 Maths\n Task 7\n Enter your Weight in Kilogram'));
document.write(`The Weight of the user is ${weight_input} kilograms`);

//Task 8
document.write('<h3>Task 8</h3>');
var secret_number=Math.floor(Math.random()*10)+1;
var guess_num=parseInt(prompt("Ch:26-30 Maths\n Task 8\n Guess the Number Between 1 to 10"));
if(guess_num==secret_number){
    alert("You Guess the correct the number ");
}
else{
    alert("Try Again");
}

document.write('<h2>Assignment  31-35</h2>');
document.write('<h2>Date Methods</h2>');

//Task 1
document.write('<h3>Task 1</h3>');
document.write(`Current Date and Time <br>`);
var date=new Date()
document.write(date);

//Task 2
document.write('<h3>Task 2</h3>');
var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Ch:31-35 Maths\n Task 2\n"+ "Current Month is "+ months[d.getMonth()]);
document.write(`Current Month is ${months[d.getMonth()]}`)

//Task 3
document.write('<h3>Task 3</h3>');
var days=['Saturdays','Sundays','Mondays','Tuesdays','Wednesdays','Thursdays','Fridays',]
var start_3=days[d.getDay()+1];
var stringt=start_3.toString();
alert("Ch:31-35 Maths\n Task 2\n"+ "Today Day is "+ stringt.slice(0,3));
document.write(`Today Day is ${stringt.slice(0,3)}`);


//Task4
document.write('<h3>Task 4</h3>');
var days=['Saturdays','Sundays','Mondays','Tuesdays','Wednesdays','Thursdays','Fridays',]
var today_day=days[d.getDay()+1];
if(today_day=="Saturdays" ||today_day=="Sundays"){
document.write(`Its  Fun day`);}

//Task5
document.write('<h3>Task 5</h3>');
var d = new Date();
var dates=d.getDate();
if(dates<=15){
    document.write("First fifteen days of the month");
}
else{
    document.write('Last days of the month')
}

//Task6
document.write('<h3>Task 6</h3>');
var d = new Date();
document.write('Remaning');

//task 7
document.write('<h3>Task 7</h3>');

var date= new Date();
if(date.getHours()<=12){
    document.write('Its AM');
}

else {
    document.write('Its PM');
}

//Task 8
document.write('<h3>Task 8</h3>');
var laterDate= new Date();
laterDate.setMonth(laterDate.getMonth()-1);
laterDate.setDate(laterDate.getDate()-1);
document.write(laterDate);


//task 9
document.write('<h3>Task 9</h3>');
document.write('Remaining');

var date_Ramadan = new Date();
date_Ramadan.setFullYear(2015, 6, 18);

//document.write(date_Ramadan.getDate());

//task 14
document.write('<h3>Task 14</h3>');
var customer_name="ABc customer";
var Current_Month  ="Feb"
var Number_of_units =255
var Charges_per_unit  =16
var Net_Amount_Payable =Number_of_units*Charges_per_unit;   
var Late_Payment_Surcharge =254
var Gross_Amount_Payable = Net_Amount_Payable + Late_Payment_Surcharge;

document.write('<h3>K-Electric BIll</h3>');
document.write(`Customer Name :${customer_name} <br>`);
document.write(`Current Month :${Current_Month}<br>`);
document.write(`Number of units :${Number_of_units}<br>`);
document.write(`Charges per unit :${Charges_per_unit}<br><br>`);
document.write(`Net Amount Payable (within Due Date) :${Net_Amount_Payable}<br>`);
document.write(`Late Payment Surcharge :${Late_Payment_Surcharge}<br>`);
document.write(`Gross Amount Payable (after Due Date) :${Gross_Amount_Payable}<br>`);





