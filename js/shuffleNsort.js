window.onload=function(){
var list = document.getElementById("shnsort"),
button = document.getElementById("shuffle");

function shufListItems(items)
{
    var totalList = items.slice(0), temp, i = totalList.length, rnum;
    while(--i)
    {
        rnum = Math.floor(i * Math.random());
        temp = totalList[rnum];
        totalList[rnum] = totalList[i];
        totalList[i] = temp;
    }
    return totalList;
}

function shufList()
{
    var Chnodes = list.children, i = 0;
    Chnodes = Array.prototype.slice.call(Chnodes);
    Chnodes = shufListItems(Chnodes);
    while(i < Chnodes.length)
    {
        list.appendChild(Chnodes[i]);
        ++i;
    }
} 


function sort() { 
    var shuffl_items, i, run, li, stop; 
    shuffl_items = document.getElementById("shnsort"); 
    run = true; 

    while (run) { 
        run = false; 
        li = shuffl_items.getElementsByTagName("LI"); 

        for (i = 0; i < (li.length - 1); i++) { 
            stop = false; 
            if (li[i].innerHTML >  
                li[i + 1].innerHTML) { 
                stop = true; 
                break; 
            } 
        } 

        if (stop) { 
            li[i].parentNode.insertBefore(li[i + 1], li[i]); 
            run = true; 
        } 
    } 
} 

document.getElementById("shuffle").onclick = shufList;
document.getElementById("sort").onclick = sort;


} 