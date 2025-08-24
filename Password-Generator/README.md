*********** Password Generator ******************

What are used and Why ?

:: Created four different useState hooks for length, numallowed(Numerics Allowed), charallowed (Characters Allowed) and password (Display Password).

:: numallowed and charallowed is initally set to false.

**** The useCallback hook : **

:: useCallback helps your React app run faster by remembering your functions so they don’t get recreated every time your app updates.

:: What is useCallback?
    In React, when your app updates (renders), it recreates everything inside your component, including the functions you write. This recreation can slow things down if you pass those functions to other parts of your app.
    useCallback is like a memory helper for functions. It tells React: "Please remember this function, and only make a new one if something important I care about changes."

:: Think of it Like Saving a Favorite Recipe
    Without useCallback, every time you cook, you rewrite the whole recipe from scratch.
    With useCallback, you write the recipe once and keep it saved. You only rewrite it if you change the ingredients.

:: Syntax
    const memoizedCallback = useCallback(
        () => {
            // Your logic here
        },
        [dependencies] // Array of dependencies
    );


******* Logic **********

:: Used useCallback() hook as the passwordGenerator.

:: In the function, let pass is used to store the password while let str is used to store all the uppercase and lowercase alphabets with will be used in  the passowrd.
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

::  if(numAllowed) str+= "0123456789"
    if(charAllowed) str+= "`~!@#$%^&*()+';:?/.,"  
    These are used to add numerics and characters in password if the if condition is true.

::   for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    This is the loop to generate random number for the str to pick up the alphabets and numerics & characters also if allowed. 
    The loop will iterate according to the length is set.
    Pass is used here to store the passoword.

:: In the first div, i created a grey box in which our app UI will take place.

:: Added an H1.

:: Nested another div which is the field where passoword can be seen along with an input element and a button

:: Created another 3 div for the passowrd length slider, number checkbox and character checkbox repectivley.

:: In the onChange() event in the length,
    onChange={ (e) => {setLength(e.target.value)} }
    Passed e as the event. Followed by required syntax.
    This is known () => {} as firing Callback.

:: In the onChange() event in the Number,
    onChange={ () => {setNumallowed((prev) => !prev);} }
    Used prev not equals to prev, so that whenver the button is clicked, the value changes to true & false respectivley.

:: Same for Character button.

:: We cannot call the passwordGenerator() function as it can fall in an infite loop stated by react and event its not allowed.

:: One way to do this is to create a button and use that function and another way is to use useEffect hook.

*************************** useEffect Hook ********************************

:: Syntax
    useCallback(
        () => {
            // Your logic here
        },
        [dependencies] // Array of dependencies
    );

:: If we'll pass setPassowrd in the dependencies of useCallback() hook then it will end up running in an infinite loop so pass the correct dependencies.

:: This project can be build without using the useCallback() hook and just by using our logic and useEffect() hook but for optimization you can't ignore the use of useCallback() hook.



**************** Creating the functionality of Copy Button ***********

:: If we want that our copy button works fine, we need to specify :
    1> Copy button only copies the passoword not the whole text on screen.
    2> Has access of users Clipboard.

:: For this , I'll use the useRef() hook which works as a reference that what part is your desired one.
    And then just pass it to the field which you want to use. Here, I'll pass it to the input field text.

:: Like this ref={passwordRef}.

:: This is the working of the copy Button ->
     const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()                          //this gives the blue effect of selection , also optimizes the code which is a great practice
    window.navigator.clipboard.writeText(password)
  }, 
  [password])



