.. _jsHtml:
Javascript vs HTML
==================

Picture this: You are happily looking at someone's calculator looking for inspiration when suddenly weird characters appear on the screen and threaten you with their *totally not javascript* looks, or how you call it now: *syntax*. They probably look like this: ``<a href='http...'>something</a>``. **Fear not!** These are friendly characters that have been relegated to the darkest parts of BB, but that love showing up here and there to help you when you've already lost all hope or javascript is simply not having a good day. 

HTML's are not the same spices as Javascript, though. But they are the perfect companion for javascript and a loyal friend that help your javascript actually be used by people. Let me explain:

Javascript is similar to general purpose programming languages like Python, C or Java [#f1]_ and hence it is used to perform calculations, run algorithms and make webpages dynamic. On the other hand HTML is closer to markdown (what we use to write the text of the calculators) and it's main purpose is to display things and make them look pretty. When people talk about HTML they usually mention also CSS which is (for our level, anyway) just an ordered way to create and store visual styles and desgin rules that HTML will follow, kind of like a configuration file for CSS.

There are many more differences between Javascript and HTML, like for example the fact that Javascript is generally ran on the user's computer (which is important to keep in mind when we build complex calculators) while HTML is ran on our server and only the results are shown in the user's computer. 

Compatibility is also an important factor to take into account when using Javascript and HTML. HTML tends to be much more widely supported across all browsers (nothing is perfect, though), while Javascript does present significant compatibility concerns for those who program websites from the ground up, which is not us [#f2]_. Luckily we have nice developers that deal with those problems for us and don't allow us to use incompatible functions, which can be a bit frustrating when making very complex calculators, but it ensures that every user that visit our webpage will get a very nice calculator that works as intended.

.. rubric:: tl;dr

Javascript is for doing and HTML is for showing it to people.
Javascript is run by the computer of the user, and our server does the HTML

.. [#f1] It's similar but DEFINITELY different

.. [#f2] Sorry Darek and Daniel ^^ <3
