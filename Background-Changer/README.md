********* Simple Background Changer App with React + Vite ******

:: We had built an simple background changing app.

:: If we wanna built this app without using React the first thing that will strike into my mind would be using javaScript onClick method in a button and using a function for each button for a specific color.
(ex. document.style.backgroundColor("red") smthing like this)

:: Here in react, we first created a div element and used tailwind css to define the position of the down bar.

:: After that, i'had nested a another div element into the previous div element with defined positions and used tailwind css to give the down bar style and shape.

:: Afterwards, again nested a div which defined the button style and shape.

:: Used different buttons for specific color.

::*************** LOGIC ******************

:: To change the background on button click, 

#1 I used the useState hook to update the UI (i.e Update the color whenever a button is clicked).

#2 Used color as Variable and setColor as a setter function.

#3 Provided the hook default value of gold color.

#4 In the button, i created a onClick method.

#5 In the onCLick method, i passed setter function as a call back function (for better optimization and zero syntactical error) in the curly braces.

#6 It can be also used as "button onClick=(setcolor)" but the above one is optimized.

#7 Background color can be passed in the className as "bg-red" but we used "style={{backgroundColor : "red"}}" for better readability and code

#8 That's all i've done