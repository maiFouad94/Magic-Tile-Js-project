  var time=100;
  var prev=[];
  var this_iteration=[]
  var iteration=0;
$(document).ready(function(){
  var no_of_cells;   


function tableCreate(lines) {
    //var id=0;
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.setAttribute('id','mytable')
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < lines; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < lines; j++) {
            if (i == lines-1 && j == lines) {
                break
          } else {
                var td = document.createElement('td');
                td.style.width='20px';
                td.style.height='20px'; 
                td.setAttribute('onClick',"this.style.backgroundColor = 'red';");
                //var id_attr= id++;
               // td.appendChild(document.createTextNode(id))
                tr.appendChild(td); 
            }
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)

}

var flag=0;
var flag_in=0;
var array=[];
var array_in=[];
var myvar;

$('#interval').on('change',function(){
    time=this.value;
     if($('#start').innerHTML=='pause')
         {
          clearInterval(myvar);
   
          myvar=setInterval(function(){
            selection()
            },time);
        }
    

});

$('#dropDownList').on('change', function() {

    $("table").remove();
    no_of_cells=this.value;
    tableCreate(this.value);

    $('#start').on('click',function(){
 
         if(this.innerHTML=='start')
         {
           document.getElementById('prev').setAttribute('disabled',true);
           document.getElementById('next').setAttribute('disabled',true);
             
            this.innerHTML='pause';
            myvar=setInterval(function(){
            selection()
            },time);
          }
          else
            {
            document.getElementById('prev').removeAttribute("disabled");
            document.getElementById('next').removeAttribute("disabled");
            this.innerHTML='start';
            clearInterval(myvar);

            }

});

$('#next').on('click',function(){
    
    selection();
    
});

$('#prev').on('click',function(){

     iteration--;
     if(iteration<0)
      {
      alert('zero iteration !')
      iteration=0;
      }

     for(var i =0 ; i<this_iteration[iteration+1].length ; i++)
       {
         $('td')[this_iteration[iteration+1][i]].style.backgroundColor='white';
       }

     for(var i =0 ; i<prev[iteration+1].length ; i++)
        {
         $('td')[prev[iteration+1][i]].style.backgroundColor='red';
        }
   
});
$('#reset').on('click',function(){
      $('#mytable').remove();
      tableCreate(no_of_cells);

});

});

 function selection(){
 
    iteration++;
    this_iteration[iteration]=[]
    prev[iteration]=[]

    for( var k=0; k<no_of_cells*no_of_cells;k++)
      {
        flag=0;
        flag_in=0;

       document.getElementsByTagName('td')[k].removeAttribute('onClick');

        if(($('td')[k].style.backgroundColor=='red'))
          {
            prev[iteration].push(k);

            if((k+1)%no_of_cells)
            {if($('td')[k+1].style.backgroundColor=='red')
               {
                flag++;
                }}

            if((k%no_of_cells))
              {if($('td')[k-1].style.backgroundColor=='red')
                 { 
        flag++;
    }}
    if([k-no_of_cells]>0)
    {if($('td')[k-no_of_cells].style.backgroundColor=='red')
  { 
    flag++;
    }}

    if((k+parseInt(no_of_cells))<(no_of_cells*no_of_cells))
     {if($('td')[k+parseInt(no_of_cells)].style.backgroundColor=='red')
   { 
     flag++;
    }}

    if(((k-no_of_cells)+1)>0)
    {if($('td')[(k-no_of_cells)+1].style.backgroundColor=='red')
  { 
    flag++;
   }}

   if(((k-no_of_cells)-1)>0)
{if($('td')[(k-no_of_cells)-1].style.backgroundColor=='red')
  { 
    flag++;
}}

  if(((k+parseInt(no_of_cells))-1)<(no_of_cells*no_of_cells))
 { if($('td')[(k+parseInt(no_of_cells))-1].style.backgroundColor=='red')
   { 
     flag++;
 }}

 if(((k+parseInt(no_of_cells))+1)<(no_of_cells*no_of_cells))
{ if($('td')[(k+parseInt(no_of_cells))+1].style.backgroundColor=='red')
   { 
     flag++;
 }}
   
}

if(!($('td')[k].style.backgroundColor=='red'))
  {
    if((k+1)%no_of_cells)
    {if($('td')[k+1].style.backgroundColor=='red')
  {
        flag_in++;
    }}
    if(k%no_of_cells)
    {if($('td')[k-1].style.backgroundColor=='red')
  { 
        flag_in++;
    }}
    if([k-no_of_cells]>0)
    {if($('td')[k-no_of_cells].style.backgroundColor=='red')
  { 
    flag_in++;
    }}
    if((k+parseInt(no_of_cells))<(no_of_cells*no_of_cells))
     {if($('td')[k+parseInt(no_of_cells)].style.backgroundColor=='red')
   { 
     flag_in++;
    }}
    if(((k-no_of_cells)+1)>0)
    {if($('td')[(k-no_of_cells)+1].style.backgroundColor=='red')
  { 
    flag_in++;
}}
if(((k-parseInt(no_of_cells))-1)>0)
{if($('td')[(k-parseInt(no_of_cells))-1].style.backgroundColor=='red')
  { 
    flag_in++;
}}
if(((k+parseInt(no_of_cells))-1)<(no_of_cells*no_of_cells))
 {if($('td')[(k+parseInt(no_of_cells))-1].style.backgroundColor=='red')
   { 
     flag_in++;
 }}
 if(((k+parseInt(no_of_cells))+1)<(no_of_cells*no_of_cells))
{ if($('td')[(k+parseInt(no_of_cells))+1].style.backgroundColor=='red')
   { 
     flag_in++;
 }}

       
}
array.push([k,flag])
array_in.push([k,flag_in])


}
for(var i=0 ; i<array.length ; i++)
   {

         if(array[i][1]<2)
         {

          $('td')[array[i][0]].style.backgroundColor='white';   
         }
         if(array[i][1]==2||array[i][1]==3)
         {
          $('td')[array[i][0]].style.backgroundColor='red';  
             this_iteration[iteration].push(array[i][0])

         }
         if(array[i][1]>3)
         {
          $('td')[array[i][0]].style.backgroundColor='white';  
         }
         if(array_in[i][1]==3)
         {
          $('td')[array_in[i][0]].style.backgroundColor='red';  
             this_iteration[iteration].push(array_in[i][0])

         }
    

}
 
}

});
