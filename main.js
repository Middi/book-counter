(function() {
// Create hotel object

var book =  {

name: 'JavaScript & jQuery',
totalPages: 622,
pages: 162,
pagesLeft: function() {
  var total = this.totalPages - this.pages;
  return total;
},
percentageLeft: function() {
  var totalPercentage = this.pagesLeft()/this.totalPages * 100
  return Math.round(totalPercentage);
}
};


// write out hotel name standard rate and special rate

var bookName, totalPages, pagesLeft, percentageLeft; //declares variables

bookName = document.getElementById('bookName'); // gets elements from document
totalPages = document.getElementById('totalPages');
pagesLeft = document.getElementById('pagesLeft');
percentageLeft = document.getElementById('percentageLeft');

bookName.textContent = book.name; // write to document
totalPages.textContent = 'Total Pages: ' + book.totalPages;
pagesLeft.textContent =  book.pagesLeft();
percentageLeft.textContent =  book.percentageLeft() + '%';



function bookInfo(){
  book.name = document.getElementById('booktitle').value;
};

}());
