!function(){function t(){e.name=document.getElementById("booktitle").value}var e={name:"JavaScript & jQuery",totalPages:622,pages:162,pagesLeft:function(){var t=this.totalPages-this.pages;return t},percentageLeft:function(){var t=this.pagesLeft()/this.totalPages*100;return Math.round(t)}},n,a,o,g;n=document.getElementById("bookName"),a=document.getElementById("totalPages"),o=document.getElementById("pagesLeft"),g=document.getElementById("percentageLeft"),n.textContent=e.name,a.textContent="Total Pages: "+e.totalPages,o.textContent=e.pagesLeft(),g.textContent=e.percentageLeft()+"%"}();