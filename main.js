
 window.onload = function() {
headerTag = document.getElementsByTagName('header');
headerTag[0].innerHTML = '<a class="logo" href="index.html"> <i class="fal fa-landmark"></i> <h1>Debary Public <br />Library Association</h1> </a> <nav> <ul> <li><a href="about.html"><i class="fal fa-book-user"></i><p>About</p></a></li><li><a href="contact.html"><i class="fal fa-phone-rotary"></i><p>Contact</p></a></li></ul> </nav>';

footerTag = document.getElementsByTagName('footer');
footerTag[0].innerHTML = '<p> &copy; 2019 Debary Public Library Association, Inc. All rights reserved. </p>';

 };