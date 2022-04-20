//:::::::::::::::::::::::::::::::::::::::::::04/19/22::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Ex.) Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
	let x = 0;
	for (i in arr){
		if (arr[i] === true){
			x += 1;
		}
	}
	return x;
}

/**
 * Ex.) Which Function Returns the Larger Number?
 * 
 * NOTE: Introduction of Higher Order Functions
 * 
 * Your function will be passed two functions, f and g, that don't take any parameters. 
 * Your function has to call them, and return a string which indicates which function returned 
 * the larger number.
        a. If f returns the larger number, return the string f.
        b. If g returns the larger number, return the string g.
        c. If the functions return the same number, return the string neither.
 */

function f (){
    return 25;
}

function g (){
    return 16;
}

function whichIsLarger(a,b){
    if (a < b){
        // return "b";
        console.log("b")
    } else if (b < a){
        // return "a";
        console.log("a");
    }else if (a === b){
        // return "neither";
        console.log("neither");
    }
    else{
        // return "null";
        console.log("null");
    }

}
whichIsLarger(f,g);