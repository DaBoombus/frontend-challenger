EXPLANATION:
    My solution works by fetching all the recipients from the backend API through an ajax request using the Angular JS $http object. The
    method that does this is located in the recipients service, I decided to change from using the .service() function to register the service
    over to the .factory() as I found that a constructor was less fit than an object containing a single function to be called in order to achieve this
    functionality.

    This service is called from inside the recipientController which turned into a sort of global controller for the entire application as it is also used 
    the recipient details page. Inside this controller there are all the action method used. This includes an action for changing pages to recipient and
    back to home as well as all the functions that assign different $scope level variables to be used across the different pages.

    After some experimentation I realized that I could get the data for the recipients from the home page by storing it in $scope thus not needing
    to make another call to the API when I change pages. On the recipient details page I commented out a block of code that I used to automatically loop
    through the recipient object and populate the page. I replaced it with a more esthetically pleasing approach that also gets the icon from the Gravatar URL
    after realizing that it pointed to an image.

    I am not sure if my approach to passing the data to the recipient page is the best as I am still very new to Angular (this is the first time I use it)
    but the approach I use appears to do everything through AJAX which gives it a nice seamless feel.

    I also moved the h1 tag into the index.html file in order to have it apply across both pages as a banner for the application. For the presentation/styling
    I decided to go for a simplistic look using vibrant colors as well as using CSS functions like hover to make it feel more responsive. I decided not to use any
    additional libraries for this project as I wanted to focus on learning angular. More information about the functionality of my project can be found as comments
    above methods in the recipient.js and recipientController.js.

    Most difficulties I had came from not knowing exactly what I was doing however with google at my side I found that angular JS was very user friendly especially
    compared to native JS. I also had a problem with node where it required me to install the express package which was fixed with the NPM INSTALL EXPRESS commade.
    The more comfortable I get with it the more I like it, it makes things like AJAX and sharing data between pages which are usually tedious
    quick and painless. I also had a bit of trouble wrapping my head around the promise functionality and returning data that was fetched asynchronously, but I am rather
    pleased with the result I got. Overall I think the project took me around 10 or 12 hours with a bit of extra time reading about angular between classes and on the bus.

    I found this challenge to be a very enriching experience I am not sure how difficult it would be for someone who is adept at using angular however as a rookie
    to the framework I found it was a good way to get an overview of the many different mechanisms that comprise the framework. Coming from the perspective of a 
    student where most projects are started from scratch I found it interesting to work within code that had already been written and analyzing it in order to come
    up with the solution.






## Submit

 Fork this repository.
 
 Code.
 
 Tell us about your code in the README.md file:
 
    - How works you solution
    - What libraries you used and why
    - The time it took you
    - The difficulties you had
    - Anything you need/want to explain to us
    - What do you think about the challenge we presented you
 
    
 When you are ready to submit do a pull request on [this repository](https://github.com/PaymentRails/frontend-challenger).
  
 If you have any question contact Julien Prugne <julien.prugne@paymentrails.com>
    
 Thanks and good luck.
  
    
    